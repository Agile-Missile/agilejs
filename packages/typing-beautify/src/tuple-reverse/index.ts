/**
 * Reverses the order of elements in a tuple.
 *
 * @example
 * tupleReverse<['a', 'b', 'c']> // ['c', 'b', 'a']
 *
 * @param T - The tuple to reverse.
 * @returns The reversed tuple.
 */
export type tupleReverse<T extends any[]> = T extends [infer A, ...infer B]
  ? [...tupleReverse<B>, A]
  : T;
