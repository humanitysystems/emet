---
name: Cosmic Kabbalah
colors:
  primary: "#0B0E17"
  secondary: "#1A102F"
  tertiary: "#3D1E6D"
  accent-gold: "#E0C068"
  accent-cyan: "#5EEAD4"
  accent-magenta: "#F43F5E"
  neutral-light: "#F3F4F6"
  neutral-dark: "#111827"
  surface-glass: "rgba(15, 23, 42, 0.75)"
typography:
  display:
    fontFamily: "Cinzel, serif"
    fontSize: "3.5rem"
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: "0.05em"
  h1:
    fontFamily: "Cinzel Decorative, serif"
    fontSize: "2.25rem"
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: "0.025em"
  h2:
    fontFamily: "Cinzel, serif"
    fontSize: "1.5rem"
    fontWeight: "600"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Space Grotesk, monospace"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.15em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  card-glass:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.neutral-light}"
    rounded: "{rounded.lg}"
    padding: "24px"
  button-primary:
    backgroundColor: "{colors.accent-gold}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#F5D078"
---

# Cosmic Kabbalah Design System

## Overview
The **Cosmic Kabbalah** visual identity merges esoteric mysticism, sacred geometry, and deep-space cosmology. Designed for reflective, high-immersion digital experiences, it balances the dark infinity of the divine contraction (*Tzimtzum*) with radiant flashes of light, golden pathways, and celestial nebulae. The UI feels like an ancient astronomical manuscript reimagined as an interactive spatial interface.

## Colors
The palette is rooted in deep void tones contrasted against luminous cosmic accents and warm golden geometry.

- **Primary Void (`#0B0E17`):** Deep obsidian night sky representing *Ein Sof* (the Infinite Void).
- **Cosmic Violet (`#1A102F`):** Deep nebular background tone for subtle depth layering.
- **Divine Ray / Gold (`#E0C068`):** Sacred geometry lines, active nodes, and key focal points representing *Kav* (the divine ray).
- **Spiritual Cyan (`#5EEAD4`):** Radiant ethereal light for divine sparks, vessel shatterings, and interactions.
- **Radiant Magenta (`#F43F5E`):** Accents for high energy, intensity, and active emanations.
- **Glass Surface (`rgba(15, 23, 42, 0.75)`):** Translucent backdrop blur layer for overlaid cards and content panels.

## Typography
Typography reflects the harmony between ancient manuscript headers and modern geometric clarity.

- **Display & Headlines:** *Cinzel* & *Cinzel Decorative* bring classical elegance, reminiscent of historical mystical engravings and sacred diagrams.
- **Body Text:** *Plus Jakarta Sans* ensures high legibility against dark, complex cosmic backgrounds.
- **Data & Microcopy:** *Space Grotesk* delivers crisp, precise geometric alignment for coordinates, Sefirot node tags, and system labels.

## Layout
- **Atmospheric Centering:** Major concepts (like the Tree of Life or Tzimtzum vortex) anchor the center of the canvas.
- **Layered Spatial Grid:** UI elements float over deep cosmic backgrounds using frosted glass containers with thin golden borders.
- **Asymmetric Diagrams:** Content panels flank geometric diagrams with connecting line vectors (simulating parchment annotations).

## Elevation & Depth
- **Level 1 (Background):** Deep nebula gradients and swirling starfields (`#0B0E17`).
- **Level 2 (Glass Cards):** Backdrop-filter blurred panels with 1px border (`rgba(224, 192, 104, 0.2)`).
- **Level 3 (Interactive Nodes):** Glowing Sefirot spheres with inner radial gradients and soft outer drop-shadows (`0 0 20px rgba(94, 234, 212, 0.4)`).

## Shapes
- **Sacred Geometry:** Perfect circles, intersecting geometric pathways, and 10-node tree structures.
- **Fragmented Glass:** Sharp, triangular geometric shards for highlighting concepts like *Shevirat HaKelim* (shattering of vessels).

## Components

### Glass Card Panel
- **Background:** `{colors.surface-glass}` with `backdrop-filter: blur(12px)`
- **Border:** `1px solid rgba(224, 192, 104, 0.2)`
- **Border Radius:** `{rounded.lg}`
- **Padding:** `{spacing.lg}`

### Sefirot Interactive Node
- **Shape:** `{rounded.full}` (Circle)
- **Border:** `2px solid {colors.accent-gold}`
- **Background:** `radial-gradient(circle, {colors.tertiary} 0%, {colors.primary} 100%)`
- **Text Color:** `{colors.accent-gold}`
- **Typography:** `{typography.label-caps}`

### Celestial CTA Button
- **Background:** `{colors.accent-gold}`
- **Text Color:** `{colors.primary}`
- **Border Radius:** `{rounded.md}`
- **Typography:** `{typography.label-caps}`
- **Hover State:** Background lightens to `#F5D078` with a soft gold outer glow (`0 0 15px rgba(224, 192, 104, 0.5)`).

## Do's and Don'ts

### Do
- Use dark void backgrounds to make golden geometric lines and cyan sparks pop.
- Maintain crisp typography contrast using bright gold or white text over glass layers.
- Incorporate subtle radial glows around focal celestial nodes.

### Don't
- Don't use flat light backgrounds (e.g., pure white or light grey) as primary layouts.
- Don't clutter geometry lines with heavy drop shadows; keep lines precise and vector-sharp.
- Don't overuse bright neon colors outside the defined gold, cyan, and magenta accent palette.