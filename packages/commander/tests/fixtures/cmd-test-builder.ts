import {
  AbstractHandler,
  CommandArgv,
  createCommand,
} from '../../src/index.js';

type TestCmdArgs = CommandArgv<{
  test: number;
}>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class CmdTestHandle extends AbstractHandler<TestCmdArgs> {
  async handle(): Promise<void> {
    console.log('this is test command handle');
    this.logger.debug('this is debug message for test command');
    await sleep(1000);
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
