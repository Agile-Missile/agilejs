import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type MakeOptional } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<MakeOptional<{ a: number }, 'a'>, { a?: number }>>,
  AssertTrue<
    IsExact<
      MakeOptional<{ a: number; b: string }, 'a'>,
      { a?: number; b: string }
    >
  >,
  AssertTrue<
    IsExact<
      MakeOptional<{ a: number; b: string }, 'b'>,
      { a: number; b?: string }
    >
  >,
  AssertTrue<
    IsExact<
      MakeOptional<{ a: number; b: string }, 'a' | 'b'>,
      { a?: number; b?: string }
    >
  >,
];
