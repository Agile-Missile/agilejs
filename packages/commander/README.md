# @agilejs/commander

@agilejs/commander is a JavaScript library for building command-line interfaces. It builds on top of the Yargs library, providing a more convenient API and features to help developers quickly create powerful CLI tools.

**Features:**

- **Clean API:** Provides an easy-to-use API for quickly building commands and subcommands.
- **Flexible command definition:** Supports defining custom command options, arguments, and default values.
- **Powerful logging:** Uses `@armit/logger` to provide logging capabilities, supporting different log levels and output formats.
- **Rich command-line colors:** Uses `@agilejs/terminal` to add colors to command-line output, improving readability.
- **Extensibility:** Can easily extend functionality, adding custom commands and options.

**Directory structure:**

```
├── create-cli.ts
├── create-command.ts
├── create-yargs.ts
├── helpers
│   ├── index.ts
│   └── parse-argv.ts
├── index.ts
└── types
    ├── type-cli-options.ts
    └── type-command.ts
```

**License:**

AgileJS CLI is released under the MIT license.
