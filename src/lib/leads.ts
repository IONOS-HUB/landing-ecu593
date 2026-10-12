/**
 * Sends a lead to the n8n webhook (site.leadWebhookUrl), which emails it to the school.
 *
 * The webhook does not answer CORS preflight, so the lead goes as a "simple" request:
 * form-urlencoded body and `mode: 'no-cors'`. The response is opaque, so a resolved fetch
 * counts as delivered and only a network error counts as a failure.
 */

export interface LeadInput {
  name: string;
  email: string;
  phone: string;
  program?: string;
  /** Active campaign id (src/config/campaign.ts), e.g. "mes-gratis". */
  campaign?: string;
}

export type LeadResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'network'; detail?: string };

const toPayload = (input: LeadInput, lang: string) =>
  new URLSearchParams({
    name: input.name.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    program: input.program?.trim() ?? '',
    campaign: input.campaign ?? '',
    source: 'landing',
    lang,
    page: location.href,
    // The page the visitor came from (e.g. a blog guide), to know which content brings leads.
    referrer: document.referrer,
  });

export async function submitLead(webhookUrl: string, input: LeadInput, lang: string): Promise<LeadResult> {
  if (!webhookUrl) return { ok: false, reason: 'not-configured' };

  try {
    await fetch(webhookUrl, { method: 'POST', mode: 'no-cors', body: toPayload(input, lang) });
    return { ok: true };
  } catch (error) {
    return { ok: false, reason: 'network', detail: String(error) };
  }
}
