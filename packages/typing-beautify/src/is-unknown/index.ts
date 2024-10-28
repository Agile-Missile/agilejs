import type { IsAny } from '../is-any/index.js';

/**
 * Checks if a type is `unknown`.
 *
 * This type utility checks if a given type `T` is equivalent to `unknown`. It does this by first checking if `T` is `any` using the `IsAny` utility. If `T` is `any`, it resolves to `false`. Otherwise, it checks if `unknown` extends `T`. If `unknown` extends `T`, it resolves to `true`; otherwise, it resolves to `false`.
 *
 * @template T - The type to check.
 */
export type IsUnknown<Type> =
  IsAny<Type> extends true ? false : unknown extends Type ? true : false;
