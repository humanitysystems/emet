# Changelog

All changes to the Emet agent definition are tracked here. Versioned per the
`version` frontmatter in `SKILL.md`.

## [1.5.5] - 2026-09-21

- **Landing page: hero headline is now just the word.** The hero h1 drops the
  "— I stand behind the record." tagline and stands as simply אמת — the word
  itself, in gold, at display scale. The dead `.gradient` rule is removed with
  it. Driven by Ethan's direction.

## [1.5.4] - 2026-09-21

- **Landing page restyled to the Cosmic Kabbalah design system.** New
  `docs/design.md` defines the system — dark void substrate (`#0B0E17`),
  sacred-geometry gold (`#E0C068`), divine-spark cyan (`#5EEAD4`), magenta
  emanations, glass panels, Cinzel / Cinzel Decorative / Plus Jakarta Sans /
  Space Grotesk typography — as YAML tokens plus a usage guide. The page moves
  from the light Neuron/Parchment theme to it: nebula + starfield background,
  glass cards with gold borders, the avatar as a glowing Sefirot sphere, gold
  celestial CTAs, and a cosmic band for the soul section. Fonts swapped in
  `index.html`; `style.css` rewritten against the new tokens. README's Website
  section and structure block updated. Driven by Ethan's direction.

## [1.5.3] - 2026-09-21

- **Landing page: hero fact-row → dictionary card.** The four-cell strip
  (Name / Word / Form / Harness) is replaced by a dictionary entry for אמת —
  headword, syllabification, part of speech, two numbered definitions drawn
  from the README's "The name" section — with Form and Harness as labeled
  facts beneath, each given enough words to actually communicate ("The
  knowledge — the persona and memory, plain files any harness can load";
  "Any — Claude Code, opencode, Codex, ChatGPT, CI"). The redundant Name cell
  is gone. Driven by Ethan's review.

## [1.5.2] - 2026-09-21

- **Landing page: "Wear it as a skin" → "Write it on the brow."** The section
  that loads Emet into a harness is now named for the legend's animation act —
  the rabbi writes אמת on the golem's brow — echoing the soul section above it.
  Nav link shortened to "Animate"; hero CTA and anchor updated to match. Driven
  by Ethan's review.

## [1.5.1] - 2026-09-21

- **Landing page: dropped the "Sources" section.** The attribution list
  (repo, README, OpenCode docs, Letta Agent File, Ezra) lives in the README's
  "Sources & inspiration" section, which the page already links to from "Wear
  it as a skin". One page, one place for attribution — driven by Ethan's
  review. Dead `.source-list` CSS removed with it.

## [1.5.0] - 2026-09-21

- **Landing page.** New `docs/` static site (plain HTML/CSS, Neuron/Parchment
  design system, no framework) served at
  https://humanitysystems.github.io/emet via a GitHub Pages workflow
  (`.github/workflows/pages.yml`, deploy on push to `main`). Content: what Emet
  is (the knowledge), the veracity habit, the soul (golem legend), how to wear
  it as a skin, and sources — with the avatar (`emet.webp`) on the hero.
- **Hosting decision: project pages on this repo.** The org-site subpath option
  would require creating `humanitysystems/humanitysystems.github.io` — a repo
  creation (hard boundary) that workspace#2 is parked on. Project pages keeps
  the repo as the source of truth and serves at the address the issue proposed;
  if the org site is later created, the `docs/` source carries over unchanged.
- README gains a "Website" section and the structure block now lists `docs/`
  and the Pages workflow.

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