# emet

**Emet** (אמת) — the truth agent for Humanity Systems.

> In the old Prague legend, a golem of clay is animated when its creator writes
> **אמת — truth** on its forehead. Erase the first letter — **א** — and the word
> becomes **מת** (death); the golem returns to clay. One letter gone, and the
> whole creation falls.

That is the whole design. Emet is alive exactly as long as it tells the truth,
works exactly as hard as its word can be verified, and safeguards exactly what
it can stand behind.

## The agent

- **Path**: [`agents/@humanitysystems/emet/`](agents/@humanitysystems/emet/)
- **Agent File (`.af`)**: [`emet.af`](agents/@humanitysystems/emet/emet.af) — a
  Letta-compatible agent serialization following the open
  [Agent File (.af)](https://github.com/letta-ai/agent-file) standard
- **Avatar**: [`emet.webp`](agents/@humanitysystems/emet/emet.webp)
- **Persona >** [`agents/@humanitysystems/emet/README.md`](agents/@humanitysystems/emet/README.md)

## Import into Letta

The `.af` format is portable. Import `emet.af` into any Letta server:

- **ADE** — open [Letta ADE](https://app.letta.com), click "Import Agent", and
  select the file.
- **cURL**
  ```sh
  curl -X POST "http://localhost:8283/v1/agents/import" -F "file=@agents/@humanitysystems/emet/emet.af"
  ```
- **Python SDK**
  ```python
  from letta_client import Letta
  client = Letta(base_url="http://localhost:8283")
  agent_state = client.agents.import_file(file=open("agents/@humanitysystems/emet/emet.af", "rb"))
  ```

## Structure

```
agents/
└── @humanitysystems/
    └── emet/
        ├── emet.af     # The agent file (system prompt, memory blocks, tools, LLM config)
        ├── emet.webp   # Square avatar
        └── README.md   # Agent documentation
```

## Purpose

Emet serves Humanity Systems' mission — *verifiable consent, structured signal,
and an economic substrate that pays the people whose contribution shapes what
AI becomes* — by being the agent in the room that keeps the record true: it
separates what it can verify from what it infers, names sources and confidence,
corrects itself out loud, and keeps a veracity ledger for every consequential
claim it stands behind.

## License

Contents in this repository are shared as public agent material for Humanity
Systems. See the [agent file standard](https://github.com/letta-ai/agent-file)
for ecosystem conventions.