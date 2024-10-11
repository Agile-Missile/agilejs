import { AssertTrue, IsExact } from 'conditional-type-checks';
import { type TupleToUnion } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  AssertTrue<IsExact<TupleToUnion<[123]>, 123>>,
];
