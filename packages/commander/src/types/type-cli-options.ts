export type CliOptions = {
  /**
   * The context of the CLI.
   * @default @agilejs
   */
  context: string;
  packageJson?: Record<string, unknown>;
  exitProcess?: boolean;
};
