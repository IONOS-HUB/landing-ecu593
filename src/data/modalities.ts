import type { Modality } from './types';

/**
 * Classes are 100% online. Copy lives in src/i18n.
 * Same image rule as programs.ts: no photos of the real teaching staff, only approved AI images or external models.
 */
export const modalities: Modality[] = [{ id: 'online', stampInk: 'sky', photo: '/imgs/online.jpg' }];
