import { createCli } from '../../src/index.js';
import { cmdTest } from './cmd-test-builder.js';
import { cmdNestTest } from './cmd-test-nest-builder.js';

createCli({
  context: '@agilejs',
  exitProcess: false,
})
  .register(cmdTest)
  .register(cmdNestTest)
  .parse(process.argv.slice(2));
