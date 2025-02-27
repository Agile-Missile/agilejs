import type { CamelCase } from '../camel-case/index.js';

/**
 * Converts the keys of an object type to camel case.
 *
 * @template Type The type of the object to convert.
 */
export type DeepCamelCaseProperties<Type> = {
  [Key in keyof Type as CamelCase<Key>]: Type[Key] extends Record<
    string,
    unknown
  >
    ? DeepCamelCaseProperties<Type[Key]>
    : Type[Key];
};
