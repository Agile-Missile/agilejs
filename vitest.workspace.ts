import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  './packages/typing-beautify/vitest.config.ts',
  './packages/commander/vitest.config.ts',
  './packages/terminal/vitest.config.ts',
  './packages/logger/vitest.config.ts',
]);
