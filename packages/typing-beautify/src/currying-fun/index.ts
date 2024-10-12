/**
 * A recursive type that converts a function parameter list into a curried form.
 *
 * @template Params The parameter list of the function.
 * @template Return The return type of the function.
 */
type CurriedFunc<Params extends unknown[], Return> = Params extends [
  infer A,
  ...infer B,
]
  ? (args: A) => CurriedFunc<B, Return>
  : true;

/**
 * A type that converts a function into a curried form.
 *
 * @template Func The function to be curried.
 * @returns The curried form of the function.
 */
export type CurringFun<Func> = Func extends (
  ...args: infer Params
) => infer Result
  ? Params['length'] extends 0
    ? () => true // If the function parameter list is empty, return a function that does not accept parameters
    : CurriedFunc<Params, Result> // Otherwise, return a curried function
  : never;
