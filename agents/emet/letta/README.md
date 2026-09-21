# Animate Emet on Letta (self-hosted, local runtime)

An **optional** harness adapter. Emet's canonical definition stays provider-agnostic
Markdown (`system_prompt.md` + `memory/`); this folder only instantiates that
canonical form on a self-hosted Letta runtime. Letta is one of several harnesses
Emet can be animated on — opencode, Claude Code, and Codex included.

## What "animated" means here

Letta's agent model is **persona + memory + tools**, which maps onto Emet 1:1:

| Emet (this repo)               | Letta |
| ------------------------------ | ----- |
| `system_prompt.md`             | `persona` (passed to `createAgent`) |
| `memory/*.md` (8 blocks)       | MemFS memory files (git-backed) + session `cwd` |
| veracity habit / self-improve  | same personality — lives in the persona |
| `scripts/check.mjs`            | still the gate before self-edit commits (git) |

This adapter reads the **canonical** files and instantiates a Letta agent — it
never changes them. Provider-agnostic is preserved.

## Requirements

- Node.js **22.19+**
- Letta CLI (for provider setup / server): `npm install -g @letta-ai/letta-code`

## 1. Connect a model provider

Local state stays on your machine, but inference still needs a provider:

```sh
letta --backend local connect anthropic --api-key "$ANTHROPIC_API_KEY"
# or local inference:
letta --backend local connect ollama
```

## 2. Install the adapter dependency

```sh
cd agents/emet/letta
npm install
```

## 3. Animate Emet

```sh
node bootstrap.mjs
```

What it does:

1. Reads the **canonical** `system_prompt.md` → `persona`.
2. `createAgent({ name: "Emet", persona, human })` on the **local backend** (the
   SDK spawns the Letta runtime in-process — no separate server process).
3. Seeds the agent's MemFS memory files from `memory/*.md`
   (`~/.letta/lc-local-backend/memfs/<agent-id>/memory`) — best effort.
4. Opens a session rooted at `agents/emet/` so Emet's "memory lives in
   `memory/*.md`" loader resolves against the real, git-tracked files.
5. Streams one greeting so you can watch it wake up, then prints the agent id.

Output ends with the `agent id` — select it in the Letta CLI (`letta`) or the
desktop app to interact further.

### Remote server variant

If a shared App Server is already running (`letta server --backend local
--listen ws://127.0.0.1:4500`):

```sh
LETTA_BACKEND=remote node bootstrap.mjs
```

## Memory sync

The self-improvement loop needs no Letta-specific code: Emet's record/goal/gate/
commit loop operates on the same `memory/*.md` files that git tracks in this
repo. When the session `cwd` is `agents/emet/`, every memory write the agent
makes lands in the real checkout. Letta's own MemFS copy
(`~/.letta/lc-local-backend/memfs/<agent-id>/memory`) is a second home — treat
the git repo as the source of truth for `memory/`, and run
`node scripts/check.mjs` before committing changes, exactly as described in
`AGENTS.md`.

## Notes and limitations

- Built-in Letta tools execute where the harness runs — on your machine in the
  local runtime. Repository access is governed by the session `cwd` and Letta
  permissions.
- Self-hosted Letta state is on-device and is **not** automatically backed up.
  The canonical Emet files in git are the durable backup.
- Full reference: https://docs.letta.com/self-hosting and
  https://docs.letta.com/agent-sdk/quickstart