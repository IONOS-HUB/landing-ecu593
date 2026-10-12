import type { Testimonial } from './types';

/**
 * Real testimonials only, with the person's permission.
 * While this list is empty the section is hidden in production.
 * No teacher's face or name here (conflict of interest). A video recorded with external actors
 * is a dramatization, not a testimonial: it must be labelled as such and never listed here.
 */
export const testimonials: Testimonial[] = [];
