// eslint.config.js or eslint.config.ts
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  // Base JS rules
  js.configs.recommended,

  // Base TS rules
  ...tseslint.configs.recommended,

  // Your custom rule overrides with env added
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      env: {
        node: true,       // <-- This enables Node.js globals like console, process, etc.
        es2021: true,     // Optional, enable modern ECMAScript globals
      },
    },
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
