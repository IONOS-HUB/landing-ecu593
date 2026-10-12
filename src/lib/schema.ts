/**
 * schema.org JSON-LD builders shared by the landing (components/seo/StructuredData.astro) and the
 * blog. Every page points at the same Organization and WebSite nodes by @id, so search and answer
 * engines merge them into one entity. Only confirmed facts: pending() values are dropped, never guessed.
 */
import { site } from '../config/site';
import { localeMeta } from '../i18n';
import type { Dictionary } from '../i18n';
import { isPending } from './pending';

export const known = <T>(value: T) => (isPending(value) ? undefined : value);

export const schemaUrls = (base: URL | undefined) => {
  const absolute = (path: string) => (base ? new URL(path, base).href : path);
  return {
    absolute,
    orgId: absolute('/#organization'),
    websiteId: absolute('/#website'),
  };
};

export function organizationNode(base: URL | undefined, t: Dictionary) {
  const { absolute, orgId } = schemaUrls(base);
  const sameAs = site.social.map((link) => known(link.url)).filter(Boolean);
  return {
    '@type': ['EducationalOrganization', 'OnlineBusiness'],
    '@id': orgId,
    name: site.name,
    alternateName: [site.legalName, 'Ecu593', 'ECU 593 English'],
    url: base ? base.href : undefined,
    logo: { '@type': 'ImageObject', url: absolute(site.logo.src), width: site.logo.width, height: site.logo.height },
    image: absolute(site.ogImage.src),
    slogan: site.slogan.join(' · '),
    description: t.meta.description,
    areaServed: { '@type': 'Country', name: 'Ecuador', identifier: 'EC' },
    knowsLanguage: ['es', 'en'],
    knowsAbout: [
      'Enseñanza de inglés como lengua extranjera',
      'Inglés online',
      'Marco Común Europeo de Referencia para las Lenguas (MCER)',
      'Preparación para el examen Cambridge B2 First',
    ],
    email: known(site.email),
    telephone: `+${site.whatsapp.number}`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'admissions',
      telephone: `+${site.whatsapp.number}`,
      url: `https://wa.me/${site.whatsapp.number}`,
      areaServed: 'EC',
      availableLanguage: ['Spanish', 'English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    sameAs: sameAs.length > 0 ? sameAs : undefined,
  };
}

export function websiteNode(base: URL | undefined) {
  const { orgId, websiteId } = schemaUrls(base);
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: base ? base.href : undefined,
    name: site.name,
    inLanguage: Object.values(localeMeta).map((meta) => meta.htmlLang),
    publisher: { '@id': orgId },
  };
}

export function breadcrumbNode(base: URL | undefined, items: { name: string; path: string }[]) {
  const { absolute } = schemaUrls(base);
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function faqNode(id: string, inLanguage: string, items: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    '@id': id,
    inLanguage,
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

/** Serialises a @graph for a <script type="application/ld+json">, safe to inline in HTML. */
export const toJsonLd = (nodes: object[]) =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
