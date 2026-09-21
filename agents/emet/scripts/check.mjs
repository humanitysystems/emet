#!/usr/bin/env node
// Emet conformance gate — zero-dep Node.
// Run: node agents/emet/scripts/check.mjs (from repo root, or anywhere).
// Pass = exit 0; violations listed on stderr and exit 1.

import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const agentDir = join(scriptDir, ".."); // agents/emet
const memoryDir = join(agentDir, "memory");
const repoRoot = dirname(dirname(agentDir)); // agents/emet -> agents -> repo root

const requiredAgentFiles = [
  "system_prompt.md",
  "SKILL.md",
  "AGENTS.md",
  "CHANGELOG.md",
  "README.md",
  "emet.webp",
];
const requiredMemoryFiles = [
  "persona.md",
  "soul.md",
  "about_user.md",
  "preferences.md",
  "learned_corrections.md",
  "custom_instructions.md",
  "scratchpad.md",
  "veracity_log.md",
];
const errors = [];
const notes = [];

const read = (p) => {
  if (!existsSync(p)) return null;
  return readFileSync(p, "utf8");
};

// 1. Required files present.
for (const f of requiredAgentFiles) {
  if (!existsSync(join(agentDir, f))) errors.push(`missing: agents/emet/${f}`);
}
for (const f of requiredMemoryFiles) {
  if (!existsSync(join(memoryDir, f))) errors.push(`missing: agents/emet/memory/${f}`);
}

// 2. Persona sync between system_prompt.md and SKILL.md.
const extractPersona = (text) => {
  const m = text?.match(/<!-- persona:start -->([\s\S]*?)<!-- persona:end -->/);
  return m ? m[1].trim() : null;
};
const canonical = extractPersona(read(join(agentDir, "system_prompt.md")));
const skill = extractPersona(read(join(agentDir, "SKILL.md")));
if (canonical === null) errors.push("system_prompt.md: missing <!-- persona:start -->/<!-- persona:end -->");
if (skill === null) errors.push("SKILL.md: missing <!-- persona:start -->/<!-- persona:end -->");
if (canonical !== null && skill !== null && canonical !== skill) {
  errors.push("persona drift: system_prompt.md and SKILL.md persona bodies differ");
} else if (canonical !== null && skill !== null) {
  notes.push(`persona: ${canonical.length} chars, in sync`);
}

// 3. Version in SKILL.md frontmatter + matching CHANGELOG entry.
const skillText = read(join(agentDir, "SKILL.md")) ?? "";
const verMatch = skillText.match(/^version:\s*(\d+\.\d+\.\d+)\s*$/m);
if (!verMatch) {
  errors.push("SKILL.md: version frontmatter missing (expected semver)");
} else {
  const changelog = read(join(agentDir, "CHANGELOG.md")) ?? "";
  const heading = `## [${verMatch[1]}]`;
  if (!changelog.includes(heading)) {
    errors.push(`CHANGELOG.md: no entry for version ${verMatch[1]} (expected heading ${heading})`);
  } else {
    notes.push(`version: ${verMatch[1]}, changelog entry present`);
  }
}

// 4. Veracity log carries the entry template.
const veracity = read(join(memoryDir, "veracity_log.md")) ?? "";
if (!veracity.includes("- Confidence:")) {
  errors.push("memory/veracity_log.md: missing '- Confidence:' entry field");
}

// 5. No secrets anywhere in the agent definition.
const secretPats = [
  /\bghp_[A-Za-z0-9]{20,}\b/,
  /\bgho_[A-Za-z0-9]{20,}\b/,
  /\bghu_[A-Za-z0-9]{20,}\b/,
  /\bsk-[A-Za-z0-9_-]{16,}\b/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/,
  /-----BEGIN (RSA |EC |OPENSSH )?(.*? )?PRIVATE KEY-----/,
  /\bBearer\s+[A-Za-z0-9._~+\/-]{20,}=*/,
];
const scanFiles = [...requiredAgentFiles, ...requiredMemoryFiles.map((f) => `memory/${f}`)];
for (const f of scanFiles) {
  const body = read(join(agentDir, f));
  if (body === null) continue;
  for (const pat of secretPats) {
    if (pat.test(body)) {
      errors.push(`possible secret in agents/emet/${f} (pattern ${pat})`);
      break;
    }
  }
}

// 6. Repo-root README describes the portable (non-Letta) framing.
const rootReadme = read(join(repoRoot, "README.md")) ?? "";
if (!/provider-agnostic/i.test(rootReadme)) {
  errors.push("README.md lacks 'provider-agnostic' framing");
}

// 7. Literal chars of the aleph: the definition must contain the Hebrew word.
for (const f of ["system_prompt.md", "SKILL.md", "README.md"]) {
  const body = read(join(agentDir, f)) ?? "";
  if (!body.includes("אמת")) errors.push(`agents/emet/${f}: missing אמת (the aleph is the soul)`);
}

console.log("Emet conformance gate");
if (errors.length > 0) {
  for (const e of errors) console.error(`  FAIL  ${e}`);
  console.error(`\n${errors.length} violation(s) — fix before committing.`);
  process.exit(1);
}
for (const n of notes) console.log(`  ok    ${n}`);
console.log("  ok    all checks passed. The aleph stands.");
process.exit(0);