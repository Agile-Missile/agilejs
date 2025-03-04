/**
 * Retrieves the paths and segments from a given current working directory (cwd).
 *
 * @param cwd - The current working directory.
 * @returns An object containing the paths and segments.
 */
export const getPaths = (
  cwd: string
): {
  paths: string[];
  segments: string[];
} => {
  if (cwd === '/') return { paths: ['/'], segments: [''] };
  const parts = cwd.split(/(.*?[\\/]+)/);
  const paths = [cwd];
  const segments = [parts[parts.length - 1]];
  let part = parts[parts.length - 1];
  cwd = cwd.substring(0, cwd.length - part.length - 1);
  for (let i = parts.length - 2; i > 2; i -= 2) {
    paths.push(cwd);
    part = parts[i];
    cwd = cwd.substring(0, cwd.length - part.length) || '/';
    segments.push(part.slice(0, -1));
  }
  part = parts[1];
  segments.push(part);
  paths.push(part);
  return {
    paths: paths,
    segments: segments,
  };
};
