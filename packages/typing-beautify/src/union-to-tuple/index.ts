/**
 * Generates a tuple type from a union type.
 *
 * This type takes a union type `T` and generates a tuple type where each element is a type in the union.
 *
 * For example, `UnionToTuple<'a' | 'b'>` would generate the type `['a', 'b']`.
 */
type UnionToIntersection<T> = (
  T extends any ? (args: T) => any : never
) extends (args: infer R) => any
  ? R
  : never;

/**
 * Gets the last type in a union type.
 *
 * This type takes a union type `T` and returns the last type in the union.
 *
 * For example, `LastInUnion<'a' | 'b'>` would return the type `'b'`.
 */
type LastInUnion<T> =
  UnionToIntersection<T extends any ? (arg: T) => any : never> extends (
    arg: infer R
  ) => any
    ? R
    : never;

/**
 * Generates a tuple type from a union type.
 *
 * This type takes a union type `T` and generates a tuple type where each element is a type in the union.
 *
 * For example, `UnionToTuple<'a' | 'b'>` would generate the type `['a', 'b']`.
 */
export type UnionToTuple<T, U = T> = [T] extends [never]
  ? []
  : [LastInUnion<T>, ...UnionToTuple<Exclude<U, LastInUnion<T>>>];
