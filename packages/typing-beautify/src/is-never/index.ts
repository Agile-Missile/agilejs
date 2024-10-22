/**
 * Checks if a type is `never`.
 *
 * This type utility checks if a given type `T` is equivalent to `never`. It does this by using a conditional type to compare `T` with `never`. If `T` is `never`, the type resolves to `true`; otherwise, it resolves to `false`.
 *
 * @template T - The type to check.
 */
export type IsNever<T> = [T] extends [never] ? true : false;
