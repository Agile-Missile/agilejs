import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import resolveDir from 'resolve-dir';

/**
 * Synchronously resolves the path to a file in the current working directory or its parent directories.
 * @param {string} cwd - The current working directory.
 * @param {string} filename - The name of the file to resolve.
 * @param {number} limit - The maximum number of directories to traverse. Defaults to Infinity.
 * @returns {string | undefined} The resolved path of the file, or undefined if the file is not found.
 */
export const resolveSync = (
  cwd: string,
  filename: string,
  limit: number = Infinity
): string | undefined => {
  let dir = resolve(cwd ? resolveDir(cwd) : '.');

  let depth = 0;
  let prev;
  do {
    const filepath = join(dir, filename);
    if (existsSync(filepath)) {
      return filepath;
    }
    depth++;
    prev = dir;
    dir = dirname(dir);
  } while (prev !== dir && depth <= limit);
};
