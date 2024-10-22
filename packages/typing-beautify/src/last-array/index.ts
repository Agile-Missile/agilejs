import { AnyArray } from '../any-array/index.js';

/**
 * Extracts the last element of an array.
 *
 * @template T The array type.
 * @returns The last element of the array, or `never` if the array is empty.
 */
export type LastArray<T extends AnyArray> = T extends [...infer _, infer last]
  ? last
  : never;
