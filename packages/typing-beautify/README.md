# @agilejs/typing-beautify

A collection of TypeScript utility types designed to simplify and beautify your type definitions. It provides a range of tools to manipulate and transform types in a more intuitive and expressive way.

## Features

- **MergeTuple**: Merges a tuple of types into a single type.
- **Merge**: Merges two types into a single type.
- **PickKeys**: Picks the keys of a type that have a specific value type.
- **PickProperties**: Picks properties from a type based on a condition.
- **PrettifyRecord**: Converts a type into a more readable format.
- **TupleFilter**: Filters elements from a tuple based on a condition.
- **TupleReverse**: Reverses the order of elements in a tuple.
- **TupleToUnion**: Converts a tuple into a union type.
- **UnionToTuple**: Converts a union type into a tuple.
- **ValueOf**: Extracts the value type from a type.

## Installation

You can install `@agilejs/typing-beautify` using npm or yarn:

```bash
npm install @agilejs/typing-beautify
```

or

```bash
yarn add @agilejs/typing-beautify
```

## Usage

Import the utility types as needed and use them to simplify and beautify your type definitions.

For example, to use the `MergeTuple` utility type:

```typescript
import { MergeTuple } from '@agilejs/typing-beautify';

type Example = MergeTuple<[{ name: string }, { age: number }]>;
// Example is now equivalent to { name: string; age: number }
```

## Contributing

Contributions are welcome! If you have an idea for a new utility type or want to improve an existing one, please open an issue or submit a pull request.

## License

`@agilejs/typing-beautify` is licensed under the MIT License.
