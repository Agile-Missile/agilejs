/**
 * Generates a new type that marks the specified properties of a type as readonly.
 *
 * @template T The original type.
 * @template K The keys of the properties to be marked as readonly.
 * @returns A new type that excludes the specified properties from the original type and adds them back as readonly.
 */
export type MarkReadonly<T, K extends keyof T> = Omit<T, K> &
  Readonly<Pick<T, K>>;
