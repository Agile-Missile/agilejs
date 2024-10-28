import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type IsTuple } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<IsTuple<never>, false>>,
  AssertTrue<IsExact<IsTuple<never | string>, false>>,
  AssertTrue<IsExact<IsTuple<''>, false>>,
  AssertTrue<IsExact<IsTuple<undefined>, false>>,
  AssertTrue<IsExact<IsTuple<null>, false>>,
  AssertTrue<IsExact<IsTuple<[]>, true>>,
  AssertTrue<IsExact<IsTuple<{}>, false>>,
];
