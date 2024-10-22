import { AssertTrue, IsExact } from 'conditional-type-checks';
import { type LastArray } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<LastArray<[3, 2, 1]>, 1>>,
  AssertTrue<IsExact<LastArray<[() => 123, { a: string }]>, { a: string }>>,
  AssertTrue<IsExact<LastArray<[]>, never>>,
  AssertTrue<IsExact<LastArray<[undefined]>, undefined>>,
];
