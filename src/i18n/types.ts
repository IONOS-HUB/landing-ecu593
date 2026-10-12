import type { Maybe } from '../lib/pending';
import type { ModalityId, ProgramId } from '../data/types';

interface StampText {
  top: string;
  main: string;
  bottom: string;
}

/**
 * Every visible string on the landing. One file per language (es.ts, en.ts) implements it,
 * so a missing translation is a type error.
 */
export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
  };
  a11y: {
    skip: string;
    sections: string;
    home: string;
    languageSwitch: string;
  };
  nav: {
    links: { href: string; label: string }[];
    cta: string;
  };
  hero: {
    /** Keyword line above the headline, part of the H1. */
    eyebrow: string;
    title: string;
    sub: string;
    ctaPrimary: string;
    ctaWhatsapp: string;
    passportLabel: string;
    docHead: [string, string];
    idLabels: { type: string; code: string; number: string };
    fields: { label: string; value: string }[];
    mrz: [string, string];
    stamps: { slogan: StampText; entry: StampText; modality: StampText };
    cover: { country: string; title: string; subtitle: string };
  };
  programs: {
    title: string;
    lead: string;
    band: string;
    labels: { audience: string; duration: string; modality: string };
    modalityValue: string;
    durationFallback: string;
    cta: (name: string) => string;
    stampTop: string;
    items: Record<
      ProgramId,
      {
        name: string;
        audience: string;
        duration: Maybe<string>;
        pitch: string;
        focus: string[];
        imageAlt: string;
        imageBrief: string;
      }
    >;
  };
  method: {
    title: string;
    lead: string;
    counterLabel: string;
    weeksOf: string;
    levelLabel: string;
    weeksRange: (from: number, to: number) => string;
    stamp: { top: (level: string) => string; main: string; bottom: (week: number) => string };
    evaluation: { label: string; value: string }[];
    levelContent: Maybe<string>;
    /** The "+1" at the end of the 12-level path: links to the month 13 block. */
    bonus: { label: string; title: string; body: string; link: string };
  };
  /** Month 13: institutional diploma + free Cambridge preparation (the core value proposition). */
  certification: {
    title: string;
    lead: string;
    monthLabel: string;
    stamp: StampText;
    benefits: { tag: string; title: string; body: string }[];
    note: string;
    examFee: Maybe<string>;
    cta: string;
  };
  /** Launch campaign "Mes Gratis" (src/config/campaign.ts). */
  campaign: {
    banner: string;
    bannerCta: string;
    close: string;
    dialog: { stamp: StampText; title: string; body: string; cta: string; dismiss: string };
  };
  modalities: {
    title: string;
    lead: string;
    entry: string;
    detailFallback: string;
    items: Record<
      ModalityId,
      {
        name: string;
        pitch: string;
        details: { label: string; value: Maybe<string> }[];
        imageAlt: string;
        imageBrief: string;
      }
    >;
  };
  endorsements: {
    title: string;
    lead: string;
    items: { title: string; body: Maybe<string> }[];
  };
  testimonials: {
    title: string;
    pendingNote: string;
  };
  pricing: {
    title: string;
    tag: string;
    items: { label: string; value: Maybe<string> }[];
    note: string;
    ctaWhatsapp: string;
    ctaForm: string;
    whatsappMessage: string;
  };
  faq: {
    title: string;
    more: string;
    moreLink: string;
    whatsappMessage: string;
    items: { question: string; answer: Maybe<string> }[];
  };
  form: {
    title: string;
    lead: string;
    steps: string[];
    alt: string;
    altCta: string;
    band: [string, string];
    fields: {
      name: string;
      phone: string;
      email: string;
      emailPlaceholder: string;
      program: string;
      programPlaceholder: string;
      programUnsure: string;
    };
    submit: string;
    noscript: string;
    noscriptLink: string;
    stamp: StampText;
    /** Strings used by the client script (scripts/lead-form.ts). */
    client: {
      phoneInvalid: string;
      sending: string;
      success: string;
      successDetail: string;
      error: string;
      errorLink: string;
      errorTail: string;
      whatsappFallback: string;
    };
  };
  footer: {
    closing: string;
    ctaPrimary: string;
    ctaWhatsapp: string;
    contact: string;
    guides: string;
    blog: string;
    social: string;
    rights: string;
  };
  /** Blog (Spanish only) and the landing teaser that links to it. */
  blog: {
    name: string;
    indexTitle: string;
    indexDescription: string;
    indexLead: string;
    teaserTitle: string;
    teaserLead: string;
    teaserCta: string;
    readMore: string;
    answer: string;
    faq: string;
    sources: string;
    published: string;
    updated: string;
    readingTime: (minutes: number) => string;
    home: string;
    related: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    author: string;
  };
  whatsapp: {
    greeting: string;
    fab: string;
    fabLabel: string;
    chat: string;
  };
  photo: {
    pending: string;
  };
  pending: {
    tag: string;
    title: string;
  };
}
