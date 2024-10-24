import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type AnyArray } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<
    IsExact<AnyArray<[3, 2, 1]>, Array<[3, 2, 1]> | ReadonlyArray<[3, 2, 1]>>
  >,
  AssertTrue<
    IsExact<
      AnyArray<[() => 123, { a: string }]>,
      | Array<[() => 123, { a: string }]>
      | ReadonlyArray<[() => 123, { a: string }]>
    >
  >,
  AssertTrue<IsExact<AnyArray<[]>, Array<[]> | ReadonlyArray<[]>>>,
  AssertTrue<
    IsExact<
      AnyArray<[undefined]>,
      Array<[undefined]> | ReadonlyArray<[undefined]>
    >
  >,
  AssertTrue<IsExact<AnyArray<string>, Array<string> | ReadonlyArray<string>>>,
  AssertTrue<
    IsExact<AnyArray<undefined>, Array<undefined> | ReadonlyArray<undefined>>
  >,
];
