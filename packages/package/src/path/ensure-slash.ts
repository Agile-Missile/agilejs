import { sep } from 'node:path';

/**
 * make sure the endfix slash as expect.
 * @param str path fragment
 * @param slashEndfix flag to indicates if we need keep last slash `/` or `\`
 */
export const ensureSlash = (str: string, slashEndfix = false): string => {
  str = str.replace(/\/$/, '').replace(/\\$/, '');
  return slashEndfix ? str + sep : str;
};
