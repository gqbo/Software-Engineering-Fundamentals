---
name: Terminal Editorial
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#e5b5ff'
  on-secondary: '#481965'
  secondary-container: '#633480'
  on-secondary-container: '#d9a4f8'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#f4d9ff'
  secondary-fixed-dim: '#e5b5ff'
  on-secondary-fixed: '#30004b'
  on-secondary-fixed-variant: '#60327d'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  h1:
    fontFamily: monospace
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: monospace
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: '1.3'
  h3:
    fontFamily: monospace
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.4'
  body-reading:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  ui-label:
    fontFamily: monospace
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1'
  code-inline:
    fontFamily: monospace
    fontSize: 0.95em
    fontWeight: '400'
spacing:
  max-width: 720px
  container-padding: 2rem
  stack-gap: 1.5rem
  section-margin: 4rem
  gutter: 1rem
---

## Brand & Style

This design system establishes a high-utility, academic environment that bridges the gap between a developer’s terminal and a prestigious technical journal. The aesthetic is rooted in **Neo-Brutalism** and **Minimalism**, stripping away decorative flourishes like gradients and shadows in favor of structural integrity and typographic clarity.

The interface prioritizes focus, treating educational content with the reverence of documentation and the readability of an editorial spread. It evokes a sense of "digital craftsmanship"—clean, intentional, and intellectually rigorous.

## Colors

The color palette is architected for a low-eye-strain, dark-mode-first experience. The foundation is a "Near-Black" neutral scale that provides enough contrast for deep hierarchy without the harshness of pure black.

Accents are utilized strictly for semantic categorization and wayfinding. Each technical domain is assigned a specific pastel-adjacent hue to allow for instant visual recognition across modules, badges, and callouts. Gradients are prohibited; color should be applied in flat, solid blocks or borders to maintain the technical "terminal" feel.

## Typography

This system employs a functional dual-typeface strategy. 

1.  **The Interface (Monospace):** All structural elements, including headlines, navigation, and badges, use a monospaced font to evoke the developer’s environment. This provides a rhythmic, grid-aligned feel to the UI.
2.  **The Content (Sans-Serif):** Reading sections utilize **Inter**. To lean into the editorial personality, the line-height is intentionally generous (1.8), and the font size is slightly oversized to ensure long-form technical content is digestible and reduces cognitive load.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy, centered on a 720px content column. This width is optimized for reading comfort, mimicking the measure of a physical book or a well-documented README.

Whitespace is treated as a structural component. Use large vertical margins between major sections to prevent visual clutter. Components should stack vertically in a single column in most views, reinforcing a linear, logical progression through educational modules.

## Elevation & Depth

This design system rejects shadows and Z-index-based depth in favor of **Tonal Layers** and **Bold Borders**. 

Depth is communicated through color value shifts: the background is `#0d0d0d`, while interactive or floating containers (like cards) use `#111111`. Separation between elements is achieved strictly through `1px` solid borders (`#222222`). This creates a "flat-depth" look common in high-end terminal emulators and code editors.

## Shapes

The shape language is strictly **Sharp (0px)**. 

To maintain the professional, "engineered" aesthetic, no border-radii are permitted. Every card, button, and badge must have crisp 90-degree corners. This reinforces the grid and provides a sense of architectural precision.

## Components

### Cards & Callouts
- **Category Cards:** Feature a `4px` solid left border using the category’s accent color. Background is Surface (`#111111`).
- **Callout/Tip Boxes:** Similar to cards but with a more subtle background or a ghost-border style. They must include the accent left border to signify importance.
- **Module Cards:** Designed as a stacked list. Use a shared border-bottom to separate items, creating a seamless vertical feed.

### Navigation & Identity
- **Breadcrumbs:** Rendered in monospace, all caps, or lowercase with `>` separators. Minimalist and functional.
- **Difficulty Indicators:** A set of 3-5 vertical bars. Filled bars use the category accent color; unfilled bars use the Border color (`#222222`).

### Interactive Elements
- **Badges:** Small, rectangular boxes with monospace text. Can be "Outline" (Border color) or "Solid" (Accent color with black text).
- **Resource Links:** High-contrast text with leading icons (▶, 📄, ⚡). No underlines; use hover state background shifts instead.
- **Exercise Boxes:** High-contrast containers with a thicker `2px` white or accent border to differentiate "active" work from "passive" reading.

### Data & Status
- **Progress Bars:** Flat, 100% width bars at the top or bottom of containers, using the category accent color. No rounded corners.