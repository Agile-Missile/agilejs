import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type MarkReadonly } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<MarkReadonly<{ a: number }, 'a'>, { readonly a: number }>>,
  AssertTrue<
    IsExact<
      MarkReadonly<{ a: number; b: string }, 'a'>,
      { readonly a: number; b: string }
    >
  >,
  AssertTrue<
    IsExact<
      MarkReadonly<{ a: number; b: string }, 'b'>,
      { a: number; b: string }
    >
  >,
  AssertTrue<
    IsExact<
      MarkReadonly<{ a: number; b: string }, 'a' | 'b'>,
      { readonly a: number; b: string }
    >
  >,
];
