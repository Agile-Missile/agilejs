import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type DeepCamelCaseProperties } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<
    IsExact<
      DeepCamelCaseProperties<{
        hello_world: string;
      }>,
      { helloWorld: string }
    >
  >,
  AssertTrue<
    IsExact<
      DeepCamelCaseProperties<{
        hello_world: string;
        hello_world_2: {
          hello_world_3: {
            world_hello: string;
            world_hello_4: {
              world_hello_5: string;
            };
          };
        };
      }>,
      {
        helloWorld: string;
        helloWorld2: {
          helloWorld3: {
            worldHello: string;
            worldHello4: {
              worldHello5: string;
            };
          };
        };
      }
    >
  >,
];
