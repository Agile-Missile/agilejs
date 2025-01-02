import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type Merge } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<Merge<{ a: number }, { a: 1 }>, { a: 1 }>>,
  AssertTrue<IsExact<Merge<{ a: number }, { a: 1; b: 2 }>, { a: 1; b: 2 }>>,
  AssertTrue<
    IsExact<
      Merge<{ a: number; b: string }, { a: 1; c: boolean }>,
      { b: string; a: 1; c: boolean }
    >
  >,
  AssertTrue<
    IsExact<
      Merge<{ a: number; b: string }, { a: 1; b: 2; c: boolean }>,
      { a: 1; b: 2; c: boolean }
    >
  >,
  AssertTrue<
    IsExact<
      Merge<{ a: number; b: string }, { c: boolean }>,
      { a: number; b: string; c: boolean }
    >
  >,
  AssertTrue<
    IsExact<Merge<{ a: number; b: string }, {}>, { a: number; b: string }>
  >,
  AssertTrue<
    IsExact<
      Merge<{ a: number; b: string }, { a: 1; b: 2; c: boolean; d: string }>,
      { a: 1; b: 2; c: boolean; d: string }
    >
  >,
  AssertTrue<
    IsExact<
      Merge<
        { a: number; b: string },
        { a: 1; b: 2; c: boolean; d: string; e: number }
      >,
      { a: 1; b: 2; c: boolean; d: string; e: number }
    >
  >,
];
