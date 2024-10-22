import { AssertTrue, IsExact } from 'conditional-type-checks';
import { TupleFilter } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<TupleFilter<[], never>, []>>,
  AssertTrue<IsExact<TupleFilter<[never], never>, []>>,
  AssertTrue<IsExact<TupleFilter<['a', never], never>, ['a']>>,
  AssertTrue<IsExact<TupleFilter<[1, never, 'a'], never>, [1, 'a']>>,
  AssertTrue<
    IsExact<
      TupleFilter<
        [never, 1, 'a', undefined, false, null],
        never | null | undefined
      >,
      [1, 'a', false]
    >
  >,
  AssertTrue<
    IsExact<
      TupleFilter<[number | null | undefined, never], never | null | undefined>,
      [number | null | undefined]
    >
  >,
];
