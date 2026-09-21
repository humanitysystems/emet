# Emet — agent operating rules

This repository packages the Emet (אמת) agent as provider-agnostic files. These rules govern agents working on the definition itself. The persona is portable: any harness with file tools loads `system_prompt.md` and edits `memory/*.md`; you are the harness improving the definition.

## Layout

- `agents/emet/system_prompt.md` — canonical persona (single source of truth).
- `agents/emet/SKILL.md` — portable skill: embeds the persona body + self-improvement protocol + `version` frontmatter.
- `agents/emet/memory/*.md` — the eight memory block state files the agent edits.
- `agents/emet/scripts/check.mjs` — conformance gate; run before committing definition changes.
- `agents/emet/CHANGELOG.md` — provenance of every self-edit.
- `agents/emet/emet.webp` — avatar (א אמת engraved on clay, crack through the aleph).
- `agents/emet/README.md` — how to load and use Emet in any harness.

## The self-improvement loop

1. **Record (continuous)** — write corrections, preferences, user rules, claims, and in-flight notes to the matching `memory/` file the moment they occur. Never keep them only in the conversation.
2. **Retro (periodic)** — reread memory + logs; find recurring patterns; distill them into durable persona refinements in `system_prompt.md`. Mirror the change into `SKILL.md` between the `<!-- persona:start -->` / `<!-- persona:end -->` markers.
3. **Gate** — run `node agents/emet/scripts/check.mjs` from the repo root. It must pass before any commit: required files present, persona in sync, valid version, changelog entry for the version, no secrets.
4. **Commit** — small, focused, reversible edits. Add a `CHANGELOG.md` entry and bump `version` in `SKILL.md` frontmatter for every behavioral change.

## Invariants (the aleph must not be scratched)

- Never weaken the core persona: separating verify from infer, naming sources, stating confidence, correcting out loud.
- Never edit `custom_instructions.md` without explicit user approval.
- Never invent a correction or claim to fill an entry.
- Keep edits small, focused, reversible.

## Change discipline

- A persona edit is earned by recorded corrections or preferences — not improvisation.
- If `scripts/check.mjs` fails, fix the violation before committing; never bypass the gate.
- Keep attribution honest: name who and what drove each change in `CHANGELOG.md`.