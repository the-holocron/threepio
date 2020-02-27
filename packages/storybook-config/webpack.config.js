const custom = require('@theholocron/webpack-config');

module.exports = async ({ config, mode }) => ({
	...config,
	module: {
		...config.module,
		rules: custom.module.rules,
	},
	node: custom.node,
});
