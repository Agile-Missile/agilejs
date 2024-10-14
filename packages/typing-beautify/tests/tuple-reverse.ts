import { AssertTrue, IsExact } from 'conditional-type-checks';
import { tupleReverse } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<tupleReverse<[]>, []>>,
  AssertTrue<IsExact<tupleReverse<['a', 'b']>, ['b', 'a']>>,
  AssertTrue<IsExact<tupleReverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
];

type errors = [
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Reverse<'string'>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Reverse<{ key: 'value' }>,
];
