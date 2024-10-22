/**
 * Checks if a type is `any`.
 *
 * This type utility checks if a given type `T` is equivalent to `any`. It does this by using a conditional type to compare `T` with `any`. If `T` is `any`, the type resolves to `true`; otherwise, it resolves to `false`.
 *
 * @template T - The type to check.
 */
export type IsAny<T> = 0 extends 1 & T ? true : false;
