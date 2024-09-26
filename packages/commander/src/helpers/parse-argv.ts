import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

export const parseArgv = async (cwd?: string) => {
  return await yargs(hideBin(process.argv), cwd).parse();
};
