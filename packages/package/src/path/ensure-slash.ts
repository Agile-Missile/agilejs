import { sep } from 'node:path';

/**
 * make sure the endfix slash as expect.
 * @param str path fragment
 * @param slashEndfix flag to indicates if we need keep last slash `/` or `\`
 * @param multiPlatform support multi platform. eg: `/` on linux, `\` on windows
 */
export const ensureSlash = (
  str: string,
  slashEndfix = false,
  multiPlatform = true
): string => {
  str = str.replace(/\/$/, '').replace(/\\$/, '');
  const sepStr = multiPlatform ? sep : '/';
  return slashEndfix ? str + sepStr : str;
};
