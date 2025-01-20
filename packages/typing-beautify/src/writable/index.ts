/**
 * This type utility generates a new type that makes all properties of the original type writable.
 * It achieves this by removing the readonly modifier from all properties of the original type.
 *
 * @template Type - The original type to make writable.
 */
export type Writable<Type> = { -readonly [Key in keyof Type]: Type[Key] };
