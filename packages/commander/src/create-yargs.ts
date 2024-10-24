import type { Argv } from 'yargs';
import yargs from 'yargs';
import { getTerminalLink, terminalColor } from '@agilejs/terminal';
import { Logger, LogLevel } from '@armit/logger';
import { StdoutAdapter, TerminalFormatStrategy } from '@armit/logger-node';
import type { CliOptions } from './types/type-cli-options.js';

const logger = new Logger({
  logLevel: LogLevel.Warn,
  adapter: new StdoutAdapter({
    formatStrategy: new TerminalFormatStrategy(),
  }),
});

const errorHandler =
  (option: CliOptions) =>
  (msg: string, err: string | Error, yargsIns: Argv) => {
    let actual = err || new Error(msg);
    if (typeof actual === 'string') {
      actual = new Error(actual);
    }
    // Make sure that we have always have `message` property error we throw.
    if (actual.message?.includes('Did you mean') && yargsIns.parsed) {
      logger.error(
        `Unknown command "${yargsIns.parsed.argv.$0}"`,
        option.context
      );
    }
    logger.error(actual.message, option.context, actual.stack);
    if (option.exitProcess !== false) {
      process.exit(1);
    }
  };

const globalOptions = () => {
  return yargs()
    .option('log-level', {
      type: 'string',
      default: 'Info',
      choices: ['Error', 'Warn', 'Info', 'Verbose', 'Debug'],
      describe: `What level of logs to report. `,
    })
    .option('no-color', {
      type: 'boolean',
      default: false,
      describe: `Removes colors from the console output.`,
    });
};

export const createYargs = (option: CliOptions) => {
  return (
    globalOptions()
      .group(['help', 'version', 'log-level', 'no-color'], 'Globals: ')
      .usage(`Usage: $0 <command> [options]`)
      .recommendCommands()
      .demandCommand(
        1,
        `${terminalColor(['red', 'black'])('ERR!')} ${terminalColor(
          ['red'],
          'bold'
        )(
          ' A command is required. Pass --help to see all available commands and options.\n'
        )}
        `
      )
      .fail(errorHandler(option))
      // Note: .exitProcess(false) should not be used
      // when .command() is called with a handler returning a promise,
      // as it would lead to a duplicated error message when this promise rejects
      .exitProcess(option.exitProcess !== false)
      .locale('en')
      .updateStrings({
        command: terminalColor(['cyan'])('command'),
      })
      .strict()
      .alias('h', 'help')
      .alias('l', 'log-level')
      .alias('v', 'version')
      .epilog(
        `Copyright 2024 ${getTerminalLink(
          terminalColor(['magenta'], 'bold')(option.context),
          'https://github.com/Agile-Missile/agilejs'
        )} `
      )
      .wrap(null)
  );
};
