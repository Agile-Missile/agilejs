import { AnyArray } from 'ts-essentials';

/**
 * Extracts the first element of an array.
 *
 * @template T The array type.
 * @returns The first element of the array, or `never` if the array is empty.
 */
export type FirstArray<T extends AnyArray> = T extends [infer first, ...infer _]
  ? first
  : never;
