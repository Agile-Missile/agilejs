import type { Merge } from '../merge/index.js';

type _MergeTuple<T extends readonly any[], Result> = T extends [
  infer Head,
  ...infer Tail,
]
  ? _MergeTuple<Tail, Merge<Result, Head>>
  : Result;

/**
 * This type utility merges a tuple of types into a single type.
 *
 * @template T - The tuple of types to merge.
 */
export type MergeTuple<T extends readonly any[]> = _MergeTuple<T, {}>;
