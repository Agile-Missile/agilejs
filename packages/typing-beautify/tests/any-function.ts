import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type AnyFunction } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<
    IsExact<AnyFunction<[1, 2, 3], string>, (...args: [1, 2, 3]) => string>
  >,
  AssertTrue<
    IsExact<AnyFunction<string[], string>, (...args: string[]) => string>
  >,
  AssertTrue<
    IsExact<
      AnyFunction<(() => void)[], string>,
      (...args: (() => void)[]) => string
    >
  >,
];
