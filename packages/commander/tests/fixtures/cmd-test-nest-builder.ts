import {
  AbstractHandler,
  createCommand,
  createSubCommands,
} from '../../src/create-command.js';
import { CommandArgv } from '../../src/types/type-command.js';
import { cmdTest } from './cmd-test-builder.js';

type TestSuperCmdArgs = CommandArgv<{
  super: number;
}>;

class CmdSuperTestHandle extends AbstractHandler<TestSuperCmdArgs> {
  handle(): void | Promise<void> {
    console.log('this is nested test command handle');
    this.logger.debug('this is debug message for nested test command');
  }
  initialize(): void {
    //
  }
}

export const cmdNestTest = createCommand(
  'super',
  {
    command: 'super',
    describe: 'Display agilejs nest command project details.',
    builder: (yargs) => {
      const program = yargs
        .example(`$0 cmd super `, 'cli super testing')
        .option('super', {
          type: 'number',
          alias: 's',
          default: true,
          describe: `cli option super describe`,
        });
      return createSubCommands(program, cmdTest);
    },
  },
  CmdSuperTestHandle
);
