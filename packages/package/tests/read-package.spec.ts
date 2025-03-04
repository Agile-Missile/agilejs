import { readPackage, searchPackageDir } from '../src/index.js';

describe('readPackage', () => {
  it('should return the package information', () => {
    const projectCwd = process.cwd();
    const pkgDir = searchPackageDir('@agilejs/logger', {
      cwd: projectCwd,
    });
    expect(pkgDir).toBeDefined();
    const pkgInfo = readPackage(pkgDir!);
    expect(pkgInfo).toBeDefined();
    expect(pkgInfo?.name).toBe('@agilejs/logger');
  });

  it('should return undefined if the package file does not exist', () => {
    const pkgInfo = readPackage('nonexistent');
    expect(pkgInfo).toBeUndefined();
  });
});
