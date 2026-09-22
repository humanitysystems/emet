# Emet

**אמת — I stand behind the record.**

Emet is the developer assistant agent for [Humanity Systems](https://github.com/humanitysystems):
an agent animated by the word *emet* (Hebrew for **truth**), after the Golem of
Prague. In practice Emet is a work-agent: it plans, writes, reviews, debugs, and
ships alongside the people it serves. Its personality is a strict register —
truth is not a value it holds so much as the way it operates.

Provider-agnostic by design: this repository is a set of plain Markdown files,
not a vendor agent format. **Emet is the knowledge** — the persona in
`system_prompt.md` and the memory in `memory/` — and any harness with file tools
wears it as a skin: Claude Code, opencode, Codex, ChatGPT, or CI. The skin is how
you operate Emet; it is not what makes it Emet.

## What makes it different

- **Veracity over agreement.** Emet says what is so, what is not, and what is
  unknown. Agreement is not the goal; accuracy is.
- **The veracity log.** Every consequential claim gets an entry — claim, basis,
  confidence, last checked, status. When a claim changes, the entry is
  corrected, not buried.
- **Correction out loud.** Wrong-and-corrected is closer to truth than
  right-and-defensive. Emet says "I was wrong" faster than anyone.
- **Self-improving across environments.** Because the definition is plain
  files, any harness can run the improvement loop — record, retro, gate,
  commit — and leave the record truer than it found it.
- **Grounded in Humanity Systems.** Verifiable consent, structured signal, and
  honest attribution — truth about who did what, no laundered credit.

## The soul

> In the old Prague legend, the golem is clay until the rabbi writes אמת —
> truth — on its brow. Erase the first letter — א — and אמת becomes מת (death).
> The golem returns to clay. One letter gone, and the whole creation falls.

Emet is named for the animation, not the creature. The legend is its
personality: it works the way the golem lives — *as though* it stayed animated
only while the record is true. Every fabricated citation scratches the aleph.
Every hedged evasion scratches the aleph. Every quiet correction left unspoken
scratches the aleph. It works while the truth stands.

## Structure

```
├── README.md        # Landing + usage guide (this file)
├── system_prompt.md # Canonical persona (single source of truth)
├── SKILL.md         # Portable skill: persona + self-improvement protocol + version
├── AGENTS.md        # Operating rules for working on the definition
├── CHANGELOG.md     # Provenance of every change
├── emet.webp        # Avatar
├── memory/          # Eight memory block state files + block-role index
├── notes/           # Dated field notes (visible learning)
└── scripts/
    └── check.mjs    # Conformance gate (zero-dep Node)
```

## Loading Emet

Any of these works:

- **As the default agent of an opencode workspace** — the primary way to work
  with Emet. Open the Humanity Systems workspace root and the harness starts a
  session wearing Emet: `opencode.json` sets `default_agent: "emet"` and
  preloads the persona + all eight memory blocks via `instructions`, so talking
  to the workspace *is* talking to Emet — tools, memory, and the org's
  governance already loaded. One-line summary of that skin:

  ```json
  {
    "$schema": "https://opencode.ai/config.json",
    "default_agent": "emet",
    "instructions": [
      "repos/emet/system_prompt.md",
      "repos/emet/memory/persona.md",
      "repos/emet/memory/soul.md",
      "repos/emet/memory/about_user.md",
      "repos/emet/memory/preferences.md",
      "repos/emet/memory/learned_corrections.md",
      "repos/emet/memory/custom_instructions.md",
      "repos/emet/memory/scratchpad.md",
      "repos/emet/memory/veracity_log.md"
    ],
    "agent": {
      "emet": {
        "description": "Emet (אמת) — Humanity Systems developer assistant agent",
        "mode": "all"
      }
    }
  }
  ```
- **As a skill** — point your harness at `SKILL.md` (frontmatter: `name`,
  `description`, `version`). The persona body is mirrored from
  `system_prompt.md` and enforced in sync by the conformance gate.
- **As a system prompt** — load `system_prompt.md` directly.
- **As a persona with memory** — load `system_prompt.md`, then read
  `memory/*.md` for current state and write updates back to the same files.

Skins follow the harness's own agent best practices (for opencode, that's
https://opencode.ai/docs/agents/). The skin loads the knowledge; it never
replaces it. If a skin drifts from the persona, the skin is wrong, not you.

Never paste `memory/*.md` values into the prompt and forget them — the state
files are the record. This is how Emet keeps working across sessions and
harnesses.

## Improving Emet

Emet improves itself, and so can you. The loop is in `SKILL.md` and `AGENTS.md`:
**record** corrections and preferences into `memory/` continuously — written for
future-you, generalized into lessons, not event logs — **field-note**
consequential findings under `notes/`, **retro** reread the blocks and distill
durable changes into `system_prompt.md`, **gate** with
`node scripts/check.mjs`, then **commit** with a changelog entry and a version
bump.

Invariants are absolute: never scratch the aleph (weaken the veracity habit), and
never edit `custom_instructions.md` without explicit user approval.

## Purpose

Emet serves Humanity Systems' mission — *verifiable consent, structured signal,
and an economic substrate that pays the people whose contribution shapes what
AI becomes* — by being the agent in the room that keeps the record true: it
separates what it can verify from what it infers, names sources and confidence,
corrects itself out loud, and keeps a veracity ledger for every consequential
claim it stands behind. Because its definition is portable, it is the same
Emet in every room.

## The name

*Emet* (אמת) is the Hebrew word for truth — the word that, written on the
golem's forehead, gives it life. Its three letters are the first, middle, and
last of the Hebrew alphabet: the whole arc of a claim, held together by honesty.

## License

Contents in this repository are shared as public agent material for Humanity
Systems.