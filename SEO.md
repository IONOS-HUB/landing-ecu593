# SEO, GEO y AEO: estrategia de Ecu593 English

Objetivo: aparecer cuando alguien en Ecuador busca una academia o un curso de inglés online, tanto en Google y Bing (**SEO**) como en las respuestas de ChatGPT, Gemini, Perplexity, Copilot y Claude (**GEO**, *Generative Engine Optimization*), y como respuesta directa en fragmentos destacados y asistentes de voz (**AEO**, *Answer Engine Optimization*).

Fecha de esta versión: 12-10-2026.

## 1. Estrategia de palabras clave

### La realidad del mercado

Las búsquedas principales ("academia de inglés online Ecuador", "curso de inglés virtual Ecuador") las dominan directorios, marcas internacionales con años de autoridad y universidades. Un sitio nuevo tarda meses en competir ahí. En cambio, **casi no hay contenido ecuatoriano** para búsquedas más específicas y con intención clara. Ahí ganamos primero, y esos artículos le pasan autoridad a la portada con enlaces internos.

> Nota: no tenemos acceso a herramientas de volumen de búsqueda (Ahrefs, Semrush, Keyword Planner). La priorización sale del análisis de qué aparece hoy en los resultados y de la intención de compra. Cuando el sitio tenga Search Console, se ajusta con datos reales de impresiones.

### Mapa de palabras clave → página

| Prioridad | Grupo de búsquedas | Dificultad | Intención | Página |
| --- | --- | --- | --- | --- |
| 1 | inglés B1 para graduarse en Ecuador · requisito de inglés para titularse · suficiencia B1 CES | Baja | Necesidad urgente → compra | [/blog/ingles-b1-para-graduarse-ecuador/](src/content/blog/ingles-b1-para-graduarse-ecuador.md) |
| 1 | examen Cambridge B2 First Ecuador · preparación FCE online Ecuador · puntaje B2 First | Baja | Investigación → compra (gancho del mes 13) | [/blog/examen-cambridge-b2-first-guia/](src/content/blog/examen-cambridge-b2-first-guia.md) |
| 1 | clases de inglés online en la noche · inglés solo sábados · curso de inglés si trabajo | Baja | Compra | [/blog/clases-de-ingles-online-si-trabajas/](src/content/blog/clases-de-ingles-online-si-trabajas.md) |
| 2 | mejor curso de inglés online Ecuador · cómo elegir curso de inglés | Media | Comparación → compra | [/blog/como-elegir-curso-de-ingles-online-ecuador/](src/content/blog/como-elegir-curso-de-ingles-online-ecuador.md) |
| 2 | nivel de inglés en Ecuador · ranking EF Ecuador | Baja–media | Informativa; atrae enlaces de prensa | [/blog/nivel-de-ingles-en-ecuador/](src/content/blog/nivel-de-ingles-en-ecuador.md) |
| 3 | niveles de inglés A1 A2 B1 B2 C1 C2 · qué es nivel B2 | Alta (todo el mundo hispano) | Informativa | [/blog/niveles-de-ingles-mcer-a1-c2/](src/content/blog/niveles-de-ingles-mcer-a1-c2.md) |
| Largo plazo | academia de inglés online Ecuador · curso de inglés virtual Ecuador · clases de inglés online Ecuador | Alta | Compra | Portada `/` |
| Marca | Ecu593 English · Ecu593 · primer mes gratis inglés | Baja | Navegacional | Portada `/` |

### Próximos artículos (2 al mes)

Cada uno verificado con fuentes antes de publicar:

1. **B1 Preliminary vs. B2 First: ¿cuál te conviene?** (estudiantes que solo necesitan B1).
2. **Inglés para posgrado y maestrías en Ecuador**: qué nivel piden los programas. Investigar requisitos reales.
3. **Cuánto cuesta rendir el Cambridge en Ecuador**: solo con precios confirmados por los centros autorizados.
4. **Inglés para entrevistas de trabajo**: frases y preparación (atrae a profesionales).
5. **Inglés para becas**: requisitos de idioma de becas abiertas a ecuatorianos, con fuente oficial.
6. **Calendario mensual de niveles**: cuando el cliente lo envíe (ver PENDIENTES.md), página propia que se actualiza cada mes.

**No hacer:** páginas casi iguales por ciudad ("curso de inglés en Quito", "en Guayaquil"…). Google las trata como *doorway pages* y penaliza. La señal local ya está en el contenido (Ecuador, CES, provincias, horario de Ecuador) y en los datos estructurados.

## 2. Qué está implementado

### SEO técnico

- `<title>` y meta description por página con la palabra clave al inicio; portada: "Academia de inglés online en Ecuador | Ecu593 English".
- H1 de la portada con la línea "Academia de inglés online en Ecuador" sobre el titular creativo.
- `canonical`, `hreflang` (es-EC, en, x-default) solo en las páginas que existen en ambos idiomas; el blog es solo en español.
- Open Graph y Twitter Cards en todas las páginas; `article:published_time` y `modified_time` en los artículos.
- `robots` con `max-snippet:-1` y `max-image-preview:large` (Google puede usar fragmentos largos e imágenes grandes).
- `sitemap-index.xml` con todas las páginas (requiere `PUBLIC_SITE_URL`) y RSS del blog en `/blog/rss.xml`.
- Enlazado interno: la portada enlaza a las guías (sección "Guías para tu inglés", menú y pie de página); cada guía enlaza a otras guías y a la portada (`/#metodo`, `/#mes-13`, `/#solicitud`).
- Sitio estático (Astro): HTML completo sin depender de JavaScript, rápido en móvil.

### Datos estructurados (JSON-LD)

- **Organización** (`EducationalOrganization` + `OnlineBusiness`) con el mismo `@id` en todas las páginas: país atendido, idiomas, temas, contacto por WhatsApp 24/7. Las redes sociales entran en `sameAs` en cuanto se completen.
- **Course** por programa. El curso regular tiene el set completo que Google usa para los resultados de cursos: oferta ($60/mes, suscripción), dos `CourseInstance` online (lunes a viernes 1 h diaria o sábados 5 h, 5 h por semana), nivel A1–B2, duración de 13 meses y el diploma que otorga.
- **FAQPage** en la portada y en cada guía.
- **BlogPosting** con autor, fechas, fuentes citadas (`citation`), `abstract` (la respuesta rápida) y `speakable`.
- **BreadcrumbList** en el blog.

### GEO (motores generativos)

- `robots.txt` permite explícitamente a los rastreadores de IA: GPTBot, OAI-SearchBot y ChatGPT-User (ChatGPT), ClaudeBot, Claude-SearchBot y Claude-User (Claude), PerplexityBot y Perplexity-User, Google-Extended (Gemini), Applebot-Extended, Amazonbot, meta-externalagent y CCBot.
- `/llms.txt` (estándar llmstxt.org): resumen de la academia, datos clave y enlaces a todas las guías.
- `/llms-full.txt`: todo el contenido del sitio en texto plano, que es lo más fácil de leer y citar para un modelo de IA.
- Cada guía cita fuentes oficiales (CES, Cambridge English, EF) y da cifras exactas: los motores generativos prefieren citar contenido verificable y específico.

### AEO (respuestas directas)

- Cada guía abre con una **"Respuesta rápida"** de 40–60 palabras que responde la pregunta completa. Es el formato que Google usa en fragmentos destacados y que los asistentes leen en voz alta.
- Preguntas frecuentes al final de cada guía, con respuestas cortas y autocontenidas.
- Tablas para datos comparables (niveles, partes del examen, horarios): los buscadores las extraen tal cual.

## 3. Pasos manuales (nadie más puede hacerlos)

En orden de impacto:

1. **Dominio propio y `PUBLIC_SITE_URL`** (crítico). Sin dominio, las URLs absolutas, el canonical y el sitemap apuntan a `*.vercel.app` o no existen. Configúralo en Vercel → Settings → Domains y en la variable `PUBLIC_SITE_URL`, y haz *Redeploy*.
2. **Google Search Console.** Verifica el dominio, envía `https://<dominio>/sitemap-index.xml` y pide la indexación de la portada y de cada guía.
3. **Bing Webmaster Tools.** Importa el sitio desde Search Console y envía el sitemap. Bing alimenta Copilot y es una de las fuentes de la búsqueda de ChatGPT, así que **es clave para GEO**.
4. **Perfil de Empresa en Google.** Es lo que más pesa en "academia de inglés" con intención local. Como las clases son 100% online, se registra como negocio de área de servicio (dirección oculta). Google exige una dirección real para verificar: confirmar con el cliente.
5. **Redes sociales.** Completar Instagram, Facebook y TikTok en `src/config/site.ts`: entran solas en `sameAs` y refuerzan la entidad de marca.
6. **Reseñas reales en Google** de los primeros estudiantes, pedidas con permiso. Nunca reseñas inventadas.
7. **Enlaces y menciones:**
   - pedir alta en directorios de escuelas de idiomas que listan academias de Ecuador, incluidas las online;
   - nota de prensa del lanzamiento a medios locales;
   - ofrecer la guía del requisito B1 a asociaciones estudiantiles y departamentos de vinculación;
   - el artículo del ranking EF es el más citable por periodistas.

## 4. Cómo medir

- **Search Console:** impresiones y posición por consulta, cada semana durante los primeros 3 meses. Si una guía tiene muchas impresiones y pocos clics, mejorar su título y descripción.
- **Tráfico desde IA:** en la analítica, filtrar las visitas que llegan desde `chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com` y `gemini.google.com`.
- **Prueba mensual en asistentes:** preguntar a ChatGPT, Perplexity y Gemini cosas como "academia de inglés online en Ecuador con preparación Cambridge" o "¿qué nivel de inglés necesito para graduarme en Ecuador?", y anotar si citan a Ecu593.
- **Conversiones:** cada lead llega con `referrer`, la página de donde vino el visitante (por ejemplo, la guía que leyó antes de ir al formulario), así que se sabe qué guía generó cada lead.

## 5. Cómo publicar una guía nueva

1. Crea `src/content/blog/<slug>.md`; el nombre del archivo es la URL.
2. Llena el encabezado: `title`, `description`, `keyword`, `answer`, `publishedAt`, `faq` y `sources`. Si te falta un campo obligatorio, el build falla.
3. Cada cifra o requisito debe tener su fuente en `sources`. Si no hay fuente, no se publica.
4. Enlaza al menos a dos guías existentes y a una sección de la portada.
5. `npm run build`: la guía aparece sola en el blog, el sitemap, el RSS, `llms.txt` y `llms-full.txt`.
