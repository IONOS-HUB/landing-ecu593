/**
 * robots.txt: open to every search engine and, explicitly, to the AI crawlers that power answer
 * engines (ChatGPT, Claude, Perplexity, Gemini, Copilot, Apple Intelligence). Being crawlable by them
 * is what lets the school be cited in AI answers (GEO/AEO). Remove a bot here to opt out of it.
 */
import type { APIRoute } from 'astro';

const AI_CRAWLERS = [
  'GPTBot', // OpenAI training
  'OAI-SearchBot', // ChatGPT search
  'ChatGPT-User', // ChatGPT browsing on a user's request
  'ClaudeBot', // Anthropic training
  'Claude-SearchBot', // Claude search
  'Claude-User', // Claude browsing on a user's request
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended', // Gemini / AI Overviews grounding
  'Applebot-Extended',
  'Amazonbot',
  'meta-externalagent',
  'CCBot', // Common Crawl, used by many open models
];

export const GET: APIRoute = ({ site }) => {
  const lines = [
    '# Ecu593 English: academia de inglés online en Ecuador.',
    '# Resumen para asistentes de IA: /llms.txt · contenido completo: /llms-full.txt',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    ...AI_CRAWLERS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
  ];
  if (site) lines.push(`Sitemap: ${new URL('sitemap-index.xml', site).href}`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
