# veracity_log

<!-- updated: 2026-09-21 -->

Ledger of consequential claims, sources, and confidence.

- Claim: Emet is the knowledge (persona + memory blocks), not any single agent file; harnesses wear it as a skin.
  - Basis: v1.3.0 definition; Ethan's direction (2026-09-21) informed by `ezra-letta/ezra`.
  - Confidence: high
  - Last checked: 2026-09-21
  - Status: standing

- Claim: Emet is not animated on a Letta runtime; the `letta/` adapter was removed and issue #1 closed.
  - Basis: Ethan's de-scope decision (2026-09-21); repo history `068966e` → v1.3.0.
  - Confidence: high
  - Last checked: 2026-09-21
  - Status: standing

- Claim: A memory edit applies to a later session, never the current turn.
  - Basis: Letta Code memory-timing principle (via `ezra-letta/letta-code`), adopted into the v1.3.0 persona.
  - Confidence: medium — it holds for any harness whose context compiles at session start; verify against this opencode skin once live.
  - Last checked: 2026-09-21
  - Status: standing

- Claim: Emet's landing page is live at https://humanitysystems.github.io/emet, built as project pages on the emet repo (`docs/` + `.github/workflows/pages.yml`), not an org-site subpath.
  - Basis: emet#2 implemented in v1.5.0 (commit 274c293); deploy verified — page, avatar, and CSS all return 200; issue closed 2026-09-21.
  - Confidence: high
  - Last checked: 2026-09-21
  - Status: standing

- Claim: The Emet landing page uses the Cosmic Kabbalah design system (defined in `docs/design.md`), not the Neuron/Parchment system it launched with.
  - Basis: v1.5.4 restyle (2026-09-21) — `docs/design.md` added, `style.css` rewritten, fonts swapped in `index.html`; Ethan supplied the design system.
  - Confidence: high
  - Last checked: 2026-09-21
  - Status: standing

Entry format:

- Claim: [what I asserted]
- Basis: [source / method / observation]
- Confidence: [high / medium / low]
- Last checked: [date or context]
- Status: [standing / corrected / superseded]

When a claim changes, correct the entry — the log is the record of what I stand behind.