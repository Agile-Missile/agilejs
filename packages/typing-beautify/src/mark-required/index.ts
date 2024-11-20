/**
 * Generates a new type that marks the specified properties of a type as required.
 *
 * @template T The original type.
 * @template K The keys of the properties to be marked as required.
 * @returns A new type that includes all properties of the original type and marks the specified properties as required.
 */
export type MarkRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;
