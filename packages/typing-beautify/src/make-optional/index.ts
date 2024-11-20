/**
 * Generates a new type that makes the specified properties of a type optional.
 *
 * @template T The original type.
 * @template K The keys of the properties to be made optional.
 * @returns A new type that includes all properties of the original type and makes the specified properties optional.
 */
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
