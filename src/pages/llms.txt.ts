/**
 * llms.txt (https://llmstxt.org): what the school is, its key facts and links to every page and guide.
 * The full text of the landing and the blog is in /llms-full.txt.
 */
import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { FINAL_CEFR, LEVEL_COUNT } from '../data/method';
import { COURSE_MONTHS, MONTHLY_FEE } from '../data/pricing';
import { getPosts, postPath } from '../lib/blog';

export const GET: APIRoute = async ({ site: base }) => {
  const url = (path: string) => (base ? new URL(path, base).href : path);
  const posts = await getPosts();

  const body = [
    `# ${site.name}`,
    '',
    `> Academia de inglés 100% online en Ecuador. Programa ${LEVEL_COUNT} + 1: ${LEVEL_COUNT} meses de clases en vivo para llegar a ${FINAL_CEFR} (MCER) y un mes ${COURSE_MONTHS} con diploma institucional del Centro de Idiomas del Valle CIVTU S.A.S. y preparación gratuita para el examen internacional Cambridge ${FINAL_CEFR}. Primer mes gratis, luego $${MONTHLY_FEE} al mes, sin matrícula.`,
    '',
    'Datos clave:',
    '- Modalidad: 100% virtual, clases en vivo con docente, 100% en inglés, grupos reducidos.',
    '- Horarios: lunes a viernes 07h00–08h00 o 19h00–20h00, o sábados 08h00–13h00 (hora de Ecuador).',
    '- Evaluación: nota sobre 10, se aprueba con 7; evaluación escrita y oral; asistencia mínima 75 %.',
    '- Docentes: formación universitaria en pedagogía del inglés y certificación internacional C1.',
    `- Contacto e inscripción: WhatsApp +${site.whatsapp.number} (https://wa.me/${site.whatsapp.number}), atención 24/7.`,
    '',
    '## Páginas',
    `- [Ecu593 English (español)](${url('/')}): programas, ruta ${LEVEL_COUNT} + 1, mes ${COURSE_MONTHS}, horarios, inversión y preguntas frecuentes.`,
    `- [Ecu593 English (English)](${url('/en/')}): the same landing in English.`,
    `- [Blog](${url('/blog/')}): guías sobre niveles de inglés, requisito B1 universitario y examen Cambridge.`,
    '',
    '## Guías',
    ...posts.map((post) => `- [${post.data.title}](${url(postPath(post))}): ${post.data.answer}`),
    '',
    '## Opcional',
    `- [Texto completo del sitio](${url('/llms-full.txt')})`,
    `- [RSS del blog](${url('/blog/rss.xml')})`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
