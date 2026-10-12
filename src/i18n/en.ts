import { pending } from '../lib/pending';
import { FINAL_CEFR, LEVEL_COUNT, TOTAL_WEEKS, WEEKS_PER_LEVEL } from '../data/method';
import { CERTIFICATION_MONTHS, COURSE_MONTHS, MONTHLY_FEE } from '../data/pricing';
import type { Dictionary } from './types';

const en: Dictionary = {
  meta: {
    title: 'Online English school in Ecuador | Ecu593 English',
    description: `Online English school in Ecuador: live classes, reach ${FINAL_CEFR} in ${LEVEL_COUNT} months and get free Cambridge prep. First month free, then $${MONTHLY_FEE}/month, no enrolment fee.`,
    ogImageAlt: 'Ecu593 English student passport with level stamps',
  },
  a11y: {
    skip: 'Skip to content',
    sections: 'Sections',
    home: 'home',
    languageSwitch: 'Change language',
  },
  nav: {
    links: [
      { href: '#programas', label: 'Programs' },
      { href: '#metodo', label: `${LEVEL_COUNT} + ${CERTIFICATION_MONTHS}` },
      { href: '#mes-13', label: 'Cambridge' },
      { href: '#modalidades', label: 'Schedule' },
      { href: '#valores', label: 'Fees' },
      { href: '#preguntas', label: 'FAQ' },
      { href: '/blog/', label: 'Blog (ES)' },
    ],
    cta: 'First month free',
  },
  hero: {
    eyebrow: 'Online English school in Ecuador',
    title: 'Connect, learn and master English.',
    sub: `Live classes, 100% online and 100% in English. Reach ${FINAL_CEFR} in ${LEVEL_COUNT} months, then in month ${COURSE_MONTHS} you get your diploma and free preparation for the Cambridge international certificate. Your first month is free.`,
    ctaPrimary: 'I want my free first month',
    ctaWhatsapp: 'Message us',
    passportLabel: 'Ecu593 English student passport',
    docHead: ['Student passport', 'Pasaporte de estudiante'],
    idLabels: { type: 'Type / Tipo', code: 'Code / Código', number: 'No. / N.º' },
    fields: [
      { label: 'Holder / Titular', value: 'You' },
      { label: 'Destination / Destino', value: `English ${FINAL_CEFR}` },
      { label: 'Length / Duración', value: `${LEVEL_COUNT} + ${CERTIFICATION_MONTHS} months` },
      { label: `Month ${COURSE_MONTHS} / Mes ${COURSE_MONTHS}`, value: `Diploma + free Cambridge ${FINAL_CEFR} prep` },
      { label: 'Mode / Modalidad', value: '100% online, live' },
      { label: 'First month / Primer mes', value: 'Free' },
    ],
    mrz: ['P<ECU593<<ENGLISH<<LEARN<GROW<ACHIEVE', 'YOU<<LEVEL01<<B2<IN<12<MONTHS<<MONTH1<FREE'],
    stamps: {
      slogan: { top: 'Learn · Grow · Achieve', main: '593', bottom: 'Ecu593 English' },
      entry: { top: 'Entry', main: 'Level 01', bottom: 'Week 1' },
      modality: { top: '100% online', main: 'ECU', bottom: 'Ecuador · 593' },
    },
    cover: { country: 'Ecuador · 593', title: 'Passport', subtitle: 'Ecu593 English' },
  },
  programs: {
    title: 'A program for every goal',
    lead: `From zero to ${FINAL_CEFR}, Cambridge exam preparation, conversation for people who already speak English, and courses for companies. All live and 100% online.`,
    band: 'Study visa',
    labels: { audience: 'For', duration: 'Length', modality: 'Format' },
    modalityValue: '100% online, live',
    durationFallback: 'Ask us',
    cta: (name) => `I'm interested in ${name}`,
    stampTop: 'Visa approved',
    items: {
      regular: {
        name: `Regular ${FINAL_CEFR}`,
        audience: `From zero to ${FINAL_CEFR}`,
        duration: `${LEVEL_COUNT} months + ${CERTIFICATION_MONTHS} for certification`,
        pitch: `Classes Monday to Friday, or Saturdays only. You practise all 4 skills every day and reach ${FINAL_CEFR} in ${LEVEL_COUNT} months.`,
        focus: [
          'Speaking, listening, reading and writing every class',
          'Monday to Friday or Saturdays only',
          `Month ${COURSE_MONTHS}: institutional diploma + free Cambridge preparation`,
        ],
        imageAlt: 'Live class of the Ecu593 English regular course',
        imageBrief: 'Screenshot of an online regular-course class, teacher and group on screen',
      },
      particulares: {
        name: 'Private',
        audience: 'Catch-up and Cambridge exams',
        duration: pending('Duración u horas de las clases particulares (inglés)'),
        pitch: 'One-to-one classes to catch up or to prepare for a Cambridge international exam.',
        focus: ['Personalised classes', 'Catch-up', 'Cambridge exam preparation'],
        imageAlt: 'Private online English class',
        imageBrief: 'Teacher giving a private class over video call',
      },
      conversacion: {
        name: 'Conversation',
        audience: 'People who already speak English',
        duration: pending('Duración del programa de conversación (inglés)'),
        pitch: 'Keep your English sharp and up to date with conversation practice led by C1-certified teachers.',
        focus: ['Fluency and current vocabulary', 'C1-certified teachers', 'Classes 100% in English'],
        imageAlt: 'Students talking in English in an online class',
        imageBrief: 'Small group talking on a video call',
      },
      corporativo: {
        name: 'Business',
        audience: 'Company teams',
        duration: pending('Duración o formato de los cursos corporativos (inglés)'),
        pitch: 'English courses for your company’s staff, live and online.',
        focus: ['Classes for your team', '100% online', 'A plan built for your company'],
        imageAlt: 'Company team in an online English class',
        imageBrief: 'Company staff joining an English class online',
      },
    },
  },
  method: {
    title: `${LEVEL_COUNT} + ${CERTIFICATION_MONTHS}: your route to ${FINAL_CEFR}.`,
    lead: `${LEVEL_COUNT} months of study, one ${WEEKS_PER_LEVEL}-week level a month, until you reach ${FINAL_CEFR}. Then comes the +${CERTIFICATION_MONTHS}: month ${COURSE_MONTHS}, devoted entirely to your final assessment and to free Cambridge preparation.`,
    counterLabel: 'Your passport',
    weeksOf: `of ${TOTAL_WEEKS} weeks`,
    levelLabel: 'Level',
    weeksRange: (from, to) => `Weeks ${from}–${to}`,
    stamp: { top: (level) => `Level ${level}`, main: 'Passed', bottom: (week) => `Week ${week}` },
    evaluation: [
      { label: 'Pass mark', value: '7 / 10' },
      { label: 'Assessment', value: 'Written + oral' },
      { label: 'Graded on', value: 'Homework, midterm and final exam' },
      { label: 'Minimum attendance', value: '75 %' },
    ],
    levelContent: pending('Contenido o temas de cada nivel (inglés)'),
    bonus: {
      label: `+${CERTIFICATION_MONTHS} · Month ${COURSE_MONTHS}`,
      title: 'Certification bonus',
      body: `Final exam for your institutional diploma and free preparation for the Cambridge ${FINAL_CEFR} international exam.`,
      link: `What month ${COURSE_MONTHS} includes`,
    },
  },
  certification: {
    title: `Month ${COURSE_MONTHS}: your diploma and your Cambridge preparation, free.`,
    lead: `You finish your ${LEVEL_COUNT} levels and we don't leave you on your own. Month ${COURSE_MONTHS} is a bonus devoted 100% to assessing you and preparing you, with a strategy, to certify your level.`,
    monthLabel: 'Month',
    stamp: { top: 'Certification bonus', main: 'Free', bottom: `Month ${COURSE_MONTHS}` },
    benefits: [
      {
        tag: 'Institutional diploma',
        title: 'Your Centro de Idiomas del Valle diploma',
        body: `You sit the month ${COURSE_MONTHS} final exam and, once you pass, you receive your institutional diploma, issued by Centro de Idiomas del Valle CIVTU S.A.S. itself.`,
      },
      {
        tag: 'International preparation · Free',
        title: `We prepare you for Cambridge ${FINAL_CEFR}`,
        body: `During month ${COURSE_MONTHS} you get specialised preparation, at no cost, to sit the Cambridge international exam at ${FINAL_CEFR} level.`,
      },
    ],
    note: 'What is free is the preparation. You sit the official Cambridge exam at a Cambridge English authorised centre.',
    examFee: pending('¿La tarifa del examen oficial de Cambridge está incluida o la paga el estudiante? (inglés)'),
    cta: 'I want my free first month',
  },
  campaign: {
    banner: 'Launch offer: your first month is free, with no enrolment fee and no commitment.',
    bannerCta: 'Claim my free month',
    close: 'Close notice',
    dialog: {
      stamp: { top: 'Launch', main: 'Free', bottom: 'First month' },
      title: 'Your first month is free',
      body: `Start your ${LEVEL_COUNT} + ${CERTIFICATION_MONTHS} route without paying the first month and with no enrolment fee. At the end, in month ${COURSE_MONTHS}, we prepare you for Cambridge ${FINAL_CEFR} for free.`,
      cta: 'Claim my free month',
      dismiss: 'Not now',
    },
  },
  modalities: {
    title: '100% online, live. Here is the schedule.',
    lead: 'Join live classes with your teacher from home or the office, in small groups and entirely in English.',
    entry: 'Entry',
    detailFallback: 'Ask us on WhatsApp',
    items: {
      online: {
        name: 'Online',
        pitch: 'Pick the schedule that suits you: one hour a day Monday to Friday, or a single session on Saturdays.',
        details: [
          { label: 'Monday to Friday', value: '07:00 – 08:00 or 19:00 – 20:00' },
          { label: 'Saturdays', value: '08:00 – 13:00' },
          { label: 'Groups', value: 'Small' },
          { label: 'Platform', value: pending('Plataforma online (inglés)') },
          { label: 'Requirements', value: pending('Requisitos técnicos online (inglés)') },
        ],
        imageAlt: 'Student in an Ecu593 English online class',
        imageBrief: 'Student at home joining their online class',
      },
    },
  },
  endorsements: {
    title: 'What comes with your passport',
    lead: 'Real results in one year, built on a daily study habit. You notice it in concrete things.',
    items: [
      {
        title: 'All-round learning',
        body: 'You practise all 4 skills, speaking, listening, reading and writing, every day, and the whole class is in English.',
      },
      {
        title: 'Small groups',
        body: 'Few students per group, so you take part in every class and your teacher follows your progress.',
      },
      {
        title: 'Teachers',
        body: 'Every teacher holds a university degree in English language teaching and an international C1 certificate.',
      },
      {
        title: 'Institutional diploma',
        body: `When you pass the month ${COURSE_MONTHS} exam you receive an institutional diploma issued by Centro de Idiomas del Valle CIVTU S.A.S., a company specialised in English teaching.`,
      },
      {
        title: 'Free Cambridge preparation',
        body: `In month ${COURSE_MONTHS} we prepare you, at no cost, for the Cambridge international exam at ${FINAL_CEFR} level.`,
      },
      {
        title: 'Clear rules from day one',
        body: 'You know how you are assessed: graded out of 10, you pass with 7, and both written and oral skills count.',
      },
      {
        title: 'A real person by your side',
        body: 'An advisor reviews your request and answers you on WhatsApp, 24 hours a day.',
      },
    ],
  },
  testimonials: {
    title: 'Stories from students who already have stamps',
    pendingNote:
      'Add real testimonials (with permission) in src/data/testimonials.ts. While the list is empty, this section is not published.',
  },
  pricing: {
    title: 'Fees',
    tag: 'Fees · Ecu593 English',
    items: [
      { label: 'First month', value: 'Free' },
      { label: 'Monthly fee', value: `$${MONTHLY_FEE}` },
      { label: 'Enrolment', value: '$0' },
      { label: 'Study materials', value: 'Included' },
      { label: 'Length', value: `${LEVEL_COUNT} + ${CERTIFICATION_MONTHS} months` },
      { label: `Cambridge preparation (month ${COURSE_MONTHS})`, value: 'Free' },
      { label: `Month ${COURSE_MONTHS} fee`, value: pending(`¿Se cobra pensión en el mes ${COURSE_MONTHS} o es parte del bono? (inglés)`) },
      { label: 'Payment methods', value: pending('Formas de pago aceptadas (inglés)') },
    ],
    note: 'No enrolment fee, no charge for materials and no hidden costs. The first month is free, with no commitment.',
    ctaWhatsapp: 'Ask on WhatsApp',
    ctaForm: 'Leave my details',
    whatsappMessage: 'Hi, I would like to take the free first month at Ecu593 English.',
  },
  faq: {
    title: 'Questions before your first stamp',
    more: 'Question not here?',
    moreLink: 'Message us on WhatsApp',
    whatsappMessage: 'Hi, I have a question about the Ecu593 English courses.',
    items: [
      {
        question: 'How long is the course?',
        answer: `${COURSE_MONTHS} months, following the ${LEVEL_COUNT} + ${CERTIFICATION_MONTHS} formula: ${LEVEL_COUNT} months of classes, one ${WEEKS_PER_LEVEL}-week level a month, to reach ${FINAL_CEFR}, and a month ${COURSE_MONTHS} devoted to your final assessment and your Cambridge preparation.`,
      },
      {
        question: 'How much does it cost?',
        answer: `The first month is free, with no commitment. After that you pay $${MONTHLY_FEE} a month. There is no enrolment fee, study materials are included and there are no hidden costs.`,
      },
      {
        question: 'What schedules do you offer?',
        answer:
          'Monday to Friday, from 07:00 to 08:00 or from 19:00 to 20:00. If you prefer, you can attend on Saturdays only, from 08:00 to 13:00.',
      },
      {
        question: 'Are classes in person?',
        answer: 'No. Every class is 100% online and live, with your teacher and your group.',
      },
      {
        question: 'Do you issue a certificate?',
        answer: `Yes. When you pass the month ${COURSE_MONTHS} exam you receive an institutional diploma issued by Centro de Idiomas del Valle CIVTU S.A.S. That same month we also prepare you, for free, for the Cambridge international exam at ${FINAL_CEFR} level.`,
      },
      {
        question: `What happens in month ${COURSE_MONTHS}?`,
        answer: `It is your certification bonus. You have finished the ${LEVEL_COUNT} levels, so that month is devoted entirely to your institutional final exam and to specialised preparation, at no cost, for the Cambridge ${FINAL_CEFR} exam.`,
      },
      {
        question: 'Is the Cambridge exam included?',
        answer:
          'What we include for free is the preparation. You sit the official Cambridge exam at a Cambridge English authorised centre.',
      },
      {
        question: 'How do I enrol?',
        answer:
          'Leave your details in the form or message us on WhatsApp. An advisor contacts you, helps you choose a schedule and you start with your free first month.',
      },
      {
        question: 'How do I know if I passed a level?',
        answer:
          'Each level is graded out of 10 with written and oral assessment. You pass with 7 and need at least 75 % attendance.',
      },
      {
        question: 'Can I start if I already know some English?',
        answer: pending('Respuesta sobre prueba de ubicación (inglés)'),
      },
    ],
  },
  form: {
    title: 'Claim your free first month',
    lead: 'Leave your name, email and mobile number. An advisor will contact you to help you choose your program and schedule.',
    steps: ['You send your details', 'An advisor contacts you', 'You choose your schedule', 'You start your free first month'],
    alt: 'Rather talk now?',
    altCta: 'Chat on WhatsApp',
    band: ['Form E-593', 'Ecu593 English'],
    fields: {
      name: 'Name',
      phone: 'Mobile',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      program: 'Program of interest (optional)',
      programPlaceholder: 'Choose a program',
      programUnsure: 'Not sure yet',
    },
    submit: 'Send my details',
    noscript: 'To send the form please enable JavaScript, or',
    noscriptLink: 'message us on WhatsApp',
    stamp: { top: 'Application', main: 'Received', bottom: 'Ecu593 English' },
    client: {
      phoneInvalid: 'Enter a 10-digit Ecuadorian mobile number starting with 09.',
      sending: 'Sending your details…',
      success: 'Thank you for your information!',
      successDetail: ' An advisor will contact you shortly.',
      error: 'We could not send your details right now. ',
      errorLink: 'Send them on WhatsApp',
      errorTail: ' and we will help you all the same.',
      whatsappFallback:
        'Hi, I am {name}. I would like information about the Ecu593 English courses. My mobile is {phone} and my email {email}.',
    },
  },
  footer: {
    closing: 'The push your future needs to sound global.',
    ctaPrimary: 'I want my free first month',
    ctaWhatsapp: 'Message us',
    contact: 'Contact',
    guides: 'Guides',
    blog: 'Blog (in Spanish): levels, B1, B2 and Cambridge',
    social: 'Social',
    rights: 'All rights reserved.',
  },
  blog: {
    name: 'Ecu593 English blog',
    indexTitle: 'English blog: levels, B1, B2 and Cambridge guides | Ecu593 English',
    indexDescription:
      'Practical guides to learning English online from Ecuador: the B1 graduation requirement, the Cambridge B2 First exam, CEFR levels and studying while you work.',
    indexLead: 'Clear answers to what people ask us most: which English level you need, how it is measured and how to get there online.',
    teaserTitle: 'Guides for your English',
    teaserLead: 'What to know before you choose a course: levels, university requirements and the Cambridge exam. Guides are in Spanish.',
    teaserCta: 'See all guides',
    readMore: 'Read guide',
    answer: 'Quick answer',
    faq: 'FAQ',
    sources: 'Sources',
    published: 'Published',
    updated: 'Updated',
    readingTime: (minutes) => `${minutes} min read`,
    home: 'Home',
    related: 'Keep reading',
    ctaTitle: `Your route to ${FINAL_CEFR}, 100% online`,
    ctaBody: `${LEVEL_COUNT} months of live classes to reach ${FINAL_CEFR}, then a month ${COURSE_MONTHS} with your institutional diploma and free Cambridge preparation. Your first month is free.`,
    ctaButton: 'I want my free first month',
    author: 'Ecu593 English academic team',
  },
  whatsapp: {
    greeting: 'Hi, I would like information about the Ecu593 English courses.',
    fab: 'Questions? Message us',
    fabLabel: 'Message us on WhatsApp',
    chat: 'WhatsApp',
  },
  photo: {
    pending: 'Photo pending',
  },
  pending: {
    tag: 'Pending',
    title: 'Fill in src/i18n or src/config',
  },
};

export default en;
