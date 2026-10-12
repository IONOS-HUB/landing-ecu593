/**
 * Launch campaign "Mes Gratis" (client brief, 12-10-2026): the first month is free.
 * While `active` is true the page shows the top banner and the one-time pop-up, and every
 * lead sent from the form carries `campaign: id` so n8n can tag it.
 * Turn it off by setting `active: false`; the copy lives in src/i18n (campaign).
 */
export const campaign = {
  id: 'mes-gratis',
  active: true,
  /** The pop-up opens once per visitor, after this many seconds or half the page scrolled. */
  dialogDelaySeconds: 25,
};
