import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type OverrideOptions } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<
    IsExact<OverrideOptions<{ a: number }, { a: 1 }, { a: 3 }>, { a: 1 }>
  >,
  AssertTrue<
    IsExact<
      OverrideOptions<{ a: string; d: number }, { d: 1 }, { d: 2; a: string }>,
      { d: 1; a: string }
    >
  >,
];
