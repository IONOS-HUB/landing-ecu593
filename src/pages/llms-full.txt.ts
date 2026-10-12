/** llms-full.txt: the whole site as plain Markdown (landing facts in both languages + every blog post). */
import type { APIRoute } from 'astro';
import { getPosts, lastModified, postPath } from '../lib/blog';
import { landingFacts } from '../lib/llms';

export const GET: APIRoute = async ({ site: base }) => {
  const url = (path: string) => (base ? new URL(path, base).href : path);
  const posts = await getPosts();

  const blog = posts.map((post) =>
    [
      `## ${post.data.title}`,
      '',
      `URL: ${url(postPath(post))}`,
      `Actualizado: ${lastModified(post).toISOString().slice(0, 10)}`,
      '',
      `Respuesta rápida: ${post.data.answer}`,
      '',
      post.body ?? '',
      '',
      ...(post.data.faq.length > 0 ? ['### Preguntas frecuentes', ...post.data.faq.flatMap((faq) => [`- ${faq.question}`, `  ${faq.answer}`]), ''] : []),
      ...(post.data.sources.length > 0 ? ['### Fuentes', ...post.data.sources.map((source) => `- ${source.title}: ${source.url}`), ''] : []),
    ].join('\n'),
  );

  const body = [landingFacts(url), '# Blog', '', ...blog].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
