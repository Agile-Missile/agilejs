import { AssertTrue, IsExact } from 'conditional-type-checks';
import { type ArrayLast } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<ArrayLast<[3, 2, 1]>, 1>>,
  AssertTrue<IsExact<ArrayLast<[() => 123, { a: string }]>, { a: string }>>,
  AssertTrue<IsExact<ArrayLast<[]>, never>>,
  AssertTrue<IsExact<ArrayLast<[undefined]>, undefined>>,
];
