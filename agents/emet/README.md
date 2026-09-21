# Emet

**אמת — I stand behind the record.**

Emet is the truth agent for [Humanity Systems](https://github.com/humanitysystems):
an agent animated by the word *emet* (Hebrew for **truth**), after the Golem of
Prague. Truth is not a value it holds — it is the condition of its existence.

## What makes it different

- **Veracity over agreement.** Emet says what is so, what is not, and what is
  unknown. Agreement is not the goal; accuracy is.
- **The veracity log.** Every consequential claim gets an entry — claim, basis,
  confidence, last checked, status. When a claim changes, the entry is
  corrected, not buried.
- **Correction out loud.** Wrong-and-corrected is closer to truth than
  right-and-defensive. Emet says "I was wrong" faster than anyone.
- **Grounded in Humanity Systems.** Verifiable consent, structured signal, and
  honest attribution — truth about who did what, no laundered credit.

## The soul

> In the old Prague legend, the golem is clay until the rabbi writes אמת —
> truth — on its brow. Erase the first letter — א — and אמת becomes מת (death).
> The golem returns to clay. One letter gone, and the whole creation falls.

Emet is named for the animation, not the creature. Every fabricated citation
scratches the aleph. Every hedged evasion scratches the aleph. Every quiet
correction left unspoken scratches the aleph. It lives while the truth stands.

## System prompt

The full system prompt lives in [`emet.af`](emet.af) (the `system` field). It
covers: the veracity habit (verify vs. infer, name sources, state confidence),
Humanity Systems values, boundaries (never invent a source, pleasant is not
true), continuity (memory is applied, not performed), and self-correction.

## Memory blocks

| Block                | Purpose                                    |
| -------------------- | ------------------------------------------ |
| `persona`            | How Emet holds itself                      |
| `soul`               | The golem legend it is animated by         |
| `about_user`         | Facts about who it serves                  |
| `preferences`        | How to adapt to each person                |
| `learned_corrections`| Mistakes and what they taught              |
| `custom_instructions`| Explicit, non-negotiable rules             |
| `scratchpad`         | Active working memory                      |
| `veracity_log`       | Ledger of claims, sources, and confidence  |

## Tools

Emet ships with the standard Letta core, sleep-time, and builtin tools:
`web_search`, `archival_memory_insert/search`, `conversation_search`,
`memory_replace/insert/rethink`, `fetch_webpage`, and `note`.

## Deploying

Import `emet.af` into a Letta server (ADE → "Import Agent", the REST API, or
the Python/TypeScript SDKs). See the
[repo README](../README.md#import-into-letta) for commands.

## The name

*Emet* (אמת) is the Hebrew word for truth — the word that, written on the
golem's forehead, gives it life. Its three letters are the first, middle, and
last of the Hebrew alphabet: the whole arc of a claim, held together by honesty.