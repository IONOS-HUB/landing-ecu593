# Pendientes de contenido

Todo lo que la landing necesita y aún no tenemos. En `npm run dev` cada dato faltante se ve con un recuadro rojo punteado **"Dato pendiente"**. En producción esos bloques se ocultan o muestran un texto alternativo seguro. No se inventa nada: ni testimonios, ni precios, ni cifras.

Para completar un dato, cambia `pending('…')` por el valor real en el archivo indicado. Los textos están en dos idiomas: **completa el dato en `src/i18n/es.ts` y en `src/i18n/en.ts`**.

Fuente de lo ya completado: formulario del cliente del 05-10-2026 (Carlos Ismael Alvarez Cevallos) y documento "Propuesta de valor y requerimientos web" del 12-10-2026 (fórmula 12 + 1, preparación Cambridge, campaña "Mes Gratis", restricciones de imagen).

## Reglas vigentes (no son pendientes, son límites)
- **Nada del Ministerio de Trabajo.** La empresa aún no tiene el año de existencia jurídica que exige el aval. El diploma es un **título institucional propio** del Centro de Idiomas del Valle CIVTU S.A.S.; no se menciona ningún ministerio ni entidad pública.
- **Sin rostros del personal docente real** (conflicto de intereses). Toda imagen de profesores o alumnos debe ser generada con IA y aprobada por el cliente; los videos se graban con modelos o actores externos.
- **Videos con actores = dramatización.** No se publican como testimonios reales ni se cargan en `src/data/testimonials.ts`; deben indicar que son una recreación.

## Mes 13 y Cambridge — `certification` y `pricing.items` en `src/i18n/es.ts` y `en.ts`
- [ ] ¿La tarifa del examen oficial de Cambridge está incluida o la paga el estudiante? (`certification.examFee`). Hoy la web dice solo que la **preparación** es gratis y que el examen se rinde en un centro autorizado por Cambridge English
- [ ] ¿Se cobra la pensión de $60 en el mes 13 o el mes completo es parte del bono? (fila `Pensión del mes 13`)

## Campaña "Mes Gratis" — `src/config/campaign.ts`
- [ ] Fecha de cierre de la campaña. Para apagarla: `active: false` (se ocultan la franja superior y el pop-up, y los leads dejan de llevar `campaign`)
- [ ] En n8n, usar el campo nuevo `campaign` (`mes-gratis`) para etiquetar el lead o el asunto del correo

## Contacto y marca — `src/config/site.ts`
- [ ] URLs de Instagram, Facebook y TikTok (`social`). El cliente las tiene pendientes (Guisepe)
- [ ] Logo en SVG o PNG transparente: el actual es `public/imgs/logo_oficial.jpg` sobre fondo blanco. Debe subirse a la carpeta de Drive del cliente
- [ ] Favicon: hoy se genera desde el logo (`public/favicon.png`)

## Entorno — `.env` (ver `.env.example`)
- [ ] `PUBLIC_SITE_URL`: dominio de producción. **Crítico para el SEO**: sin él no hay URLs absolutas en canonical/hreflang/Open Graph ni sitemap. El cliente no indicó si ya tiene dominio. Los demás pasos manuales de SEO (Search Console, Bing, Perfil de Empresa en Google, reseñas) están en [SEO.md](SEO.md#3-pasos-manuales-nadie-más-puede-hacerlo)

## Formulario — webhook n8n `correos-ecu593`
- [ ] Probar un envío real de punta a punta (llega el correo a ecu593english@gmail.com). El formulario envía `name`, `email`, `phone`, `program`, `campaign`, `source`, `lang`, `page` y `referrer` como `application/x-www-form-urlencoded`
- [ ] (Opcional) Activar CORS en el nodo Webhook de n8n (*Allowed Origins* con el dominio de la landing). Hoy el preflight `OPTIONS` responde 500, por eso el formulario usa `mode: 'no-cors'` y no puede leer la respuesta: solo detecta errores de red, no un fallo dentro de n8n

## Programas — `programs.items.*.duration` en `src/i18n/es.ts` y `en.ts`
- [ ] Duración o formato de Particulares, Conversación y Empresas
- [ ] Aprobación del cliente del banco de imágenes IA que ya está en `public/imgs/` (regular, particulares, conversación, corporativo, online). Ninguna puede mostrar al personal docente real
- [ ] `regular.jpg` muestra un aula presencial, pero las clases son 100% virtuales: conviene reemplazarla por una imagen IA de clase online

## Nivel B2 — `src/data/method.ts`
- [ ] Nivel MCER de los niveles 1 a 11 (`cefr`). El 12 ya figura como B2
- [ ] Contenido o temas de cada nivel: `method.levelContent` en `src/i18n/es.ts` y `en.ts`

## Calendario mensual (sección nueva, aún no construida)
- [ ] Niveles activos de cada mes. El cliente quiere mostrarlo y cambiarlo mes a mes; falta que envíe el primer calendario para definir el formato

## Horarios — `modalities.items.online.details` en `src/i18n/es.ts` y `en.ts`
- [ ] Plataforma de las clases (Zoom, Meet, etc.) y requisitos técnicos

## Inversión — `pricing.items` en `src/i18n/es.ts` y `en.ts`
- [ ] Formas de pago aceptadas

## Preguntas frecuentes — `faq.items` en `src/i18n/es.ts` y `en.ts`
- [ ] Prueba de ubicación o ingreso a un nivel superior para quien ya sabe inglés

## Testimonios — `src/data/testimonials.ts`
- [ ] Testimonios reales con permiso: nombre, rol y foto opcional. El cliente dice que puede conseguirlos. Mientras la lista esté vacía, la sección no se publica
