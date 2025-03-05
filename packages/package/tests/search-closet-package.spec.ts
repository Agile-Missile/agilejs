import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readPackage } from '../src/index.js';
import {
  searchClosestPackageDir,
  searchClosestPackageDirSync,
} from '../src/search/search-closest-package-dir.js';

describe('searchClosestPackageDir', () => {
  it('default cwd is process.cwd()', async () => {
    const pkgDir = await searchClosestPackageDir();
    expect(pkgDir).toBe(process.cwd());
  });

  it('cwd can be specified', async () => {
    const projectCwd = fileURLToPath(import.meta.url);
    const pkgDir = await searchClosestPackageDir({
      cwd: projectCwd,
    });
    expect(pkgDir).toBe(process.cwd());
  });

  it('supports monorepo', async () => {
    const projectCwd = resolve(process.cwd(), '../../');
    const pkgDir = await searchClosestPackageDir({
      cwd: projectCwd,
    });

    expect(pkgDir).toBeDefined();
    const pkgInfo = readPackage(pkgDir!);
    expect(pkgInfo).toBeDefined();
    expect(pkgInfo!.name).toBe('agilejs-monorepo');
  });

  it('default cwd is process.cwd(): Sync', () => {
    const pkgDir = searchClosestPackageDirSync();
    expect(pkgDir).toBe(process.cwd());
  });

  it('cwd can be specified: Sync', () => {
    const projectCwd = fileURLToPath(import.meta.url);
    const pkgDir = searchClosestPackageDirSync({
      cwd: projectCwd,
    });
    expect(pkgDir).toBe(process.cwd());
  });

  it('supports monorepo: Sync', () => {
    const projectCwd = resolve(process.cwd(), '../../');
    const pkgDir = searchClosestPackageDirSync({
      cwd: projectCwd,
    });

    expect(pkgDir).toBeDefined();
    const pkgInfo = readPackage(pkgDir!);
    expect(pkgInfo).toBeDefined();
    expect(pkgInfo!.name).toBe('agilejs-monorepo');
  });
});
