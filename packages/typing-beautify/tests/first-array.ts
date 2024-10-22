import { AssertTrue, IsExact } from 'conditional-type-checks';
import { type FirstArray } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<FirstArray<[3, 2, 1]>, 3>>,
  AssertTrue<IsExact<FirstArray<[() => 123, { a: string }]>, () => 123>>,
  AssertTrue<IsExact<FirstArray<[]>, never>>,
  AssertTrue<IsExact<FirstArray<[undefined]>, undefined>>,
];
