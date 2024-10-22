/**
 * Filters elements from a tuple based on a given type.
 *
 * @example
 * TupleFilter<['a', 'b', 'c'], 'a'> // ['a']
 * TupleFilter<[1, 2, 3], number> // [1, 2, 3]
 * TupleFilter<[1, 'a', true], number | string> // [1, 'a']
 *
 * @param T - The tuple to filter.
 * @param F - The type to filter by.
 * @returns A new tuple containing only the elements that extend the given type.
 */
export type TupleFilter<T extends any[], F> = T extends [infer A, ...infer B]
  ? [A] extends [F]
    ? TupleFilter<B, F>
    : [A, ...TupleFilter<B, F>]
  : [];
