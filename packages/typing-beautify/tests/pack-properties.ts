import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type PickProperties } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<
    IsExact<
      PickProperties<{ a: 1; b: 1; c: '123' }, number>,
      { a: number; b: number }
    >
  >,
  AssertTrue<
    IsExact<
      PickProperties<
        { a: 1; b: 1; c: '123'; e: undefined; f: null },
        undefined
      >,
      { e: undefined }
    >
  >,
  AssertTrue<
    IsExact<
      PickProperties<{ a: 1; b: 1; c: '123'; e: undefined; f: null }, object>,
      {}
    >
  >,
  AssertTrue<
    IsExact<
      // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      PickProperties<{ a: 1; b: 1; c: '123'; d: () => void }, Function>,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      { d: Function }
    >
  >,
];
