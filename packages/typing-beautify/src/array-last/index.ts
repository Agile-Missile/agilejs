import { AnyArray } from 'ts-essentials';

/**
 * Extracts the last element of an array.
 *
 * @template T The array type.
 * @returns The last element of the array, or `never` if the array is empty.
 */
export type ArrayLast<T extends AnyArray> = T extends [...infer _, infer last]
  ? last
  : never;
