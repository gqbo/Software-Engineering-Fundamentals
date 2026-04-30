import type { CollectionEntry } from 'astro:content';

/**
 * Content collection helpers.
 *
 * Convention: filesystem is the source of truth for organization.
 *   - Categories live at  src/content/categories/<slug>.md
 *   - Modules live at     src/content/modules/<category-slug>/<module-slug>.md
 *
 * The Astro glob loader exposes the relative path (without extension) as
 * `entry.id`, so every slug/category lookup derives from there.
 */

/** Slug of the category this module belongs to (folder name). */
export function moduleCategory(entry: CollectionEntry<'modules'>): string {
  return entry.id.split('/')[0];
}

/** Public URL slug for the module (filename, last path segment). */
export function moduleSlug(entry: CollectionEntry<'modules'>): string {
  const parts = entry.id.split('/');
  return parts[parts.length - 1];
}
