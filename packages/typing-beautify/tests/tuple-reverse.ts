import { AssertTrue, IsExact } from 'conditional-type-checks';
import { TupleReverse } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<TupleReverse<[]>, []>>,
  AssertTrue<IsExact<TupleReverse<['a', 'b']>, ['b', 'a']>>,
  AssertTrue<IsExact<TupleReverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
];

type errors = [
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Reverse<'string'>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Reverse<{ key: 'value' }>,
];
