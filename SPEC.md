# Engineering Fundamentals — Project Spec

## 1. What is this project

A static, public website where I document my learning journey through software engineering fundamentals. Each module covers a core topic (SQL, REST APIs, Architecture, etc.) with my personal explanation, practical exercises, and links to solution repos.

**Primary audience:** myself (study reference and interview prep).
**Secondary audience:** other junior devs, recruiters viewing my portfolio, LinkedIn.

**Production URL:** `engineering-fundamentals.vercel.app` (or custom domain later).

**Language:** UI labels and structural text in English. Content text (explanations, descriptions, exercises) in Spanish.

---

## 2. Tech Stack

| Layer | Technology | Justification |
|-------|-----------|---------------|
| Framework | **Astro 5** | Content-driven site, static output, zero JS by default |
| Content | **Astro Content Collections** with `.md` files | Adding a module = adding a file. No DB, no CMS |
| Styles | **Tailwind CSS 4** | Utility-first, fast prototyping |
| Icons | **Google Material Symbols Outlined** | Consistent with Stitch prototype, variable font |
| Fonts | **JetBrains Mono** (UI/headings) + **Inter** (body/reading) via Google Fonts |
| Deploy | **Vercel** | Free tier, automatic preview deploys, native Astro integration |
| Package manager | **pnpm** | Consistent with our other projects |

**We do NOT use:**
- React/Vue/Svelte — no client-side interactivity needed
- Database — everything is .md files
- Auth — no users, public and static
- Border radius — all corners are sharp (0px), per design system
- Gradients or shadows — depth via tonal layers and borders only

---

## 3. Design System

The full design system is defined in `DESIGN.md` at the project root (generated from the Stitch prototype). It is the **single source of truth** for all visual decisions.

### Key tokens (summary)

**Surfaces:**
```
Body background:        #0d0d0d
Surface (cards):        #111111
Surface hover:          #161616
Surface container:      #201f1f
Surface container high: #2a2a2a
Border:                 #222222
Border subtle:          #444748
```

**Typography:**
```
Headings/UI/Nav:  JetBrains Mono (monospace)
  h1: 2.5rem / 700 / -0.02em letter-spacing / 1.2 line-height
  h2: 1.75rem / 600 / 1.3 line-height
  h3: 1.25rem / 600 / 1.4 line-height
  ui-label: 0.875rem / 500

Body/Reading:     Inter (sans-serif)
  body-reading: 1.125rem / 400 / 1.8 line-height / 0.01em letter-spacing
```

**Category accent colors:**
```
Fundamentos  → #e0aaff (lavender)
Datos        → #a3f7bf (mint)
Backend      → #ffa3a3 (coral)
Arquitectura → #a3d5ff (sky)
Calidad      → #ffe0a3 (amber)
Diseño       → #d4a3ff (violet)
Sistema      → #a3ffd4 (teal)
```

**Shape:** 0px border-radius everywhere. Sharp corners only.

**Elevation:** No shadows. Depth via color shifts (#0d0d0d → #111111 → #161616) and 1px solid borders (#222222).

**Interactions:** CSS transitions only (background-color 0.2s, color 0.15s). No animations, no motion libraries.

---

## 4. Global Layout

Every page shares this shell:

```
┌──────────────────────────────────────────────────────┐
│ TopBar (fixed top, h-14, bg #0d0d0d, z-50)          │
│ [terminal icon] gabriel / engineering-fundamentals    │
│                                           [search]   │
├──────────────┬───────────────────────────────────────┤
│ Sidebar      │  Main Content                         │
│ (w-64,fixed) │  (max-w-[720px], centered)            │
│              │                                       │
│ CATEGORIES   │  [Breadcrumbs]                        │
│              │  [Page content]                       │
│ ▸ Fundam.    │                                       │
│ ▸ Datos      │                                       │
│ ▸ Backend    │                                       │
│ ▸ Arquit.    │                                       │
│ ▸ Calidad    │                                       │
│ ▸ Diseño     │                                       │
│ ▸ Sistema    │                                       │
│              │  [Footer]                             │
│ (hidden on   │                                       │
│  mobile)     │                                       │
└──────────────┴───────────────────────────────────────┘
```

### Sidebar
- Fixed left, w-64, full height, visible on `md+`, hidden on mobile
- Background: #0d0d0d, right border: 1px solid #222222
- Header: "CATEGORIES" in monospace, uppercase, bold, tracking-widest
- Each category: nav link with Material Symbols icon + category name
- Active state: text-neutral-200 + bg-[#111111]
- Inactive: text-neutral-500
- Hover: text-neutral-200 + bg-[#111111] with 150ms transition
- Font: monospace, 0.75rem (text-xs), uppercase or lowercase (match Stitch)

### TopBar
- Fixed top, z-50, h-14
- Constrained to match main content alignment
- Left: terminal icon + "gabriel / engineering-fundamentals" (monospace, uppercase, text-sm, bold)
- Right: search icon (non-functional for MVP, visual only)
- Border bottom: 1px solid #222222
- Background: #0d0d0d

### Main Content Area
- max-w-[720px], centered
- On md+: offset to account for sidebar width
- Padding: pt-24 (clear TopBar), pb-20, px-6
- All content flows vertically in a single column

### Footer
- max-w-[720px], border-top #222222
- Left: project tagline
- Right: links grid (monospace, tiny, uppercase, muted)
- Low opacity (0.4-0.6)
- Branding text: "GABRIEL_ENGINEERING" with version hint (monospace, 10px)

---

## 5. Page Specifications

### Home (`/`)

```
[Breadcrumb: Index / Home]

[Hero Section - mb-16]
  h1: "Fundamentos de Ingeniería de Software" (font-h1)
  Subtitle: "8 módulos · Básico → Avanzado · Backend-focused" (font-h3, text-neutral-500)

[Callout Box - mb-16]
  4px left border in #e0aaff (lavender)
  Bolt icon (Material Symbols, filled) in #e0aaff
  Text: "Flujo por módulo: ver recurso → escribir tu explicación → código sin IA → revisar con IA"
  Font: ui-label, with arrows in text-neutral-500

[Category Cards - stacked vertically, gap-4]
  Each card:
  ┌─────────────────────────────────────────────┐
  │▌ Fundamentos                    2 modules   │
  │▌ Principios básicos y arq...        →       │
  └─────────────────────────────────────────────┘
  - Background: #111111, border: 1px solid #222222
  - 4px left border in category accent color
  - Left: category name (h3) + description (text-sm, muted)
  - Right: module count badge (monospace, xs, bordered) + arrow icon
  - Categories with 0 modules: lock icon, opacity-80, no arrow
  - Hover: background shifts to #161616

[Footer]
```

### Category Page (`/category/[slug]`)

```
[Breadcrumb: Home > Backend]

[Header Section - mb-16]
  h1: category name (font-h1, text-primary)
  Badge: "Categoría" in accent color (font-ui-label, tiny, uppercase)
  Description paragraph (font-body-reading, text-on-surface-variant)

[Module Cards - stacked, separated by border-bottom, inside border-t container]
  Each card:
  ┌─────────────────────────────────────────────────┐
  │▌ MODULE 01  ██░░░                               │
  │▌ Node.js Fundamentals                      ›    │
  │▌ The engine behind modern JS backend             │
  └─────────────────────────────────────────────────┘
  - 4px left border in category accent color
  - "MODULE XX" label in accent color (ui-label, xs)
  - Difficulty bars: 5 vertical bars (w-1 h-3), filled = accent color, unfilled = #222222
    basico = 2/5, intermedio = 3/5, avanzado = 5/5
  - Title (h3, monospace, white)
  - Description (body-reading, text-sm, muted)
  - Chevron right icon on hover
  - Hover: background #161616

[Resources Callout - mt-20]
  Bordered box with info icon in accent color
  "RESOURCES & DOCUMENTATION" header
  2-column grid of resource type links:
    ▶ Video Lectures | 📄 PDF Documentation
    ⚡ Practical Labs | 🔗 External References
```

### Module Page (`/module/[slug]`)

```
[Breadcrumb: Home > Fundamentos > Cómo funciona la Web]

[Header - mb-8]
  h1: module title
  Badges: [category name in accent] [difficulty level]

[Section: ¿Por qué esto? - mb-16]
  CalloutBox with accent left border (4px)
  "why" text from frontmatter

[Section: Temas a cubrir - mb-16]
  "TEMAS A CUBRIR" header (monospace, xs, uppercase, tracking-widest, text-neutral-500)
  Numbered list:
    01  ¿Qué pasa cuando escribís una URL en el browser?
    02  DNS, TCP, HTTP/HTTPS
    ...
  Numbers: monospace, text-neutral-500, tabular-nums
  Text: body-reading or regular size, text-on-surface

[Section: Mi explicación - mb-16]
  "MI EXPLICACIÓN" header
  Long-form content rendered from .md body
  Inter font, 1.125rem, line-height 1.8
  Standard markdown rendering (h2, h3, p, code blocks, lists)
  This is the core content section

[Section: Ejercicio práctico - mb-16]
  "EJERCICIO PRÁCTICO" header
  Box with 2px accent border (thicker than regular 1px)
  Exercise description text

[Section: Solución - mb-16]
  "SOLUCIÓN" header
  If solution_repo exists: GitHub link
  If empty: "Pendiente" in muted text

[Section: Recursos - mb-16]
  "RECURSOS" header
  List of links, each with type icon:
    ▶ video  📄 article  ⚡ practice  📖 book
  Hover: background shift, no underlines
  Each link: bordered row, icon + name, full width
```

---

## 6. Content Collections Schema

### Categories (`src/content/categories/`)

```yaml
---
name: "Fundamentos"
slug: "fundamentos"
description: "Las bases sobre las que se construye todo lo demás."
icon: "public"             # Google Material Symbols icon name
order: 1                   # display order on home and sidebar
color: "#e0aaff"           # accent color
---
```

### Modules (`src/content/modules/`)

```yaml
---
title: "Cómo funciona la Web"
slug: "how-the-web-works"
category: "fundamentos"      # references category slug
difficulty: "basico"         # basico | intermedio | avanzado
description: "HTTP, request/response, DNS, status codes, headers."
why: "Si no entendés qué pasa cuando un cliente hace un request, todo lo demás es construir sobre arena."
order: 1                     # order within category
topics:
  - "¿Qué pasa cuando escribís una URL en el browser?"
  - "DNS, TCP, HTTP/HTTPS"
exercise: "Crear un servidor HTTP desde cero en Node.js (sin Express)..."
solution_repo: ""            # GitHub URL or empty
resources:
  - type: "video"
    name: "How the Internet Works - CS50"
    url: "https://www.youtube.com/watch?v=kBXQZMmiA4s"
---

## Mi explicación

(Written by ME after studying. My understanding, my words.)
```

---

## 7. File Structure

```
engineering-fundamentals/
├── CLAUDE.md
├── DESIGN.md
├── SPEC.md
├── QUICKSTART.md
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── config.ts                  # Content Collections schema (zod)
│   │   ├── categories/
│   │   │   ├── fundamentos.md
│   │   │   ├── datos.md
│   │   │   ├── backend.md
│   │   │   ├── arquitectura.md
│   │   │   ├── calidad.md
│   │   │   ├── diseno.md
│   │   │   └── sistema.md
│   │   └── modules/
│   │       ├── how-the-web-works.md
│   │       ├── sql-desde-cero.md
│   │       ├── rest-api-design.md
│   │       ├── arquitectura-mvc-capas.md
│   │       ├── clean-architecture.md
│   │       ├── testing-tdd.md
│   │       ├── deep-modules-interfaces.md
│   │       └── system-design-basico.md
│   ├── layouts/
│   │   └── BaseLayout.astro           # HTML head, sidebar, topbar, footer
│   ├── components/
│   │   ├── Sidebar.astro              # Fixed left nav with categories
│   │   ├── TopBar.astro               # Fixed top bar with branding
│   │   ├── ModuleCard.astro           # Module card for category page
│   │   ├── CategoryCard.astro         # Category card for home
│   │   ├── DifficultyBars.astro       # 5 vertical bars indicator
│   │   ├── ResourceLink.astro         # Link with type icon
│   │   ├── TopicList.astro            # Numbered topic list
│   │   ├── Breadcrumb.astro           # Breadcrumb navigation
│   │   └── CalloutBox.astro           # Reusable accent-bordered callout
│   ├── pages/
│   │   ├── index.astro                # Home
│   │   ├── about.astro                # About (optional)
│   │   ├── category/
│   │   │   └── [slug].astro           # Dynamic category page
│   │   └── module/
│   │       └── [slug].astro           # Dynamic module page
│   └── styles/
│       └── global.css                 # Tailwind imports + design tokens
└── .gitignore
```

---

## 8. Content Workflow

### Adding a module to an existing category:
1. Create `src/content/modules/my-module.md` with frontmatter
2. Write "Mi explicación" in Markdown
3. Commit + push → Vercel auto-deploys

### Adding a new category:
1. Create `src/content/categories/my-category.md`
2. Create modules for it
3. Commit + push → Vercel auto-deploys

**No code changes needed.** Just `.md` files.

---

## 9. SEO & Meta Tags

- `<title>`: "Cómo funciona la Web — Engineering Fundamentals"
- `<meta description>`: from module `description` field
- Open Graph: og:title, og:description, og:type, og:url
- `<meta name="author" content="Gabriel">`
- `<html lang="es">`

---

## 10. What this project is NOT (for now)

- No auth or user accounts
- No persistent progress tracking
- No comments
- No search (visual placeholder only)
- Not a blog — structured study reference

---

## 11. MVP Acceptance Criteria

- [ ] Global layout: TopBar + Sidebar + Main content working
- [ ] Sidebar shows all categories with icons, highlights active
- [ ] Sidebar hidden on mobile, content takes full width
- [ ] Home shows category cards with module count
- [ ] Each category page lists its modules
- [ ] Each module page shows all sections
- [ ] At least 2 modules have real content in "Mi explicación"
- [ ] Deploys on Vercel without errors
- [ ] Open Graph tags work (LinkedIn post inspector)
- [ ] Adding a .md file generates page automatically
- [ ] Responsive: mobile and desktop
- [ ] 0px border-radius everywhere
- [ ] JetBrains Mono for UI, Inter for reading
- [ ] Lighthouse performance > 90
