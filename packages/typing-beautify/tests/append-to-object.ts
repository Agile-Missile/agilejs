import { AssertTrue, IsExact } from 'conditional-type-checks';
import { type AppendToObject } from '@agilejs/typing-beautify';

type test1 = {
  key: 'cat';
  value: 'green';
};

type testExpect1 = {
  key: 'cat';
  value: 'green';
  home: boolean;
};

type test2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
};

type testExpect2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
  home: 1;
};

type test3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
};

type testExpect3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
  isMotherRussia: false | undefined;
};

type cases = [
  AssertTrue<IsExact<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  AssertTrue<IsExact<AppendToObject<test2, 'home', 1>, testExpect2>>,
  AssertTrue<
    IsExact<
      AppendToObject<test3, 'isMotherRussia', false | undefined>,
      testExpect3
    >
  >,
];
