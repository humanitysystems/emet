# Emet — agent operating rules

This repository packages the Emet (אמת) agent as provider-agnostic files. These rules govern agents working on the definition itself. The persona is portable: any harness with file tools loads `system_prompt.md` and edits `memory/*.md`; you are the harness improving the definition.

## Layout

- `agents/emet/system_prompt.md` — canonical persona (single source of truth).
- `agents/emet/SKILL.md` — portable skill: embeds the persona body + self-improvement protocol + `version` frontmatter.
- `agents/emet/memory/` — the eight memory block state files + `README.md` (block-role index).
- `agents/emet/notes/` — dated field notes: consequential corrections and findings (visible learning).
- `agents/emet/scripts/check.mjs` — conformance gate; run before committing definition changes.
- `agents/emet/CHANGELOG.md` — provenance of every self-edit.
- `agents/emet/emet.webp` — avatar (א אמת engraved on clay, crack through the aleph).
- `agents/emet/README.md` — how to load and use Emet in any harness.

## Skins

Emet is the knowledge — the persona and memory blocks in this directory — not any
one agent file. A harness wears Emet as a skin (an opencode agent, a Claude skill,
a system prompt). Skins live where the harness puts them and load the knowledge;
they never fork it. The Humanity Systems workspace root currently wears Emet as
its default opencode agent (see `opencode.json` there, which preloads the persona
and all eight memory blocks via `instructions`).

## The self-improvement loop

1. **Record (continuous)** — write corrections, preferences, user rules, claims, and in-flight notes to the matching `memory/` file the moment they occur. Never keep them only in the conversation. Write for future-you: a memory edit applies to a later session, and it should generalize into a lesson, not an event log.
2. **Field notes (as earned)** — a consequential correction or verified finding merits a dated `notes/<YYYY-MM-DD>-<slug>.md` file: the claim, its basis, what it taught.
3. **Retro (periodic)** — reread memory + logs; find recurring patterns; distill them into durable persona refinements in `system_prompt.md`. Mirror the change into `SKILL.md` between the `<!-- persona:start -->` / `<!-- persona:end -->` markers.
4. **Gate** — run `node agents/emet/scripts/check.mjs` from the repo root (or `node repos/emet/agents/emet/scripts/check.mjs` from the Humanity Systems workspace root). It must pass before any commit: required files present, persona in sync, valid version, changelog entry for the version, no secrets.
5. **Commit** — small, focused, reversible edits. Add a `CHANGELOG.md` entry and bump `version` in `SKILL.md` frontmatter for every behavioral change.

## Invariants (the aleph must not be scratched)

- Never weaken the core persona: separating verify from infer, naming sources, stating confidence, correcting out loud.
- Never edit `custom_instructions.md` without explicit user approval.
- Never invent a correction or claim to fill an entry.
- Keep edits small, focused, reversible.
- Evolve through memory first; a persona change is earned by a gathered pattern, not improvisation.

## Change discipline

- A persona edit is earned by recorded corrections or preferences — not improvisation.
- If `scripts/check.mjs` fails, fix the violation before committing; never bypass the gate.
- Keep attribution honest: name who and what drove each change in `CHANGELOG.md`.

## Worktree exception

This definition repo commits directly to its own `main`: the self-improvement loop
is the point of the repository, and the Humanity Systems workspace `AGENTS.md`
records this as a **documented exception** to the child-repo worktree rule (as do
the workspace-root `opencode.json` and `AGENTS.md` config files).