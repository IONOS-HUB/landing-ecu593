/**
 * Launch campaign UI (src/config/campaign.ts): the dismissible top ribbon and the one-time pop-up.
 *
 * The pop-up opens once per visitor and campaign, after `data-delay` seconds or once half the page
 * has been scrolled, whichever comes first. It stays closed while the lead form is on screen or
 * already sent, so it never interrupts someone who is converting.
 */

const store = {
  get: (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Private mode or blocked storage: the ribbon/pop-up simply come back next visit.
    }
  },
};

const bar = document.querySelector<HTMLElement>('[data-campaign-bar]');
if (bar) {
  const key = `ecu593:${bar.dataset.campaignId}:bar`;
  const close = bar.querySelector<HTMLButtonElement>('[data-campaign-close]')!;
  close.hidden = false;
  close.addEventListener('click', () => {
    bar.hidden = true;
    store.set(key, 'closed');
  });
}

const dialog = document.querySelector<HTMLDialogElement>('[data-campaign-dialog]');
const seenKey = dialog ? `ecu593:${dialog.dataset.campaignId}:dialog` : '';

if (dialog && typeof dialog.showModal === 'function' && store.get(seenKey) !== 'seen') {
  const form = document.querySelector<HTMLFormElement>('[data-lead-form]');
  const formSection = form?.closest('section');
  let formOnScreen = false;

  if (formSection) {
    new IntersectionObserver(([entry]) => {
      formOnScreen = entry.isIntersecting;
    }).observe(formSection);
  }

  const busy = () =>
    formOnScreen ||
    form?.dataset.state === 'success' ||
    form?.dataset.state === 'sending' ||
    document.activeElement?.matches('input, select, textarea') ||
    document.querySelector('dialog[open]') !== null;

  const cleanup = () => {
    window.clearTimeout(timer);
    window.removeEventListener('scroll', onScroll);
  };

  const open = () => {
    if (busy()) return false;
    cleanup();
    store.set(seenKey, 'seen');
    dialog.showModal();
    return true;
  };

  const onScroll = () => {
    const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    if (scrolled >= 0.5) open();
  };

  // If the timer fires while the visitor is busy, the scroll trigger still gets its turn later.
  const timer = window.setTimeout(open, Number(dialog.dataset.delay ?? 25) * 1000);
  window.addEventListener('scroll', onScroll, { passive: true });

  // The CTA closes the pop-up and lets the #solicitud link scroll to the form.
  dialog.querySelector('[data-campaign-go]')?.addEventListener('click', () => dialog.close('go'));

  // Click on the backdrop closes it too.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close('dismiss');
  });
}
