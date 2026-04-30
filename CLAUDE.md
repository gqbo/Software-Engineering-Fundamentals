# CLAUDE.md — Engineering Fundamentals

## Project

Static site with Astro 5 + Tailwind CSS 4 documenting my software engineering fundamentals learning journey. Content is managed via Astro Content Collections (.md files). Design follows a "Terminal Editorial" aesthetic defined in DESIGN.md.

## Stack

- **Framework:** Astro 5 (static output)
- **Styles:** Tailwind CSS 4
- **Fonts:** JetBrains Mono (headings/UI) + Inter (body/reading) via Google Fonts
- **Icons:** Google Material Symbols Outlined (variable font)
- **Content:** Astro Content Collections (.md files with Zod schemas)
- **Deploy:** Vercel
- **Package manager:** pnpm

## Commands

```bash
pnpm dev          # Dev server on localhost:4321
pnpm build        # Static build
pnpm preview      # Preview build
```

## Architecture

Content lives in `src/content/` with two collections:

- `categories/` — Each .md defines a category (name, slug, description, icon, order, color)
- `modules/` — Each .md defines a study module (title, slug, category, difficulty, topics, exercise, resources + markdown body with "Mi explicación")

**Adding content = adding a .md file.** No code changes needed.

Schemas are defined with Zod in `src/content/config.ts`.

## Routes

- `/` — Home with category cards grid
- `/category/[slug]` — Module list for a category
- `/module/[slug]` — Full module page

## Global Layout

Every page has:
1. **TopBar** — fixed top, h-14, terminal icon + "gabriel / engineering-fundamentals"
2. **Sidebar** — fixed left, w-64, lists all categories with Material Symbols icons. Hidden on mobile.
3. **Main content** — max-w-[720px], centered, offset for sidebar on md+
4. **Footer** — subtle, monospace, muted

## Design Rules — READ DESIGN.md FOR FULL SPEC

- **Background:** #0d0d0d (body), #111111 (cards), #161616 (hover)
- **Borders:** 1px solid #222222. Category accents use 4px left borders.
- **Border radius:** 0px EVERYWHERE. No rounded corners. Sharp edges only.
- **Shadows:** NONE. Depth is communicated through background color shifts.
- **Typography:** JetBrains Mono for all headings, nav, badges, labels. Inter for body text and reading sections.
- **Colors:** each category has an accent color defined in its frontmatter. Used for left borders, badges, difficulty bars — never as full backgrounds.
- **Transitions:** CSS only. background-color 0.2s, color 0.15s. No animation libraries.

### Category Colors
```
Fundamentos:  #e0aaff
Datos:        #a3f7bf
Backend:      #ffa3a3
Arquitectura: #a3d5ff
Calidad:      #ffe0a3
Diseño:       #d4a3ff
Sistema:      #a3ffd4
```

## Code Rules

- Components in `src/components/` as `.astro` files
- One layout in `src/layouts/BaseLayout.astro`
- Dynamic pages use `getStaticPaths()` in `[slug].astro` files
- No React, no Vue, no Svelte — Astro components only
- TypeScript in `.astro` and `.ts` files
- All content queries use `getCollection()` and `getEntry()` from Astro
- UI labels and code in English, content text in Spanish

## Tailwind 4 Styling Rules — MANDATORY

**How it works:** `src/styles/global.css` defines tokens with `@theme { --color-X: ...; --text-X: ...; }`. Tailwind 4 **automatically generates utility classes** from these tokens (`text-h1`, `bg-surface`, `w-sidebar`, `ml-sidebar`, `z-topbar`, etc.). Never hardcode hex/px/rem in components.

### 5 Rules (non-negotiable)

1. **NEVER hardcode `#hex`, `rem`, or `px` in components** — Always use tokens
   ```astro
   ❌ <div class="bg-[#0d0d0d] w-[256px] text-[2.5rem]">
   ✅ <div class="bg-bg w-sidebar text-h1">
   ```

2. **NEVER use Tailwind defaults** (`text-neutral-100/200/400/500`) — Use semantic tokens
   ```astro
   ❌ <p class="text-neutral-400">Muted text</p>
   ✅ <p class="text-muted">Muted text</p>
   ```
   Tokens: `text-on-surface`, `text-muted`, `text-muted-strong`, `text-muted-faint`

3. **If a pattern repeats 2+ times, make it a primitive component**
   - `Container.astro` — centered max-width wrapper (width=content|prose)
   - `Card.astro` — bordered section (variant=default|sunken)
   - `Breadcrumb.astro` — navigation trail
   ```astro
   ❌ <div class="p-8 border border-border bg-surface">
        <p>Content</p>
      </div>
   ✅ <Card>
        <p>Content</p>
      </Card>
   ```

4. **z-index always semantic** — Never use numeric values
   ```astro
   ❌ <div class="z-50">
   ✅ <div class="z-topbar">
   ```
   Available: `z-base`, `z-sticky`, `z-sidebar`, `z-topbar`, `z-modal`, `z-toast`

5. **Typography always via semantic tokens** — Line-height and weight travel with the token
   ```astro
   ❌ <h1 class="text-[2.5rem] leading-[1.2] tracking-[-0.02em] font-bold">
   ✅ <h1 class="text-h1">
   ```
   Available: `text-h1`, `text-h2`, `text-h3`, `text-ui-label`, `text-ui-micro`, `text-body`

## Reference Files

- `SPEC.md` — Full project specification (pages, sections, schema, acceptance criteria)
- `DESIGN.md` — Design system tokens (colors, typography, spacing, components)
- Read BOTH before implementing anything.

## What NOT to do

- No client-side JS dependencies
- No APIs or endpoints — static site only
- No border-radius on anything (0px everywhere)
- No shadows, no gradients, no decorative illustrations
- No Inter, Roboto, or generic fonts for headings — JetBrains Mono only
- No React/Vue/Svelte components
- No hardcoded colors — use design tokens from DESIGN.md and category frontmatter
- Do not write the "Mi explicación" content — that section is written by the user personally
