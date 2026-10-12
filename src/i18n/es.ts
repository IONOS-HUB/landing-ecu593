import { pending } from '../lib/pending';
import { FINAL_CEFR, LEVEL_COUNT, TOTAL_WEEKS, WEEKS_PER_LEVEL } from '../data/method';
import { CERTIFICATION_MONTHS, COURSE_MONTHS, MONTHLY_FEE } from '../data/pricing';
import type { Dictionary } from './types';

const es: Dictionary = {
  meta: {
    title: `Ecu593 English | Inglés ${FINAL_CEFR} en ${LEVEL_COUNT} meses + preparación Cambridge gratis`,
    description: `Academia de inglés 100% virtual en Ecuador. Programa ${LEVEL_COUNT} + ${CERTIFICATION_MONTHS}: ${LEVEL_COUNT} meses de clases en vivo para llegar a ${FINAL_CEFR} y un mes ${COURSE_MONTHS} con tu diploma institucional y preparación gratis para el examen internacional de Cambridge. Primer mes gratis, luego $${MONTHLY_FEE} al mes sin matrícula.`,
    ogImageAlt: 'Pasaporte de estudiante de Ecu593 English con sellos de nivel',
  },
  a11y: {
    skip: 'Saltar al contenido',
    sections: 'Secciones',
    home: 'inicio',
    languageSwitch: 'Cambiar idioma',
  },
  nav: {
    links: [
      { href: '#programas', label: 'Programas' },
      { href: '#metodo', label: `${LEVEL_COUNT} + ${CERTIFICATION_MONTHS}` },
      { href: '#mes-13', label: 'Cambridge' },
      { href: '#modalidades', label: 'Horarios' },
      { href: '#valores', label: 'Inversión' },
      { href: '#preguntas', label: 'Preguntas' },
    ],
    cta: 'Primer mes gratis',
  },
  hero: {
    title: 'Conéctate, aprende y domina el inglés.',
    sub: `Clases en vivo, 100% virtuales y 100% en inglés. En ${LEVEL_COUNT} meses llegas a ${FINAL_CEFR}, y en el mes ${COURSE_MONTHS} recibes tu diploma y te preparamos gratis para la certificación internacional de Cambridge. Tu primer mes es gratis.`,
    ctaPrimary: 'Quiero mi primer mes gratis',
    ctaWhatsapp: 'Escríbenos',
    passportLabel: 'Pasaporte de estudiante Ecu593 English',
    docHead: ['Pasaporte de estudiante', 'Student passport'],
    idLabels: { type: 'Tipo / Type', code: 'Código / Code', number: 'N.º / No.' },
    fields: [
      { label: 'Titular / Holder', value: 'Tú' },
      { label: 'Destino / Destination', value: `Inglés ${FINAL_CEFR}` },
      { label: 'Duración / Length', value: `${LEVEL_COUNT} + ${CERTIFICATION_MONTHS} meses` },
      { label: `Mes ${COURSE_MONTHS} / Month ${COURSE_MONTHS}`, value: `Diploma + prep. Cambridge ${FINAL_CEFR} gratis` },
      { label: 'Modalidad / Mode', value: '100% virtual, en vivo' },
      { label: 'Primer mes / First month', value: 'Gratis' },
    ],
    mrz: ['P<ECU593<<ENGLISH<<LEARN<GROW<ACHIEVE', 'TU<<NIVEL01<<B2<EN<12<MESES<<MES1<GRATIS'],
    stamps: {
      slogan: { top: 'Learn · Grow · Achieve', main: '593', bottom: 'Ecu593 English' },
      entry: { top: 'Entrada', main: 'Nivel 01', bottom: 'Semana 1' },
      modality: { top: '100% virtual', main: 'ECU', bottom: 'Ecuador · 593' },
    },
    cover: { country: 'Ecuador · 593', title: 'Pasaporte', subtitle: 'Ecu593 English' },
  },
  programs: {
    title: 'Un programa para cada meta',
    lead: `Desde cero hasta ${FINAL_CEFR}, preparación para Cambridge, conversación para quienes ya hablan inglés y cursos para empresas. Todo en vivo y 100% virtual.`,
    band: 'Visa de estudio',
    labels: { audience: 'Para', duration: 'Duración', modality: 'Modalidad' },
    modalityValue: '100% virtual, en vivo',
    durationFallback: 'Consúltanos',
    cta: (name) => `Me interesa ${name}`,
    stampTop: 'Visa aprobada',
    items: {
      regular: {
        name: `Regular ${FINAL_CEFR}`,
        audience: `Desde cero hasta ${FINAL_CEFR}`,
        duration: `${LEVEL_COUNT} meses + ${CERTIFICATION_MONTHS} de certificación`,
        pitch: `Clases de lunes a viernes, o solo los sábados. Practicas las 4 habilidades todos los días y en ${LEVEL_COUNT} meses llegas al nivel ${FINAL_CEFR}.`,
        focus: [
          'Hablar, escuchar, leer y escribir en cada clase',
          'Lunes a viernes o solo sábados',
          `Mes ${COURSE_MONTHS}: diploma institucional + preparación Cambridge gratis`,
        ],
        imageAlt: 'Clase en vivo del curso regular de Ecu593 English',
        imageBrief: 'Captura de una clase online del curso regular, con la docente y el grupo en pantalla',
      },
      particulares: {
        name: 'Particulares',
        audience: 'Nivelación y exámenes Cambridge',
        duration: pending('Duración u horas de las clases particulares'),
        pitch: 'Clases personalizadas para ponerte al día o prepararte para un examen internacional de Cambridge.',
        focus: ['Clases personalizadas', 'Nivelación', 'Preparación para Cambridge'],
        imageAlt: 'Clase particular de inglés en línea',
        imageBrief: 'Docente dando una clase particular por videollamada',
      },
      conversacion: {
        name: 'Conversación',
        audience: 'Quienes ya dominan el idioma',
        duration: pending('Duración del programa de conversación'),
        pitch: 'Para mantener y actualizar tu inglés con práctica de conversación junto a docentes con certificación C1.',
        focus: ['Fluidez y vocabulario actual', 'Docentes con certificación C1', 'Clases 100% en inglés'],
        imageAlt: 'Estudiantes conversando en inglés en una clase online',
        imageBrief: 'Grupo pequeño conversando en una videollamada',
      },
      corporativo: {
        name: 'Empresas',
        audience: 'Equipos de trabajo',
        duration: pending('Duración o formato de los cursos corporativos'),
        pitch: 'Cursos de inglés para el personal de tu empresa, en vivo y en línea.',
        focus: ['Clases para tu equipo', '100% virtual', 'Plan según tu empresa'],
        imageAlt: 'Equipo de una empresa en una clase de inglés online',
        imageBrief: 'Colaboradores de una empresa conectados a una clase de inglés',
      },
    },
  },
  method: {
    title: `${LEVEL_COUNT} + ${CERTIFICATION_MONTHS}: tu ruta a ${FINAL_CEFR}.`,
    lead: `${LEVEL_COUNT} meses de estudio, un nivel de ${WEEKS_PER_LEVEL} semanas por mes, hasta llegar a ${FINAL_CEFR}. Después viene el +${CERTIFICATION_MONTHS}: el mes ${COURSE_MONTHS}, dedicado por completo a tu evaluación final y a prepararte gratis para Cambridge.`,
    counterLabel: 'Tu pasaporte',
    weeksOf: `de ${TOTAL_WEEKS} semanas`,
    levelLabel: 'Nivel',
    weeksRange: (from, to) => `Semanas ${from}–${to}`,
    stamp: { top: (level) => `Nivel ${level}`, main: 'Aprobado', bottom: (week) => `Semana ${week}` },
    evaluation: [
      { label: 'Nota para aprobar', value: '7 / 10' },
      { label: 'Evaluación', value: 'Escrita + oral' },
      { label: 'Se califica', value: 'Tareas, examen parcial y examen final' },
      { label: 'Asistencia mínima', value: '75 %' },
    ],
    levelContent: pending('Contenido o temas de cada nivel'),
    bonus: {
      label: `+${CERTIFICATION_MONTHS} · Mes ${COURSE_MONTHS}`,
      title: 'Bono de certificación',
      body: `Examen final para tu diploma institucional y preparación gratis para el examen internacional de Cambridge ${FINAL_CEFR}.`,
      link: `Qué incluye el mes ${COURSE_MONTHS}`,
    },
  },
  certification: {
    title: `Mes ${COURSE_MONTHS}: tu diploma y tu preparación Cambridge, gratis.`,
    lead: `Terminas tus ${LEVEL_COUNT} niveles y no te dejamos solo con tu inglés. El mes ${COURSE_MONTHS} es un bono dedicado 100% a evaluarte y a prepararte con estrategia para certificar tu nivel.`,
    monthLabel: 'Mes',
    stamp: { top: 'Bono de certificación', main: 'Gratis', bottom: `Mes ${COURSE_MONTHS}` },
    benefits: [
      {
        tag: 'Diploma institucional',
        title: 'Tu título del Centro de Idiomas del Valle',
        body: `Rindes el examen final del mes ${COURSE_MONTHS} y, al aprobarlo, recibes tu diploma institucional, un título propio del Centro de Idiomas del Valle CIVTU S.A.S.`,
      },
      {
        tag: 'Preparación internacional · Gratis',
        title: `Te preparamos para Cambridge ${FINAL_CEFR}`,
        body: `Durante el mes ${COURSE_MONTHS} recibes, sin costo, preparación especializada para rendir el examen internacional de Cambridge de nivel ${FINAL_CEFR}.`,
      },
    ],
    note: 'Lo gratuito es la preparación. El examen oficial de Cambridge lo rindes en un centro autorizado por Cambridge English.',
    examFee: pending('¿La tarifa del examen oficial de Cambridge está incluida o la paga el estudiante?'),
    cta: 'Quiero mi primer mes gratis',
  },
  campaign: {
    banner: 'Lanzamiento: tu primer mes es gratis, sin matrícula y sin compromiso.',
    bannerCta: 'Reservar mi mes gratis',
    close: 'Cerrar aviso',
    dialog: {
      stamp: { top: 'Lanzamiento', main: 'Gratis', bottom: 'Primer mes' },
      title: 'Tu primer mes es gratis',
      body: `Empieza tu ruta ${LEVEL_COUNT} + ${CERTIFICATION_MONTHS} sin pagar el primer mes y sin matrícula. Al final, en el mes ${COURSE_MONTHS}, te preparamos gratis para Cambridge ${FINAL_CEFR}.`,
      cta: 'Reservar mi mes gratis',
      dismiss: 'Ahora no',
    },
  },
  modalities: {
    title: '100% virtual, en vivo. Estos son los horarios.',
    lead: 'Te conectas desde tu casa o tu oficina a clases en vivo con tu docente, en grupos reducidos y 100% en inglés.',
    entry: 'Entrada',
    detailFallback: 'Consúltanos por WhatsApp',
    items: {
      online: {
        name: 'Online',
        pitch: 'Elige el horario que va contigo: una hora diaria de lunes a viernes, o una sola jornada los sábados.',
        details: [
          { label: 'Lunes a viernes', value: '07h00 – 08h00 o 19h00 – 20h00' },
          { label: 'Sábados', value: '08h00 – 13h00' },
          { label: 'Grupos', value: 'Reducidos' },
          { label: 'Plataforma', value: pending('Plataforma de clases online (Zoom, Meet, etc.)') },
          { label: 'Requisitos', value: pending('Requisitos técnicos para clases online') },
        ],
        imageAlt: 'Estudiante en una clase online de Ecu593 English',
        imageBrief: 'Estudiante en casa conectado a su clase online',
      },
    },
  },
  endorsements: {
    title: 'Lo que viene con tu pasaporte',
    lead: 'Resultados reales en un año, con un hábito de estudio diario. Eso se nota en cosas concretas.',
    items: [
      {
        title: 'Educación integral',
        body: 'Practicas las 4 habilidades, hablar, escuchar, leer y escribir, todos los días, y toda la clase es en inglés.',
      },
      {
        title: 'Grupos reducidos',
        body: 'Pocos estudiantes por grupo, para que participes en cada clase y tu docente siga tu avance.',
      },
      {
        title: 'Docentes',
        body: 'Todos tienen formación universitaria en pedagogía del idioma inglés y certificación internacional de nivel C1.',
      },
      {
        title: 'Diploma institucional',
        body: `Al aprobar el examen del mes ${COURSE_MONTHS} recibes un título institucional propio del Centro de Idiomas del Valle CIVTU S.A.S., una empresa especializada en la enseñanza del inglés.`,
      },
      {
        title: 'Preparación Cambridge gratis',
        body: `En el mes ${COURSE_MONTHS} te preparamos sin costo para el examen internacional de Cambridge de nivel ${FINAL_CEFR}.`,
      },
      {
        title: 'Reglas claras desde el primer día',
        body: 'Sabes cómo te evalúan: nota sobre 10, apruebas con 7, y se mide tanto lo escrito como lo oral.',
      },
      {
        title: 'Una persona te acompaña',
        body: 'Un asesor revisa tu solicitud y te responde por WhatsApp, las 24 horas.',
      },
    ],
  },
  testimonials: {
    title: 'Historias de quienes ya tienen sellos',
    pendingNote:
      'Agrega testimonios reales (con permiso) en src/data/testimonials.ts. Mientras la lista esté vacía, esta sección no se publica.',
  },
  pricing: {
    title: 'Inversión',
    tag: 'Tasas · Ecu593 English',
    items: [
      { label: 'Primer mes', value: 'Gratis' },
      { label: 'Pensión mensual', value: `$${MONTHLY_FEE}` },
      { label: 'Matrícula', value: '$0' },
      { label: 'Material de estudio', value: 'Incluido' },
      { label: 'Duración', value: `${LEVEL_COUNT} + ${CERTIFICATION_MONTHS} meses` },
      { label: `Preparación Cambridge (mes ${COURSE_MONTHS})`, value: 'Gratis' },
      { label: `Pensión del mes ${COURSE_MONTHS}`, value: pending(`¿Se cobra pensión en el mes ${COURSE_MONTHS} o es parte del bono?`) },
      { label: 'Formas de pago', value: pending('Formas de pago aceptadas') },
    ],
    note: 'Sin matrícula, sin costo de materiales y sin pagos ocultos. El primer mes es gratis y sin compromiso.',
    ctaWhatsapp: 'Preguntar por WhatsApp',
    ctaForm: 'Dejar mis datos',
    whatsappMessage: 'Hola, quiero aprovechar el primer mes gratis en Ecu593 English.',
  },
  faq: {
    title: 'Preguntas antes de tu primer sello',
    more: '¿No está tu pregunta?',
    moreLink: 'Escríbenos por WhatsApp',
    whatsappMessage: 'Hola, tengo una pregunta sobre los cursos de Ecu593 English.',
    items: [
      {
        question: '¿Cuánto dura el curso?',
        answer: `${COURSE_MONTHS} meses, con la fórmula ${LEVEL_COUNT} + ${CERTIFICATION_MONTHS}: ${LEVEL_COUNT} meses de clases, un nivel de ${WEEKS_PER_LEVEL} semanas por mes, para llegar a ${FINAL_CEFR}, y un mes ${COURSE_MONTHS} dedicado a tu evaluación final y a tu preparación para Cambridge.`,
      },
      {
        question: '¿Cuánto cuesta?',
        answer: `El primer mes es gratis y sin compromiso. Después pagas $${MONTHLY_FEE} al mes. No hay matrícula, el material de estudio está incluido y no hay pagos ocultos.`,
      },
      {
        question: '¿Qué horarios tienen?',
        answer:
          'De lunes a viernes, de 07h00 a 08h00 o de 19h00 a 20h00. Si prefieres, puedes asistir solo los sábados, de 08h00 a 13h00.',
      },
      {
        question: '¿Las clases son presenciales?',
        answer: 'No. Todas las clases son 100% virtuales y en vivo, con tu docente y tu grupo.',
      },
      {
        question: '¿Entregan certificado?',
        answer: `Sí. Al aprobar el examen del mes ${COURSE_MONTHS} recibes un diploma institucional, un título propio del Centro de Idiomas del Valle CIVTU S.A.S. Además, ese mes te preparamos gratis para el examen internacional de Cambridge de nivel ${FINAL_CEFR}.`,
      },
      {
        question: `¿Qué pasa en el mes ${COURSE_MONTHS}?`,
        answer: `Es tu bono de certificación. Ya terminaste los ${LEVEL_COUNT} niveles, así que ese mes se dedica por completo a tu examen final institucional y a una preparación especializada, sin costo, para el examen de Cambridge ${FINAL_CEFR}.`,
      },
      {
        question: '¿El examen de Cambridge está incluido?',
        answer:
          'Lo que incluimos gratis es la preparación. El examen oficial de Cambridge lo rindes en un centro autorizado por Cambridge English.',
      },
      {
        question: '¿Cómo me inscribo?',
        answer:
          'Déjanos tus datos en el formulario o escríbenos por WhatsApp. Un asesor te contacta, te ayuda a elegir horario y empiezas con tu primer mes gratis.',
      },
      {
        question: '¿Cómo sé si apruebo un nivel?',
        answer:
          'Cada nivel se califica sobre 10 con evaluación escrita y oral. Apruebas con 7 y necesitas al menos 75 % de asistencia.',
      },
      {
        question: '¿Puedo empezar si ya sé algo de inglés?',
        answer: pending('Respuesta sobre prueba de ubicación o ingreso a un nivel superior'),
      },
    ],
  },
  form: {
    title: 'Reserva tu primer mes gratis',
    lead: 'Déjanos tu nombre, correo y celular. Un asesor te contactará para ayudarte a elegir tu programa y tu horario.',
    steps: ['Envías tus datos', 'Un asesor te contacta', 'Eliges tu horario', 'Empiezas tu primer mes gratis'],
    alt: '¿Prefieres hablar ya?',
    altCta: 'Chatear por WhatsApp',
    band: ['Formulario E-593', 'Ecu593 English'],
    fields: {
      name: 'Nombre',
      phone: 'Celular',
      email: 'Correo',
      emailPlaceholder: 'tucorreo@ejemplo.com',
      program: 'Programa de interés (opcional)',
      programPlaceholder: 'Elige un programa',
      programUnsure: 'No estoy seguro',
    },
    submit: 'Enviar mis datos',
    noscript: 'Para enviar el formulario activa JavaScript, o',
    noscriptLink: 'escríbenos por WhatsApp',
    stamp: { top: 'Solicitud', main: 'Recibida', bottom: 'Ecu593 English' },
    client: {
      phoneInvalid: 'Escribe un celular de 10 dígitos que empiece con 09.',
      sending: 'Enviando tus datos…',
      success: '¡Gracias por la información!',
      successDetail: ' En breve un asesor tomará contacto con usted.',
      error: 'No pudimos enviar tus datos en este momento. ',
      errorLink: 'Envíalos por WhatsApp',
      errorTail: ' y te atendemos igual.',
      whatsappFallback:
        'Hola, soy {name}. Quiero información de los cursos de Ecu593 English. Mi celular es {phone} y mi correo {email}.',
    },
  },
  footer: {
    closing: 'El empujón que tu futuro necesita para sonar global.',
    ctaPrimary: 'Quiero mi primer mes gratis',
    ctaWhatsapp: 'Escríbenos',
    contact: 'Contacto',
    social: 'Redes',
    rights: 'Todos los derechos reservados.',
  },
  whatsapp: {
    greeting: 'Hola, quiero información sobre los cursos de inglés de Ecu593 English.',
    fab: '¿Dudas? Escríbenos',
    fabLabel: 'Escríbenos por WhatsApp',
    chat: 'WhatsApp',
  },
  photo: {
    pending: 'Foto pendiente',
  },
  pending: {
    tag: 'Dato pendiente',
    title: 'Completar en src/i18n o src/config',
  },
};

export default es;
