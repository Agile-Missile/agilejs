import type { AssertTrue, IsExact } from 'conditional-type-checks';
import { type CamelCase } from '@agilejs/typing-beautify';

type cases = [
  AssertTrue<IsExact<CamelCase<'hello-world'>, 'helloWorld'>>,
  AssertTrue<IsExact<CamelCase<'HELLO_WORLD'>, 'helloWorld'>>,
  AssertTrue<IsExact<CamelCase<'helloWorld'>, 'helloWorld'>>,
  AssertTrue<IsExact<CamelCase<'dont-want-to-change'>, 'dontWantToChange'>>,
  AssertTrue<
    IsExact<
      CamelCase<'dont-want-to-change-this-one'>,
      'dontWantToChangeThisOne'
    >
  >,
];
