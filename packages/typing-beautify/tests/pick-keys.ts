import type { AssertTrue, IsExact } from 'conditional-type-checks';
import type { PickKeys } from '../src/index.js';

type cases = [
  AssertTrue<IsExact<PickKeys<{ a: 1; b: 1; c: '123' }, number>, 'a' | 'b'>>,
  AssertTrue<
    IsExact<
      PickKeys<{ a: 1; b: 1; c: '123'; e: undefined; f: null }, undefined>,
      'e'
    >
  >,
  AssertTrue<
    IsExact<
      PickKeys<{ a: 1; b: 1; c: '123'; e: undefined; f: null }, object>,
      never
    >
  >,
  AssertTrue<
    IsExact<
      // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      PickKeys<{ a: 1; b: 1; c: '123'; d: () => void }, Function>,
      'd'
    >
  >,
];
