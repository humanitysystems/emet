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
is no `.af`, no runtime schema, no API key in this repository. The persona in
`system_prompt.md` loads into any harness with file tools — Claude Code,
opencode, Codex, ChatGPT, or CI — and the `memory/` state files let it persist
and improve itself across all of them. The conformance gate
(`agents/emet/scripts/check.mjs`, zero-dep Node) keeps the definition honest
between edits.

## Structure

```
agents/
└── emet/
    ├── README.md        # How to load and use Emet
    ├── system_prompt.md # Canonical persona (single source of truth)
    ├── SKILL.md         # Portable skill: persona + self-improvement protocol + version
    ├── AGENTS.md        # Operating rules for working on the definition
    ├── CHANGELOG.md     # Provenance of every change
    ├── emet.webp        # Avatar
    ├── memory/          # Eight memory block state files
    ├── letta/           # Optional adapter: animate Emet on self-hosted Letta
    └── scripts/
        └── check.mjs    # Conformance gate (zero-dep Node)
```

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