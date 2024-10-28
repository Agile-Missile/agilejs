import type { IsNever } from '../is-never/index.js';

/**
 * Checks if a type is a tuple.
 *
 * This type utility checks if a given type `Type` is a tuple. It does this by first checking if `Type` is `never` using the `IsNever` utility. If `Type` is `never`, it resolves to `false`. Otherwise, it checks if `Type` is an array and if all its elements are of the same type. If `Type` is a tuple, it resolves to `true`; otherwise, it resolves to `false`.
 *
 * @template Type - The type to check.
 */
export type IsTuple<Type> =
  IsNever<Type> extends true
    ? false
    : Type extends readonly any[]
      ? any[] extends Type
        ? false
        : true
      : false;
