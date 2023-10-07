module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'standard-with-typescript',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'eslint-config-prettier',
		'plugin:jest/recommended',
	],
	overrides: [
		{
			files: ['**/*.test.js'],
			env: { 'jest/globals': true },
			plugins: ['jest'],
			extends: ['plugin:jest/recommended'],
		},
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'jest'],
	rules: {
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
	},
};
