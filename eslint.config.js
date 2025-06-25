import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist', 'node_modules', '*.config.js', 'postcss.config.js', 'tailwind.config.js', 'vite.config.js']
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        IntersectionObserver: 'readonly'
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Variables no utilizadas
      'no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_'
      }],

      // Variables no definidas
      'no-undef': 'error',

      // Declaraciones duplicadas
      'no-redeclare': 'error',

      // Malas prácticas generales
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',

      // Código muerto
      'no-unreachable': 'error',
      'no-dead-code': 'off',

      // React específico
      'react/prop-types': 'warn',
      'react/no-unused-prop-types': 'warn',
      'react/jsx-uses-react': 'off', // No necesario en React 17+
      'react/react-in-jsx-scope': 'off', // No necesario en React 17+
      'react/jsx-uses-vars': 'error',
      'react/no-unknown-property': 'error',
      'react/jsx-key': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-deprecated': 'warn',

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Estilo y mejores prácticas
      'prefer-const': 'warn',
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'no-trailing-spaces': 'warn',
      'no-multiple-empty-lines': ['warn', { max: 2 }],
      'semi': ['error', 'always'],
      'quotes': ['warn', 'single', { allowTemplateLiterals: true }]
    },
    settings: {
      react: {
        version: '17.0.2'
      }
    }
  }
];