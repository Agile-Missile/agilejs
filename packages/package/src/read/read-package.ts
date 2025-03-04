import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { PackageJson } from 'type-fest';

/**
 * Reads the package information from a given package file path.
 *
 * @param {string} packagePath - The path to the package file.
 * @returns {PackageJson | undefined} The package information, or undefined if the package file does not exist.
 */
export const readPackage = (packagePath: string): PackageJson | undefined => {
  let pkgPath = packagePath;

  if (!packagePath.endsWith('package.json')) {
    pkgPath = join(packagePath, 'package.json');
  }

  if (!existsSync(pkgPath)) {
    return undefined;
  }

  try {
    const pkgJson = readFileSync(pkgPath, 'utf-8');
    return JSON.parse(pkgJson) as PackageJson;
  } catch {
    return undefined;
  }
};
