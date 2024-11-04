import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type IsUnknown } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<IsUnknown<never>, false>>,
  AssertTrue<IsExact<IsUnknown<never | string>, false>>,
  AssertTrue<IsExact<IsUnknown<''>, false>>,
  AssertTrue<IsExact<IsUnknown<undefined>, false>>,
  AssertTrue<IsExact<IsUnknown<unknown>, true>>,
  AssertTrue<IsExact<IsUnknown<null>, false>>,
  AssertTrue<IsExact<IsUnknown<[]>, false>>,
  AssertTrue<IsExact<IsUnknown<{}>, false>>,
  AssertTrue<IsExact<IsUnknown<() => void>, false>>,

  AssertTrue<IsExact<IsUnknown<Function>, false>>,
];
