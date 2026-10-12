import type { Maybe } from '../lib/pending';

export type ProgramId = 'regular' | 'particulares' | 'conversacion' | 'corporativo';
export type ModalityId = 'online';
export type StampInk = 'flame' | 'sky' | 'violet' | 'navy';

/**
 * A photo slot. Without `src` it renders as an empty photo window describing the shot.
 * Never the real teaching staff: approved AI-generated images or external models only.
 */
export interface ImageRef {
  src?: string;
  alt: string;
  /** What the real photo should show; printed inside the empty window. */
  brief: string;
}

/** Language-neutral facts; copy lives in src/i18n. */
export interface Program {
  id: ProgramId;
  code: string;
  stampInk: StampInk;
  /** Path under /public, e.g. "/imgs/kids.jpg". Shared by every language. */
  photo?: string;
}

export interface Modality {
  id: ModalityId;
  stampInk: StampInk;
  photo?: string;
}

export interface Level {
  number: number;
  weekFrom: number;
  weekTo: number;
  cefr: Maybe<string>;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: ImageRef;
}
