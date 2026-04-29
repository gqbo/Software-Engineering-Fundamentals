# How to Start This Project with Claude Code

## Step 0 — Read and understand the spec

Before touching Claude Code, read these files in order:

1. `DESIGN.md` — The design system (colors, typography, spacing, components)
2. `SPEC.md` — The full project specification (pages, layout, schema, criteria)
3. `CLAUDE.md` — The rules Claude Code must follow

Also open the Stitch HTML prototypes in your browser as visual reference.

**If something doesn't convince you, change it BEFORE coding.**

## Step 1 — Create the repo

```bash
mkdir engineering-fundamentals
cd engineering-fundamentals
git init
```

Copy all starter files (SPEC.md, CLAUDE.md, DESIGN.md, QUICKSTART.md, sample-content/) to the root.

## Step 2 — Initialize with Claude Code

Open Claude Code in the project directory:

```bash
claude
```

First prompt:

```
Read CLAUDE.md, SPEC.md, and DESIGN.md. Initialize an Astro 5 project with pnpm,
configure Tailwind CSS 4, add Google Fonts (JetBrains Mono + Inter) and Material
Symbols Outlined. Create the file structure from the spec. Set up Content Collections
schemas in src/content/config.ts. Don't create page content yet — just the structure,
BaseLayout with TopBar and Sidebar, and the schemas.
```

## Step 3 — Verify the foundation

After Claude Code finishes, verify:

- `pnpm dev` runs without errors
- File structure matches the spec
- `src/content/config.ts` has correct Zod schemas for categories and modules
- `BaseLayout.astro` includes TopBar + Sidebar
- Background is #0d0d0d, fonts load correctly
- All corners are sharp (0px border-radius)

**IMPORTANT:** Review every generated file. Open each one, understand what it does. If something is unclear, ask Claude Code to explain BEFORE continuing.

## Step 4 — Build page by page (sprints)

Work in small sprints. Don't build everything at once.

### Sprint 1: Home page
```
Create the Home page (index.astro) with CategoryCard.astro.
Create all 7 category .md files in src/content/categories/.
Home should show the category cards with module count, matching the Stitch prototype layout.
```

### Sprint 2: Category page
```
Create the dynamic category page (category/[slug].astro).
Create ModuleCard.astro and DifficultyBars.astro.
Each category should list its modules matching the Stitch prototype.
```

### Sprint 3: Module page
```
Create the dynamic module page (module/[slug].astro).
Create TopicList.astro, ResourceLink.astro, CalloutBox.astro, Breadcrumb.astro.
Must show all sections from the spec: why, topics, explanation, exercise, solution, resources.
```

### Sprint 4: Content
```
Create all 8 initial module .md files with complete frontmatter.
Write "Mi explicación" content for at least 2 modules.
THIS CONTENT IS WRITTEN BY YOU, NOT THE AI.
```

### Sprint 5: Polish & Deploy
```
Configure Vercel deployment.
Add Open Graph meta tags in BaseLayout.astro.
Verify with LinkedIn post inspector.
Test responsive (sidebar hidden on mobile).
Run Lighthouse audit — target > 90 performance.
```

## Step 5 — The infinite content loop

From here on, the workflow is:

1. Study a topic (video, article, practice)
2. Write your explanation in a new `.md` file
3. Do the exercise without AI
4. Push the solution to a separate repo
5. Commit + push → Vercel auto-deploys

## Golden Rule

**If you can't explain why something is there, it shouldn't be there.**

Every line of code, every architectural decision, every component — you must be able to explain why it exists. If Claude Code generates something you don't understand, stop and ask before continuing.
