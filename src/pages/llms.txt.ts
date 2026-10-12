/**
 * llms.txt: a plain-text brief for answer engines and AI assistants (AEO),
 * generated from the same dictionaries as the page. Pending facts are left out.
 */
import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { programs } from '../data/programs';
import { localePath, locales, useDictionary } from '../i18n';
import { isPending } from '../lib/pending';

export const GET: APIRoute = ({ site: base }) => {
  const url = (path: string) => (base ? new URL(path, base).href : path);
  const sections = locales.map((locale) => {
    const t = useDictionary(locale);
    const answered = t.faq.items.filter((faq) => !isPending(faq.answer));
    return [
      `## ${t.meta.title}`,
      '',
      `URL: ${url(localePath(locale))}`,
      '',
      t.meta.description,
      '',
      `### ${t.programs.title}`,
      ...programs.map((program) => {
        const item = t.programs.items[program.id];
        return `- ${item.name} (${item.audience}): ${item.pitch}`;
      }),
      '',
      `### ${t.method.title}`,
      t.method.lead,
      ...t.method.evaluation.map((rule) => `- ${rule.label}: ${rule.value}`),
      '',
      `### ${t.certification.title}`,
      t.certification.lead,
      ...t.certification.benefits.map((benefit) => `- ${benefit.title}: ${benefit.body}`),
      t.certification.note,
      '',
      `### FAQ`,
      ...answered.flatMap((faq) => [`- ${faq.question}`, `  ${faq.answer}`]),
    ].join('\n');
  });

  const body = [
    `# ${site.name}`,
    '',
    `> ${site.slogan.join(' · ')}. English school in Ecuador. Contact: WhatsApp +${site.whatsapp.number} (https://wa.me/${site.whatsapp.number}).`,
    '',
    ...sections.flatMap((section) => [section, '']),
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
