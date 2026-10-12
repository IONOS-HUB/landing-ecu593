/** RSS 2.0 feed of the blog: lets aggregators, AI crawlers and newsletters pick up new posts. */
import type { APIRoute } from 'astro';
import { site } from '../../config/site';
import { useDictionary } from '../../i18n';
import { getPosts, postPath } from '../../lib/blog';

const escape = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site: base }) => {
  const t = useDictionary('es');
  const url = (path: string) => (base ? new URL(path, base).href : path);
  const posts = await getPosts();

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escape(post.data.title)}</title>
      <link>${url(postPath(post))}</link>
      <guid isPermaLink="true">${url(postPath(post))}</guid>
      <description>${escape(post.data.answer)}</description>
      <category>${escape(post.data.keyword)}</category>
      <pubDate>${post.data.publishedAt.toUTCString()}</pubDate>
    </item>`,
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(t.blog.name)}</title>
    <link>${url('/blog/')}</link>
    <atom:link href="${url('/blog/rss.xml')}" rel="self" type="application/rss+xml" />
    <description>${escape(t.blog.indexDescription)}</description>
    <language>es-EC</language>
    <copyright>${escape(site.legalName)}</copyright>
${items}
  </channel>
</rss>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
