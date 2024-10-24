import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type UnionToTuple } from '@agilejs/typing-beautify';

type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number];

type cases = [
  AssertTrue<IsExact<UnionToTuple<'a' | 'b'>['length'], 2>>,
  AssertTrue<IsExact<ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>, 'a' | 'b'>>,
  AssertTrue<IsExact<ExtractValuesOfTuple<UnionToTuple<'a'>>, 'a'>>,
  AssertTrue<IsExact<ExtractValuesOfTuple<UnionToTuple<any>>, any>>,
  AssertTrue<
    IsExact<ExtractValuesOfTuple<UnionToTuple<undefined | void | 1>>, void | 1>
  >,
  AssertTrue<IsExact<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any | 1>>,
  AssertTrue<IsExact<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any>>,
  AssertTrue<
    IsExact<
      ExtractValuesOfTuple<UnionToTuple<'d' | 'f' | 1 | never>>,
      'f' | 'd' | 1
    >
  >,
  AssertTrue<
    IsExact<ExtractValuesOfTuple<UnionToTuple<[{ a: 1 }] | 1>>, [{ a: 1 }] | 1>
  >,
  AssertTrue<IsExact<ExtractValuesOfTuple<UnionToTuple<never>>, never>>,
  AssertTrue<
    IsExact<
      ExtractValuesOfTuple<
        UnionToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>
      >,
      'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'
    >
  >,
];
