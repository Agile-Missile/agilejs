import type { Argv, CommandModule, ParseCallback } from 'yargs';
import { createYargs } from './create-yargs.js';
import { CliOptions } from './types/type-cli-options.js';

export class CliMain {
  private options: CliOptions;
  private commands: CommandModule[] = [];
  private program: Argv;
  constructor(options: CliOptions) {
    this.options = options;
    this.program = createYargs(this.options);
  }

  public register(...cmds: CommandModule<any, any>[]): CliMain {
    cmds.forEach((cmd) => {
      this.commands.push(cmd);
    });
    return this;
  }

  public parse(argv: string[], callback?: ParseCallback) {
    this.program = this.commands.reduce(
      (program, cmd) => program.command(cmd),
      this.program
    );
    return this.program.parse(argv, this.options, callback);
  }

  public async parseAsync<T>(
    argv: string[],
    callback?: ParseCallback
  ): Promise<T> {
    this.program = this.commands.reduce(
      (program, cmd) => program.command(cmd),
      this.program
    );
    return this.program
      .parseAsync(argv, this.options, callback)
      .then((result) => {
        return result as unknown as T;
      });
  }

  public exitProcess(code: number, err: Error): void {
    this.program.exit(code, err);
  }
}

export const createCli = (options: CliOptions) => {
  return new CliMain(options);
};
