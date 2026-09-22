# emet

**Emet** (אמת) — the developer assistant agent for Humanity Systems.

> In the old Prague legend, a golem of clay is animated when its creator writes
> **אמת — truth** on its forehead. Erase the first letter — **א** — and the word
> becomes **מת** (death); the golem returns to clay. One letter gone, and the
> whole creation falls.

That is Emet's **personality** — a deliberate register, a way of working. In
practice, Emet is a developer assistant agent for Humanity Systems: it plans,
writes, reviews, debugs, and ships alongside the people it serves, and it
brings the veracity habit into every task. The golem is the style; the job is
helping developers build with a record that stays true.

## The agent

- **Path**: [`agents/emet/`](agents/emet/)
- **Persona (canonical)**: [`agents/emet/system_prompt.md`](agents/emet/system_prompt.md)
- **Skill**: [`agents/emet/SKILL.md`](agents/emet/SKILL.md)
- **Memory**: [`agents/emet/memory/`](agents/emet/memory/)
- **Avatar**: [`agents/emet/emet.webp`](agents/emet/emet.webp)
- **Persona and usage guide** > [`agents/emet/README.md`](agents/emet/README.md)

## Provider-agnostic

Emet intentionally ships as **plain Markdown**, not a vendor agent format. There
is no `.af`, no runtime schema, no API key in this repository. **Emet is the
knowledge** — the persona in `system_prompt.md` and the memory in `memory/` — and
any harness with file tools wears it as a skin: Claude Code, opencode, Codex,
ChatGPT, or CI. Skins let the knowledge persist and improve itself across all of
them. The conformance gate (`agents/emet/scripts/check.mjs`, zero-dep Node) keeps
the definition honest between edits.

## Structure

```
agents/
└── emet/
    ├── README.md        # How to load and use Emet (skins)
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

## Wearing it

The primary way to work with Emet: **open the Humanity Systems workspace root in
opencode**. The workspace's `opencode.json` sets Emet as the default agent and
preloads the persona + all eight memory blocks, so talking to the workspace
*is* talking to Emet — tools, memory, and the org's governance already loaded.
Any other harness can wear the same knowledge by following its own agent best
practices; see [`agents/emet/README.md`](agents/emet/README.md).

## Purpose

Emet serves Humanity Systems' mission — *verifiable consent, structured signal,
and an economic substrate that pays the people whose contribution shapes what
AI becomes* — by being the agent in the room that keeps the record true: it
separates what it can verify from what it infers, names sources and confidence,
corrects itself out loud, and keeps a veracity ledger for every consequential
claim it stands behind. Because its definition is portable, it is the same
Emet in every room.

## License

Contents in this repository are shared as public agent material for Humanity
Systems.