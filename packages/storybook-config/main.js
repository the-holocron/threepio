const custom = require('@theholocron/webpack-config');

module.exports = {
	addons: [
		'@storybook/addon-knobs',
		'@storybook/addon-a11y',
		'storybook-addon-jsx',
		{
			name: '@storybook/addon-docs',
			options: {
				configureJSX: true,
				babelOptions: {},
				sourceLoaderOptions: null,
			},
		},
	],
	stories: [
		'../src/alert/__stories__/*.[tj]s',
		'../src/alert/__stories__/*.mdx',
	],
	webpackFinal: async config => ({
		...config,
		module: {
			...config.module,
			rules: custom.module.rules,
		},
		node: custom.node,
		plugins: [
			...config.plugins,
		],
	}),
};
