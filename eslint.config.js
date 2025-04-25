import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ignores: [
      'dist/**',
      'tailwind.config.js',
      'vite.config.js',
      'src/hooks/use-toast.ts',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    settings: {
      react: {
        version: '18.2',
      },
    },
    rules: {
      'react/prop-types': 'off',
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          varsIgnorePattern:
            '^(React|motion|useState|useEffect|_|[A-Z][a-zA-Z0-9]*|[a-z]+[A-Z][a-zA-Z0-9]*)$',
          argsIgnorePattern: '^_|index',
        },
      ],
      'react/no-unescaped-entities': 'off',
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      'no-undef': 'off',
    },
  },
  {
    files: ['tailwind.config.js', 'vite.config.js'],
    languageOptions: {
      globals: {
        require: true,
        __dirname: true,
      },
    },
  },
];
