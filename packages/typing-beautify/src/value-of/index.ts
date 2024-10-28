import type { AnyArray } from '../any-array/index.js';
import type { AnyFunction } from '../any-function/index.js';
import type { Primitive } from '../primitive/index.js';

/**
 * This type utility extracts the value type of a type.
 *
 * @template Type - The type to extract the value type from.
 */
export type ValueOf<Type> = Type extends Primitive
  ? Type
  : Type extends AnyArray
    ? Type[number]
    : Type extends AnyFunction
      ? ReturnType<Type>
      : Type[keyof Type];
