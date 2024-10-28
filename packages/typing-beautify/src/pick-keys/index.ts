import type { PickProperties } from '../pick-properties/index.js';

/**
 * This type utility picks the keys of a type that have a specific value type.
 *
 * @template Type - The type to pick keys from.
 * @template Value - The value type to filter keys by.
 */
export type PickKeys<Type, Value> = keyof PickProperties<Type, Value>;
