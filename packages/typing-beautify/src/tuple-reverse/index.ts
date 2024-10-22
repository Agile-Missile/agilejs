/**
 * Reverses the order of elements in a tuple.
 *
 * @example
 * TupleReverse<['a', 'b', 'c']> // ['c', 'b', 'a']
 *
 * @param T - The tuple to reverse.
 * @returns The reversed tuple.
 */
export type TupleReverse<T extends any[]> = T extends [infer A, ...infer B]
  ? [...TupleReverse<B>, A]
  : T;
