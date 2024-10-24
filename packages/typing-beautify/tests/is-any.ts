import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type IsAny } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<IsAny<any>, true>>,
  AssertTrue<IsExact<IsAny<undefined>, false>>,
  AssertTrue<IsExact<IsAny<unknown>, false>>,
  AssertTrue<IsExact<IsAny<never>, false>>,
  AssertTrue<IsExact<IsAny<string>, false>>,
];
