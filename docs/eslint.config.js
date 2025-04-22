import { base, defineConfig } from '@hyperse/eslint-config-hyperse';

export default defineConfig([
  ...base,
  {
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]);
