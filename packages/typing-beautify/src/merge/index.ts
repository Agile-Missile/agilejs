/**
 * This type utility merges two types, T and U, by excluding properties from T that are also present in U.
 * It then combines the remaining properties of T with all properties of U.
 *
 * @template T - The first type to merge.
 * @template U - The second type to merge.
 */
export type Merge<T, U> = Omit<T, keyof U> & U;
