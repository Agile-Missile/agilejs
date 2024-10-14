import { AssertTrue, IsExact } from 'conditional-type-checks';
import { tupleFilter } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<tupleFilter<[], never>, []>>,
  AssertTrue<IsExact<tupleFilter<[never], never>, []>>,
  AssertTrue<IsExact<tupleFilter<['a', never], never>, ['a']>>,
  AssertTrue<IsExact<tupleFilter<[1, never, 'a'], never>, [1, 'a']>>,
  AssertTrue<
    IsExact<
      tupleFilter<
        [never, 1, 'a', undefined, false, null],
        never | null | undefined
      >,
      [1, 'a', false]
    >
  >,
  AssertTrue<
    IsExact<
      tupleFilter<[number | null | undefined, never], never | null | undefined>,
      [number | null | undefined]
    >
  >,
];
