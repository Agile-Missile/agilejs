import type { Paths } from '../paths/index.js';
import type { PrettifyRecord } from '../prettify-record/index.js';

// TODO: merge to ExtractFromArray
type ExtractFromObject<
  Obj extends Record<PropertyKey, unknown>,
  Key,
> = Key extends keyof Obj
  ? Obj[Key]
  : Key extends keyof NonNullable<Obj>
    ? NonNullable<Obj>[Key] | undefined
    : undefined;

// TODO: merge to ExtractFromObject
type ExtractFromArray<Arr extends readonly any[], Key> = any[] extends Arr
  ? Arr extends readonly (infer T)[]
    ? T | undefined
    : undefined
  : Key extends keyof Arr
    ? Arr[Key]
    : undefined;

type GetWithArray<
  Type,
  Path,
  PrettifiedType = PrettifyRecord<Type>,
> = Path extends []
  ? Type
  : Path extends [infer Key, ...infer Rest]
    ? PrettifiedType extends Record<PropertyKey, unknown>
      ? GetWithArray<ExtractFromObject<PrettifiedType, Key>, Rest>
      : Type extends readonly any[]
        ? GetWithArray<ExtractFromArray<Type, Key>, Rest>
        : undefined
    : never;

type Path<Type> = Type extends `${infer Key}.${infer Rest}`
  ? [Key, ...Path<Rest>]
  : Type extends `${infer Key}`
    ? [Key]
    : [];

/**
 * Extracts the value at a given path from a type.
 *
 * @param Type - The type from which to extract the value.
 * @param StringPath - The path as a string to the value to be extracted.
 *
 * @returns The value at the specified path within the given type.
 */
export type PathValue<Type, StringPath extends Paths<Type>> = GetWithArray<
  Type,
  Path<StringPath>
>;
