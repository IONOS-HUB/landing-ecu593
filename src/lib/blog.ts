import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. Drafts only show in dev. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', (post) => import.meta.env.DEV || !post.data.draft);
  return posts.sort(
    (a, b) =>
      b.data.publishedAt.getTime() - a.data.publishedAt.getTime() || Number(b.data.featured) - Number(a.data.featured),
  );
}

export const postPath = (post: Post) => `/blog/${post.id}/`;

/** Reading time at ~200 words per minute (Spanish prose). */
export const readingMinutes = (post: Post) => Math.max(1, Math.round((post.body ?? '').split(/\s+/).length / 200));

export const lastModified = (post: Post) => post.data.updatedAt ?? post.data.publishedAt;

/** "12 de octubre de 2026" in the page language. */
export const formatDate = (date: Date, locale = 'es-EC') =>
  date.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
