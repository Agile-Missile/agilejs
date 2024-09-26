import type { PackageJson } from 'type-fest';
import { LogLevel } from '@armit/logger';

type ArgvPrimitive = string | number | boolean | Record<string, unknown>;

type ArgvConfig = Record<string, ArgvPrimitive | Array<ArgvPrimitive>>;

export type CommandArgv<T extends ArgvConfig = ArgvConfig> = {
  /**
   * The name of runing command
   */
  name: string;
  /**
   * The cli package json parsed from `package.json`
   */
  packageJson: PackageJson;
  /**
   * The actived logging level
   * @default 'Info'
   */
  logLevel: keyof typeof LogLevel;
  /**
   * Removes colors from the console output
   * @default false
   */
  noColor: boolean;
} & T;
