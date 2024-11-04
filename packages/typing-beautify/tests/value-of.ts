import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type ValueOf } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<ValueOf<[123, '456', true]>, 123 | '456' | true>>,
  AssertTrue<IsExact<ValueOf<''>, ''>>,
  AssertTrue<IsExact<ValueOf<number>, number>>,
  AssertTrue<IsExact<ValueOf<boolean>, boolean>>,
  AssertTrue<IsExact<ValueOf<symbol>, symbol>>,
  AssertTrue<IsExact<ValueOf<undefined>, undefined>>,
  AssertTrue<IsExact<ValueOf<null>, null>>,

  AssertTrue<IsExact<ValueOf<Function>, any>>,
  AssertTrue<IsExact<ValueOf<() => number>, number>>,
  AssertTrue<IsExact<ValueOf<{ a: 1 }>, 1>>,
  AssertTrue<IsExact<ValueOf<{ a: 1; b: 2 }>, 1 | 2>>,
  AssertTrue<IsExact<ValueOf<{ a: 1; b: 2; c: 3 }>, 1 | 2 | 3>>,
];
