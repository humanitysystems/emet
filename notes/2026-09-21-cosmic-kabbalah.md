# Field note: Emet landing page moves to the Cosmic Kabbalah design system

**Date:** 2026-09-21

## Claim

The Emet landing page (https://humanitysystems.github.io/emet) is restyled from
the light Neuron/Parchment theme to the **Cosmic Kabbalah** design system,
defined in `docs/design.md` (YAML tokens + usage guide) and implemented in
`docs/style.css` + the font link in `docs/index.html`.

## Basis

- Ethan supplied the design system: dark void palette (`#0B0E17` primary,
  `#E0C068` gold, `#5EEAD4` cyan, `#F43F5E` magenta), glass surfaces, Cinzel /
  Cinzel Decorative / Plus Jakarta Sans / Space Grotesk typography, and the
  component specs (glass card, Sefirot node, celestial CTA).
- The page structure (sections, dictionary card, lists, code block) was kept
  intact; only the skin changed — the design system maps onto the existing
  classes (avatar → Sefirot sphere, cards → glass panels, primary button →
  celestial CTA, soul section → cosmic band).
- `docs/design.md` is served alongside the page by the Pages workflow (it
  uploads the whole `docs/` directory).

## What it taught

- **A design system document belongs next to the page it governs.** `design.md`
  lives in `docs/` with the HTML/CSS it describes, and the README structure
  block points to it. If the org later adopts Cosmic Kabbalah org-wide
  (warrant#31, workspace#2), the tokens are portable — the YAML frontmatter is
  the machine-readable contract.
- **The old field note's claim is superseded.** The 2026-09-21-landing-page
  note said the emet landing page uses the Neuron/Parchment design system; that
  is no longer true for this page. Neuron/Parchment remains the warrant
  DESIGN.md system (warrant#31 parked); Cosmic Kabbalah is now the emet page's
  system. Corrected in that note.
- **Restyle discipline:** keep the markup stable and rewrite the skin — the
  content (what Emet is, the veracity habit, the soul) is the durable part; the
  theme is a token swap.