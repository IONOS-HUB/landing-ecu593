import type { Program } from './types';

/**
 * Add `photo: '/imgs/<file>'` per program. Copy lives in src/i18n.
 * Image rule (client brief, 12-10-2026): never use photos or video of the real teaching staff.
 * People shown must be AI-generated images approved by the client, or paid external models.
 */
export const programs: Program[] = [
  { id: 'regular', code: 'B2', stampInk: 'flame', photo: '/imgs/regular.jpg' },
  { id: 'particulares', code: 'P', stampInk: 'sky', photo: '/imgs/particulares.jpg' },
  { id: 'conversacion', code: 'C', stampInk: 'violet', photo: '/imgs/conversacion.jpg' },
  { id: 'corporativo', code: 'E', stampInk: 'navy', photo: '/imgs/corporativo.jpg' },
];
