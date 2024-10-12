import { AssertTrue, IsExact } from 'conditional-type-checks';
import { type ArrayFirst } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<ArrayFirst<[3, 2, 1]>, 3>>,
  AssertTrue<IsExact<ArrayFirst<[() => 123, { a: string }]>, () => 123>>,
  AssertTrue<IsExact<ArrayFirst<[]>, never>>,
  AssertTrue<IsExact<ArrayFirst<[undefined]>, undefined>>,
];
