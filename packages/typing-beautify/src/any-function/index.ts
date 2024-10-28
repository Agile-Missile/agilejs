/**
 * Represents a function that takes any number of arguments of any type and returns a value of any type.
 *
 * @template Args - The types of the arguments the function accepts.
 * @template ReturnType - The type of the value returned by the function. Defaults to `any`.
 */
export type AnyFunction<Args extends any[] = any[], ReturnType = any> = (
  ...args: Args
) => ReturnType;
