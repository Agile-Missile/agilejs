import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type IsNever } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<IsNever<never>, true>>,
  AssertTrue<IsExact<IsNever<never | string>, false>>,
  AssertTrue<IsExact<IsNever<''>, false>>,
  AssertTrue<IsExact<IsNever<undefined>, false>>,
  AssertTrue<IsExact<IsNever<null>, false>>,
  AssertTrue<IsExact<IsNever<[]>, false>>,
  AssertTrue<IsExact<IsNever<{}>, false>>,
];
