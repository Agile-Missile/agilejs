import { packageDirectory, packageDirectorySync } from 'pkg-dir';

/**
 * Finds the root directory of a Node.js project or npm package.
 *
 * @returns The project root path or `undefined` if it could not be found.
 *
 * @example
 *
 * ```
 * // /
 * // └── Users
 * //     └── sindresorhus
 * //         └── foo
 * //             ├── package.json
 * //             └── bar
 * //                 ├── baz
 * //                 └── example.js
 *
 * // example.js
 * import {packageDirectory} from 'pkg-dir';
 *
 * console.log(await packageDirectory());
 * //=> '/Users/sindresorhus/foo'
 * ```
 */
export const searchClosestPackageDir = async (
  options: { cwd?: string } = {}
): Promise<string | undefined> => {
  const { cwd = process.cwd() } = options;
  return packageDirectory({ cwd });
};

/**
 * Synchronously find the root directory of a Node.js project or npm package.
 *
 * @returns The project root path or `undefined` if it could not be found.
 *
 * @example
 *
 * ```
 * // /
 * // └── Users
 * //     └── sindresorhus
 * //         └── foo
 * //             ├── package.json
 * //             └── bar
 * //                 ├── baz
 * //                 └── example.js
 *
 * // example.js
 * import {packageDirectorySync} from 'pkg-dir';
 *
 * console.log(packageDirectorySync());
 * //=> '/Users/sindresorhus/foo'
 * ```
 */
export const searchClosestPackageDirSync = (
  options: { cwd?: string } = {}
): string | undefined => {
  const { cwd = process.cwd() } = options;
  return packageDirectorySync({ cwd });
};
