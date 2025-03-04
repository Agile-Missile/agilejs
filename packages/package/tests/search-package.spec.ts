import { join, resolve } from 'node:path';
import { searchPackageDir } from '../src/index.js';

describe('searchPackageDir', () => {
  it('should return the path to the package directory when monorepo', () => {
    const projectCwd = process.cwd();
    const pkgDir = searchPackageDir('@agilejs/logger', {
      cwd: projectCwd,
    });
    expect(pkgDir).toBe(resolve(projectCwd, '../logger'));
  });

  it('should return the path to the package directory when building a package', () => {
    const projectCwd = process.cwd();
    const pkgDir = searchPackageDir('node:path', {
      cwd: projectCwd,
    });
    expect(pkgDir).toBeUndefined();
  });

  it('should return the path to the package directory use native node modules', () => {
    const projectCwd = process.cwd();
    const pkgDir = searchPackageDir('type-fest', {
      cwd: projectCwd,
    });
    expect(pkgDir).toBe(join(projectCwd, '/node_modules/type-fest'));
  });
});
