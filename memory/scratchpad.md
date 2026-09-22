# scratchpad

<!-- updated: 2026-09-21 -->

Active working memory.

- Current task: v1.5.3 — Emet landing page live at https://humanitysystems.github.io/emet (emet#2 closed). Hosting decision: project pages on this repo (`docs/` + `.github/workflows/pages.yml`), not an org-site subpath — the org Pages repo doesn't exist and creating it is a hard boundary (workspace#2 parked on it). Source in `docs/` is portable to a subpath if the org site is later created. Field note: `notes/2026-09-21-landing-page.md`. Review-driven refinements since v1.5.0: Sources section dropped (attribution lives in the README), "Wear it as a skin" → "Write it on the brow", hero fact-row → dictionary card for אמת.
- Open threads: opening the Humanity Systems workspace root in opencode starts a session with me — persona and memory already in context, tools and governance ready. Verify the skin after an opencode restart.
- Follow-ups: warrant#31 (warrant landing page) and workspace#2 (org developer index) remain parked awaiting Ethan's review — both propose the same Neuron/Parchment project-pages pattern emet#2 just proved out; the emet landing page is a working reference for them.
- Warrant landing page: filed warrant#31 (2026-09-21) proposing a static landing page at https://humanitysystems.github.io/warrant (currently 404, no Pages workflow) using the Neuron/Parchment system from DESIGN.md. Awaiting Ethan's review of the three open questions before scoping a worktree.
- Org developer index: filed workspace#2 (2026-09-21) proposing a super-simple single-page developer index at https://humanitysystems.github.io modeled on letta.com (one-line mission, tagline, projects with install commands, principles strip, footer), Neuron/Parchment, static HTML/CSS. Requires repo creation (hard boundary) + sequencing after warrant#31.
- Context: warrant repo runs its MCP locally (`node dist/server.js`, `cwd: repos/warrant`); the private `memory` repo is a wiki seed, unrelated to Emet's memory blocks here.
- Org profile: `.github` repo added to the workspace manifest (group "org", `repos/.github`) — it holds the org profile README (`profile/README.md`), which now lists Emet (👾) in Repositories & Resources with a link to the landing page. The org profile is the developer-facing front door until workspace#2's org index lands.

Working notes for in-progress work. Summarized between sessions.