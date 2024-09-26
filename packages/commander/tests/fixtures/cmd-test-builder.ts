import { AbstractHandler, createCommand } from '../../src/create-command.js';
import { CommandArgv } from '../../src/types/type-command.js';

type TestCmdArgs = CommandArgv<{
  test: number;
}>;

class CmdTestHandle extends AbstractHandler<TestCmdArgs> {
  handle(): void | Promise<void> {
    console.log('this is test command handle');
    this.logger.debug('this is debug message for test command');
  }
  initialize(): void {
    //
  }
}

export const cmdTest = createCommand(
  'test',
  {
    command: 'test',
    describe: 'Display agilejs project details.',
    builder: (yargs) => {
      return yargs.example(`$0 cmd test `, 'cli testing').option('test', {
        type: 'number',
        alias: 't',
        default: true,
        describe: `cli option test describe`,
      });
    },
  },
  CmdTestHandle
);
