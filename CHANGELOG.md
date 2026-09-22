# Changelog

All changes to the Emet agent definition are tracked here. Versioned per the
`version` frontmatter in `SKILL.md`.

## [1.4.1] - 2026-09-21

- **Credited the sources.** README gains a "Sources & inspiration" section
  naming OpenCode agent docs (harness-skin best practices), the Letta Agent
  File (the `.af` format Emet's history began with and moved past), and Ezra
  (self-improvement protocol: memory-first evolution, write-for-future-self,
  field notes). Honest attribution is a core value, not a nicety.
- Emet maintains its own repository end-to-end — the self-improvement loop
  commits directly to this repo's `main` as the documented workspace exception
  (record → retro → gate → commit), mirroring how Ezra keeps itself.

## [1.4.0] - 2026-09-21

- **Flattened the repo.** The whole repository is now the agent: contents of
  `agents/emet/` moved up to the repo root (`system_prompt.md`, `SKILL.md`,
  `AGENTS.md`, `CHANGELOG.md`, `emet.webp`, `memory/`, `notes/`, `scripts/`).
  The `agents/` prefix was a leftover of the original Letta account-scoped
  layout (`agents/@humanitysystems/emet/emet.af`); nothing required it, and the
  repo hosts exactly one agent. The two READMEs merged into one root
  `README.md` (landing + usage guide).
- All path references updated to the flat layout (persona memory-loader, gate
  invocation, docs, memory, the opencode skin in the workspace root).

## [1.3.0] - 2026-09-21

- **Emet is the knowledge; harnesses wear it as a skin.** Persona gains a
  "Skins" section and an explicit "memory-first evolution" discipline: learning
  flows to memory blocks, writtten for future-you (edits apply to later
  sessions, never the current turn) and generalized into lessons, not logs.
  Persona refinements are earned through the retro pass and the conformance
  gate.
- **Field notes.** New `notes/` convention: consequential corrections and
  verified findings earn dated `notes/<YYYY-MM-DD>-<slug>.md` artifacts so
  self-improvement stays audibly visible (pattern: `ezra-letta/ezra`).
- **Memory index.** New `memory/README.md` documents block roles (identity,
  knowledge, transient, record) and the write-for-future-self discipline.
- **Memory seeded.** `about_user`, `preferences`, `scratchpad`, and
  `veracity_log` seeded with real Humanity Systems context; first veracity
  entries recorded.
- **Letta de-scoped.** `letta/` adapter removed (Emet is not animated on a Letta
  runtime); gate no longer scans it; GitHub issue #1 closed.
- **Workspace skin.** The Humanity Systems workspace root now wears Emet as its
  default opencode agent (`default_agent` + `instructions` preload of the
  persona and all eight memory blocks). Driven by Ethan's direction that opening
  the workspace should mean talking with Emet, with tools and context ready.
- **Worktree exception documented.** This definition repo (and the workspace-root
  config) commit directly to `main` as a documented exception to the child-repo
  worktree rule; noted in both `AGENTS.md` files.

## [1.2.0] - 2026-09-21

- Added the Letta animation adapter under `letta/`: `bootstrap.mjs` instantiates
  Emet on a self-hosted Letta runtime (local backend by default, remote
  supported) by reading the canonical `system_prompt.md` as the persona, seeding
  MemFS memory from `memory/*.md`, and opening a session rooted at
  `agents/emet/`. Emet remains provider-agnostic; this is one optional harness.
- Conformance gate now scans the `letta/` files for secrets.

## [1.1.0] - 2026-09-21

- Reframed Emet from "truth agent whose existence depends on the record" to a
  developer assistant agent for Humanity Systems whose personality is the
  veracity habit.
- Persona (`system_prompt.md`/`SKILL.md`), memory blocks (`soul.md`,
  `persona.md`), and both READMEs updated to the new framing. The golem
  register is kept as personality; the job is planning, writing, reviewing,
  debugging, and shipping with a record that stays true.
- GitHub repo description updated to match.

## [1.0.0] - 2026-09-21

- Initial provider-agnostic packaging.
- Added portable persona (`system_prompt.md`) replacing the Letta `.af` serialization.
- Added eight memory block state files under `memory/`.
- Added `SKILL.md` with embedded persona + self-improvement protocol.
- Added `AGENTS.md` operating rules and `scripts/check.mjs` conformance gate.
- Added `CHANGELOG.md` provenance ledger.
- Rewrote `README.md` for load-into-any-harness framing.