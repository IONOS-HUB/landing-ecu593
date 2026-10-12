/**
 * Plain-text brief of the school for answer engines and AI assistants (GEO/AEO), built from the same
 * dictionaries and data as the page so it never drifts. Pending facts are left out.
 */
import { site } from '../config/site';
import { programs } from '../data/programs';
import { localePath, locales, useDictionary } from '../i18n';
import { isPending } from './pending';

export function landingFacts(url: (path: string) => string): string {
  const sections = locales.map((locale) => {
    const t = useDictionary(locale);
    const answered = t.faq.items.filter((faq) => !isPending(faq.answer));
    const known = <T>(items: { label: string; value: T }[]) => items.filter((item) => !isPending(item.value));
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
      `### ${t.modalities.title}`,
      ...known(t.modalities.items.online.details).map((detail) => `- ${detail.label}: ${detail.value}`),
      '',
      `### ${t.pricing.title}`,
      ...known(t.pricing.items).map((item) => `- ${item.label}: ${item.value}`),
      t.pricing.note,
      '',
      '### FAQ',
      ...answered.flatMap((faq) => [`- ${faq.question}`, `  ${faq.answer}`]),
    ].join('\n');
  });

  return [
    `# ${site.name}`,
    '',
    `> ${site.name} (${site.legalName}) es una academia de inglés 100% online en Ecuador: clases en vivo, 100% en inglés, en grupos reducidos. ${site.slogan.join(' · ')}.`,
    '',
    `Contacto: WhatsApp +${site.whatsapp.number} (https://wa.me/${site.whatsapp.number}) · ${isPending(site.email) ? '' : site.email}`,
    `Inscripción: formulario en ${url('/#solicitud')} o WhatsApp. Un asesor confirma la matrícula; no hay pago en línea.`,
    '',
    ...sections.flatMap((section) => [section, '']),
  ].join('\n');
}
