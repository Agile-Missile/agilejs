import { AnyArray } from 'ts-essentials';

// This type takes a tuple type `T` and generates a union type where each element is a type in the tuple.
export type TupleToUnion<T> = T extends AnyArray<infer value> ? value : never;
