import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type PathValue } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<
    IsExact<
      PathValue<
        {
          a: {
            b: {
              c: string;
            };
          };
        },
        'a.b.c'
      >,
      string
    >
  >,
  AssertTrue<
    IsExact<
      PathValue<
        {
          a: {
            b: {
              c: string;
              d: number;
            };
          };
        },
        'a.b.c'
      >,
      string
    >
  >,
  AssertTrue<
    IsExact<
      PathValue<
        {
          a: {
            b: {
              c: string;
              d: number;
            };
          };
        },
        'a.b.d'
      >,
      number
    >
  >,
  AssertTrue<
    IsExact<
      PathValue<
        {
          a: {
            b: {
              c: string;
              d: number;
            };
          };
          e: boolean;
        },
        'e'
      >,
      boolean
    >
  >,
  AssertTrue<
    IsExact<
      PathValue<
        {
          a: {
            b: {
              c: string;
              d: number;
            };
          };
          e: boolean;
          f: {
            g: {
              h: {
                i: string;
              };
            };
          };
        },
        'f.g.h.i'
      >,
      string
    >
  >,
];
