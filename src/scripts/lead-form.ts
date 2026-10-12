import { submitLead, type LeadInput } from '../lib/leads';
import type { Dictionary } from '../i18n/types';

type Messages = Dictionary['form']['client'];

/** Fills {placeholders} in a localized message. */
const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? '');

const vars = (lead: LeadInput): Record<string, string> => ({
  ...lead,
  program: lead.program ?? '',
  campaign: lead.campaign ?? '',
});

/** Ecuadorian mobile numbers: 09XXXXXXXX. */
const PHONE_PATTERN = /^09\d{8}$/;

const form = document.querySelector<HTMLFormElement>('[data-lead-form]');

if (form) {
  const webhookUrl = form.dataset.webhookUrl ?? '';
  const whatsappNumber = form.dataset.whatsapp ?? '';
  const messages = JSON.parse(form.dataset.messages ?? '{}') as Messages;
  const status = form.querySelector<HTMLElement>('[data-form-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const programSelect = form.querySelector<HTMLSelectElement>('select[name="program"]')!;
  const phoneInput = form.querySelector<HTMLInputElement>('input[name="phone"]')!;

  // Program CTAs elsewhere on the page preselect the program.
  document.querySelectorAll<HTMLAnchorElement>('[data-program]').forEach((link) => {
    link.addEventListener('click', () => {
      programSelect.value = link.dataset.program ?? '';
    });
  });

  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
    phoneInput.setCustomValidity('');
  });

  const read = (): LeadInput => {
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? '');
    return {
      name: value('name'),
      email: value('email'),
      phone: value('phone'),
      program: value('program'),
      campaign: value('campaign'),
    };
  };

  const whatsappFallback = (lead: LeadInput) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fill(messages.whatsappFallback, vars(lead)))}`;

  const setState = (state: 'idle' | 'sending' | 'success' | 'error', ...message: (string | Node)[]) => {
    form.dataset.state = state;
    submit.disabled = state === 'sending';
    status.replaceChildren(...message);
  };

  const strong = (text: string) => Object.assign(document.createElement('strong'), { textContent: text });
  const link = (href: string, text: string) =>
    Object.assign(document.createElement('a'), { href, textContent: text, target: '_blank', rel: 'noopener' });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!PHONE_PATTERN.test(phoneInput.value)) {
      phoneInput.setCustomValidity(messages.phoneInvalid);
    }
    if (!form.reportValidity()) return;

    const lead = read();
    setState('sending', messages.sending);
    const result = await submitLead(webhookUrl, lead, document.documentElement.lang);

    if (result.ok) {
      setState(
        'success',
        strong(fill(messages.success, vars(lead))),
        fill(messages.successDetail, vars(lead)),
      );
      form.reset();
      return;
    }

    setState(
      'error',
      messages.error,
      link(whatsappFallback(lead), messages.errorLink),
      messages.errorTail,
    );
  });
}
