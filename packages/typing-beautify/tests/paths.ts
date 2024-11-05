import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type Paths } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<
    IsExact<
      Paths<{
        a: {
          b: {
            c: string;
          };
        };
      }>,
      'a' | 'a.b' | 'a.b.c'
    >
  >,
  AssertTrue<
    IsExact<
      Paths<{
        a: {
          b: {
            c: string;
            d: number;
          };
        };
      }>,
      'a' | 'a.b' | 'a.b.c' | 'a.b.d'
    >
  >,
  AssertTrue<
    IsExact<
      Paths<{
        a: {
          b: {
            c: string;
            d: number;
          };
        };
        e: boolean;
      }>,
      'a' | 'a.b' | 'a.b.c' | 'a.b.d' | 'e'
    >
  >,
  AssertTrue<
    IsExact<
      Paths<{
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
      }>,
      'a' | 'a.b' | 'a.b.c' | 'a.b.d' | 'e' | 'f' | 'f.g' | 'f.g.h' | 'f.g.h.i'
    >
  >,
];
