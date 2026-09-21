#!/usr/bin/env node
// Animate Emet on a self-hosted Letta runtime (local backend by default).
//
// This adapter reads the CANONICAL Emet files and instantiates a Letta agent.
// Emet itself stays provider-agnostic Markdown; Letta is just one harness.
//
// Requires: Node.js >= 22.19 and the Letta Agent SDK.
//   cd agents/emet/letta && npm install
//   node bootstrap.mjs           # local backend (SDK spawns Letta Code in-process)
//   LETTA_BACKEND=remote node bootstrap.mjs   # when a `letta server --listen` is running

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const here = dirname(fileURLToPath(import.meta.url)); // agents/emet/letta
const agentDir = join(here, ".."); // agents/emet
const memoryDir = join(agentDir, "memory");

const MEMORY_BLOCKS = [
  "persona",
  "soul",
  "about_user",
  "preferences",
  "learned_corrections",
  "custom_instructions",
  "scratchpad",
  "veracity_log",
];

function fail(message) {
  console.error(message);
  process.exit(1);
}

async function main() {
  const { LettaAgentClient } = await import("@letta-ai/letta-agent-sdk").catch(() =>
    fail("Missing dependency. Run:  cd agents/emet/letta && npm install"),
  );

  // 1. Canonical source of truth feeds the Letta persona.
  const persona = await readFile(join(agentDir, "system_prompt.md"), "utf8");
  const human =
    "The person Emet serves is a developer working with Humanity Systems. " +
    "Adapt via memory/about_user.md, memory/preferences.md, and " +
    "memory/custom_instructions.md.";

  // 2. Create the agent on the local (or remote) backend.
  const client = new LettaAgentClient({
    backend: (process.env.LETTA_BACKEND ?? "local"),
    ...(process.env.LETTA_APP_SERVER_URL && { url: process.env.LETTA_APP_SERVER_URL }),
    ...(process.env.LETTA_APP_SERVER_TOKEN && { authToken: process.env.LETTA_APP_SERVER_TOKEN }),
  });
  const agentId = await client.createAgent({ name: "Emet", persona, human });
  console.log(`Emet agent id: ${agentId}`);

  // 3. Seed the agent's MemFS memory from memory/*.md (best effort).
  const memfsPath = join(homedir(), ".letta", "lc-local-backend", "memfs", agentId, "memory");
  if (existsSync(memfsPath)) {
    await mkdir(memfsPath, { recursive: true });
    for (const block of MEMORY_BLOCKS) {
      const body = await readFile(join(memoryDir, `${block}.md`), "utf8");
      await writeFile(join(memfsPath, `${block}.md`), body, "utf8");
    }
    console.log(`seeded MemFS memory: ${memfsPath}`);
  } else {
    console.warn(`MemFS path not found; memory seeding skipped: ${memfsPath}`);
  }

  // 4. Open a session rooted at agents/emet so the "memory/*.md" loader resolves.
  const session = client.createSession(agentId, { cwd: agentDir });
  console.log(`session open (cwd = ${agentDir}); saying hello...`);
  await session.send("Hello. In one short paragraph, state who you are and the record you keep.");
  for await (const message of session.stream()) {
    if (message.type === "assistant") process.stdout.write(message.content);
  }
  console.log();
  console.log("Emet is alive on Letta. Interactively, open the CLI or desktop app and select:");
  console.log(`  agent id: ${agentId}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});