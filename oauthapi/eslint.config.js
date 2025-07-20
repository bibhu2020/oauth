// eslint.config.js or eslint.config.ts
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  // Base JS rules
  js.configs.recommended,

  // Base TS rules
  ...tseslint.configs.recommended,

  // Your custom rule overrides
  {
    files: ['**/*.js', '**/*.ts'],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'eqeqeq': 'error',
      'curly': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
    },
  },
];
