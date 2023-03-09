module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
    'svelte3(a11y-click-events-have-key-events)': 'off',
    'max-lines': ['error', 500],
    'no-nested-ternary': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-unneeded-ternary': ['error'],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-lonely-if': ['error'],
    'max-params': ['error', 3],
    'array-callback-return': 'error',
    'no-param-reassign': 'error',
    'prefer-destructuring': ['error'],
    'object-shorthand': 'error',
    'dot-notation': 'error',
    'multiline-comment-style': ['error', 'starred-block'],
    'prefer-template': 'error',
    'sort-keys': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/array-type': 'error',
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ],
    'default-case-last': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['lodash'],
            message: "Please use import from 'lodash-es' instead."
          },
          {
            group: ['moment'],
            message: "Please use import from 'dayjs' instead."
          },
          {
            group: ['../../*'],
            message: 'Please use alias import instead of deep parent import'
          }
        ]
      }
    ]
  }
};
