import { realpathSync } from 'node:fs';
import { basename, dirname, resolve } from 'node:path';
import { resolveSync } from '../helpers/helper-find-pkg.js';
import { getPaths } from '../helpers/helper-get-paths.js';

/**
 * Searches for a package in the current working directory or its parent directories.
 *
 * @param {string} pkgName - The name of the package to search for.
 * @param {Object} options - Options for the search.
 * @param {string} options.cwd - The current working directory. Defaults to the current process working directory.
 * @param {number} options.depth - The maximum depth to search. Defaults to Infinity.
 * @returns {(string | undefined)} The path to the package directory, or undefined if the package is not found.
 */
export const searchPackageDir = (
  pkgName: string,
  options: { cwd?: string; depth?: number } = {}
): string | undefined => {
  const projectCwd = options.cwd || process.cwd();

  const { paths = [] } = getPaths(projectCwd);
  for (const path of paths) {
    let cwd = path;
    if (basename(cwd) === 'package.json') {
      cwd = dirname(cwd);
    }
    if (!~cwd.indexOf('node_modules')) {
      cwd = resolve(cwd, 'node_modules');
    }

    const pkgPath = resolveSync(cwd, `${pkgName}/package.json`, options.depth);

    if (pkgPath) {
      return dirname(realpathSync(pkgPath));
    }
  }
  return undefined;
};
