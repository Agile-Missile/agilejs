import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type MergeTuple } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<
    IsExact<
      MergeTuple<
        [
          { name: 'ts-essentials' },
          { description: 'All essential TypeScript types in one place' },
          { license: 'MIT' },
        ]
      >,
      {
        name: 'ts-essentials';
        description: 'All essential TypeScript types in one place';
        license: 'MIT';
      }
    >
  >,
  AssertTrue<
    IsExact<
      MergeTuple<
        [
          { name: string },
          { description: string; short: string },
          { license: string },
          { version: string; time: number },
          { func: () => void },
          { func: (a: number) => void },
          { function: Function },
        ]
      >,
      {
        name: string;
        description: string;
        short: string;
        license: string;
        version: string;
        time: number;
        func: (a: number) => void;
        function: Function;
      }
    >
  >,
];
