import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type MarkRequired } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<MarkRequired<{ a: number }, 'a'>, { a: number }>>,
  AssertTrue<
    IsExact<
      MarkRequired<{ a?: number; b?: string }, 'a'>,
      { a: number; b?: string }
    >
  >,
  AssertTrue<
    IsExact<
      MarkRequired<{ a?: number; b?: string }, 'b'>,
      { a?: number; b: string }
    >
  >,
  AssertTrue<
    IsExact<
      MarkRequired<{ a?: number; b?: string }, 'a' | 'b'>,
      { a: number; b: string }
    >
  >,
];
