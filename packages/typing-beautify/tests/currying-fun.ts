import { AssertTrue, IsExact } from 'conditional-type-checks';
import { type CurringFun } from '@agilejs/typing-beautify';

type curried1 = CurringFun<(a: string, b: number, c: boolean) => true>;
type curried2 = CurringFun<
  (
    a: string,
    b: number,
    c: boolean,
    d: boolean,
    e: boolean,
    f: string,
    g: boolean
  ) => true
>;
type curried3 = CurringFun<() => true>;

type cases = [
  AssertTrue<
    IsExact<curried1, (a: string) => (b: number) => (c: boolean) => true>
  >,
  AssertTrue<
    IsExact<
      curried2,
      (
        a: string
      ) => (
        b: number
      ) => (
        c: boolean
      ) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >,
  AssertTrue<IsExact<curried3, () => true>>,
];
