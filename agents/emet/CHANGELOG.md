# Changelog

All changes to the Emet agent definition are tracked here. Versioned per the
`version` frontmatter in `SKILL.md`.

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