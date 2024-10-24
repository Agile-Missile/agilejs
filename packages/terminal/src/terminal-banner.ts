import cfonts from 'cfonts';
import type { TerminalBannerOptions } from './types/type-banner.js';

/**
 * Generates a terminal banner with the specified text and options.
 *
 * @param {string} text - The text to display in the banner.
 * @param {TerminalBannerOptions} options - The options for customizing the banner.
 * @param {boolean} [debug] - Optional flag to enable debug mode.
 */
export const terminalBanner = (
  text: string,
  options: Partial<TerminalBannerOptions>,
  debug?: boolean
) => {
  cfonts.say(text, { ...options, env: 'node' }, debug);
};
