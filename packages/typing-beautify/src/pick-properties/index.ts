/**
 * This type utility picks the properties of a type that have a specific value type.
 *
 * @template Type - The type to pick properties from.
 * @template Value - The value type to filter properties by.
 */
export type PickProperties<Type, Value> = {
  [Key in keyof Type as Type[Key] extends Value ? Key : never]: Value;
};
