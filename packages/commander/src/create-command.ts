import type { PackageJson } from 'type-fest';
import type { Arguments, Argv, CommandModule } from 'yargs';
import { terminalColor } from '@agilejs/terminal';
import { Logger, LogLevel } from '@armit/logger';
import { StdoutAdapter, TerminalFormatStrategy } from '@armit/logger-node';
import type { CommandArgv } from './types/type-command.js';

interface OnCommandHandler {
  /**
   * The `CommanderHandler` class should inherit and implement this function
   * @override
   */
  handle(): void | Promise<void>;
  /**
   * The `CommanderHandler` class should inherit and implement this function
   * @override
   */
  initialize(): void;
  get name(): string;
  get cliPackageJson(): PackageJson;
}

interface CommandHandlerCtor<T extends CommandArgv> {
  new (args: Arguments<T>): AbstractHandler<T>;
}

export abstract class AbstractHandler<T extends CommandArgv>
  implements OnCommandHandler
{
  protected logger = new Logger({
    logLevel: LogLevel.Info as LogLevel,
    adapter: new StdoutAdapter({
      formatStrategy: new TerminalFormatStrategy({
        showLevelName: true,
        showTimestamp: true,
        showRelativeTimestamp: false,
        showContext: false,
        showTimestampRelativeToLastLog: false,
        use24HourClock: true,
      }),
    }),
  });

  // Active command name.
  private pluginName: string;
  private packageJson: PackageJson;

  constructor(protected args: Arguments<T>) {
    this.pluginName = args.name;
    this.packageJson = args.packageJson;
    this.updateLogger(args);
    this.initialize();
  }

  updateLogger(args: Arguments<T>): void {
    this.logger = new Logger({
      logLevel: LogLevel[args.logLevel] as LogLevel,
      context: args.name,
      adapter: new StdoutAdapter({
        formatStrategy: new TerminalFormatStrategy({
          showLevelName: true,
          showTimestamp: true,
          showRelativeTimestamp: false,
          showContext: false,
          showTimestampRelativeToLastLog: false,
          use24HourClock: true,
          noColor: args.noColor,
        }),
      }),
    });
    this.logger.debug(`The loaded cli args:\n${JSON.stringify(args, null, 2)}`);
  }

  get cliPackageJson(): PackageJson {
    return this.packageJson;
  }

  get name(): string {
    return this.pluginName;
  }

  /**
   * The `CommanderHandler` class should inherit and implement this function,
   * @example
   * ```ts
   * console.log(this.args.logLevel)
   * ```
   * @override
   */
  initialize(): void {
    //
  }
  /**
   * The `CommanderHandler` class should inherit and implement this function
   * @override
   */
  handle(): void | Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export const createCommand = <T extends CommandArgv>(
  name: string,
  declare: Omit<CommandModule<T>, 'handler'>,
  ctor: CommandHandlerCtor<T>
): CommandModule<T> => {
  return {
    ...declare,
    handler(args) {
      const handler = new ctor({ ...(args as Arguments<T>), name });
      return handler.handle.call(handler);
    },
  };
};

export const createSubCommands = (
  program: Argv,

  ...commands: CommandModule<any, any>[]
): Argv => {
  program = commands.reduce((program, cmd) => program.command(cmd), program);
  return program.demandCommand(
    1,
    `${terminalColor(['red', 'black'])('ERR!')} ${terminalColor(
      ['red'],
      'bold'
    )(
      ' A sub-command is required. Pass --help to see all available sub-commands and options.\n'
    )}
    `
  );
};
