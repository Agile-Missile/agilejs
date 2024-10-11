// This is a type that appends a new property to an object.
// It takes three type parameters:
// - T: the type of the original object
// - K: the name of the new property
// - V: the type of the new property
export type AppendToObject<T, K extends string, V> = {
  // For each property P in the original object or the new property name,
  // if P is a property in the original object, use its type,
  // otherwise, use the type of the new property.
  [P in keyof T | K]: P extends keyof T ? T[P] : V;
};
