import ansiEscapes from 'ansi-escapes';
import supportsHyperlinks from 'supports-hyperlinks';
import { TypeLinkOptions } from './types/type-link.js';

/**
 * Generate a terminal link.
 * @param {string} text - The text to display.
 * @param {string} url - The URL to link to.
 * @param {TypeLinkOptions} options - The options for the link.
 * @returns {string} The terminal link.
 */
export const terminalLink = (
  text: string,
  url: string,
  { target = 'stdout', ...options }: TypeLinkOptions = {}
) => {
  if (!supportsHyperlinks[target]) {
    if (options.fallback === false) {
      return text;
    }

    return typeof options.fallback === 'function'
      ? options.fallback(text, url)
      : `${text} (\u200B${url}\u200B)`;
  }

  return ansiEscapes.link(text, url);
};

/**
 * Check if terminal link is supported.
 * @type {boolean}
 */
terminalLink.isSupported = supportsHyperlinks.stdout;

/**
 * Generate a terminal link for stderr.
 * @param {string} text - The text to display.
 * @param {string} url - The URL to link to.
 * @param {TypeLinkOptions} options - The options for the link.
 * @returns {string} The terminal link for stderr.
 */
terminalLink.stderr = (
  text: string,
  url: string,
  options: TypeLinkOptions = {}
) => terminalLink(text, url, { target: 'stderr', ...options });

/**
 * Check if terminal link for stderr is supported.
 * @type {boolean}
 */
terminalLink.stderr['isSupported'] = supportsHyperlinks.stderr;

/**
 * Generates a terminal link with the specified text and URL.
 *
 * @param {string} text - The text to display for the link.
 * @param {string} url - The URL to link to.
 * @returns {string} The generated terminal link.
 */
export const getTerminalLink = (text: string, url: string): string => {
  return terminalLink(text, url);
};
