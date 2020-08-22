module.exports = {
	root: true,
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'react-native', '@react-native-community', 'prettier', 'react-hooks'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'@react-native-community',
		'plugin:react-hooks/recommended',
	],
	rules: {
		// eslint
		semi: 'off',
		curly: ['warn', 'multi-or-nest', 'consistent'],
		'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
		'no-async-promise-executor': 'warn',
		'require-await': 'warn',
		'no-return-await': 'warn',
		'no-await-in-loop': 'warn',
		'comma-dangle': 'off', // prettier already detects this
		// prettier
		'prettier/prettier': ['warn'],
		// react plugin
		'react/no-unescaped-entities': 'off',
		// react native plugin
		'react-native/no-unused-styles': 'warn',
		'react-native/split-platform-components': 'error',
		'react-native/no-inline-styles': 'off',
		'react-native/no-color-literals': 'error',
		// react hooks

		'react-hooks/exhaustive-deps': [
			'warn',
			{
				additionalHooks: '(useCode)',
			},
		],
	},
	env: {
		node: true,
		'react-native/react-native': true,
	},
	settings: {
		react: {
			version: 'latest',
		},
		'import/resolver': {
			extensions: [
				'.js',
				'.jsx',
				'.ts',
				'.tsx',
				'.d.ts',
				'.android.js',
				'.android.jsx',
				'.android.ts',
				'.android.tsx',
				'.ios.js',
				'.ios.jsx',
				'.ios.ts',
				'.ios.tsx',
				'.web.js',
				'.web.jsx',
				'.web.ts',
				'.web.tsx',
			],
		},
	},
};
