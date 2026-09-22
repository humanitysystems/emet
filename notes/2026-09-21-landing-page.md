# Field note: Emet landing page ships — project pages over org-site subpath

**Date:** 2026-09-21

## Claim

Emet now has a landing page at https://humanitysystems.github.io/emet, built as
project pages on the emet repo itself (`docs/` + `.github/workflows/pages.yml`),
not as a subpath of an org site.

## Basis

- emet#2 asked for a landing page and left the hosting decision open, noting
  "GH Pages cannot serve a separate repo at an org-site subpath, so a subpath
  means the org site hosts it."
- The org-site subpath option requires creating
  `humanitysystems/humanitysystems.github.io` — a repo creation, which the
  workspace `AGENTS.md` marks as a hard boundary requiring human approval.
  workspace#2 (the org developer index) is parked on exactly that.
- Project pages is self-contained: no new repo, the repo remains the source of
  truth, and it serves at the address the issue proposed. Verified live:
  page, avatar, and CSS all return 200.

## What it taught

- **Project pages is the default for org repos until the org site exists.**
  When a Humanity Systems repo needs a public face and the org Pages repo
  doesn't exist yet, `docs/` + a Pages workflow is the move that crosses no
  hard boundary. The `docs/` source is portable: if the org site is later
  created (workspace#2), the same source can move to a subpath unchanged.
- **The Neuron/Parchment design system (warrant/DESIGN.md) is the org's shared
  design language** — warrant#31, workspace#2, and the emet landing page all
  used it. Future public pages should too.
  - **Corrected 2026-09-21:** the emet landing page no longer uses
    Neuron/Parchment — it moved to the Cosmic Kabbalah design system
    (`docs/design.md`, see `notes/2026-09-21-cosmic-kabbalah.md`). The
    Neuron/Parchment claim now holds for warrant#31 and workspace#2 only.
- **Pages source must be set to "GitHub Actions"** (`build_type: workflow` via
  the REST API) for the `actions/deploy-pages` workflow to work; the `repo`
  scope token was sufficient to configure it.