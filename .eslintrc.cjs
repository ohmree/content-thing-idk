/** @type { import('eslint').Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:svelte/recommended',
		'plugin:svelte/prettier',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		project: true,
		// project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: ['plugin:@typescript-eslint/recommended-type-checked'],
			parser: 'typescript-eslint-parser-for-extra-files',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				sourceType: 'module',
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte'],
			},
		},
		{
			files: ['*.?(c|m)js'],
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
		},
		{
			files: ['*.c[jt]s'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			extends: ['plugin:@typescript-eslint/recommended-type-checked'],
			parserOptions: {
				parser: 'typescript-eslint-parser-for-extra-files',
				sourceType: 'module',
				project: './tsconfig.json',
			},
		},
		{
			files: ['src/lib/components/**/*.@(ts|svelte)'],
			rules: { '@typescript-eslint/no-unused-vars': 'off' },
		},
	],
};
