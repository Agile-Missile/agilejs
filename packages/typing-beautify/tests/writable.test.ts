import type { IsExact } from 'conditional-type-checks';
import { assert } from 'conditional-type-checks';
import type { Writable } from '@agilejs/typing-beautify';

describe('Writable', () => {
  it('should make readonly properties writable', () => {
    // Test case 1: Basic readonly object
    type ReadonlyPerson = {
      readonly name: string;
      readonly age: number;
    };
    type WritablePerson = Writable<ReadonlyPerson>;

    assert<
      IsExact<
        WritablePerson,
        {
          name: string;
          age: number;
        }
      >
    >(true);

    // Test case 2: Nested readonly object
    type ReadonlyNested = {
      readonly info: {
        readonly id: number;
        readonly data: string;
      };
    };
    type WritableNested = Writable<ReadonlyNested>;

    assert<
      IsExact<
        WritableNested,
        {
          info: {
            readonly id: number;
            readonly data: string;
          };
        }
      >
    >(true);

    // Test case 3: Array with readonly elements
    type ReadonlyArray = {
      readonly items: readonly string[];
    };
    type WritableArray = Writable<ReadonlyArray>;

    assert<
      IsExact<
        WritableArray,
        {
          items: readonly string[];
        }
      >
    >(true);

    // Test case 4: Primitive types (should remain unchanged)
    type Simple = string;
    type WritableSimple = Writable<Simple>;

    assert<IsExact<WritableSimple, string>>(true);

    // Test case 5: Mixed readonly and writable properties
    type MixedReadonly = {
      readonly id: number;
      name: string;
      readonly tags: readonly string[];
    };
    type WritableMixed = Writable<MixedReadonly>;

    assert<
      IsExact<
        WritableMixed,
        {
          id: number;
          name: string;
          tags: readonly string[];
        }
      >
    >(true);
  });
});
