const pluginCompat = require("./compat.plugin");
const pluginImport = require("./import.plugin");
const pluginJest = require("./jest.plugin");
const pluginJsxA11y = require("./jsx-a11y.plugin");
const pluginNode = require("./node.plugin");
const pluginPromise = require("./promise.plugin");
const pluginReactHooks = require("./react-hooks.plugin");
const pluginReact = require("./react.plugin");
const rules = require("./rules");
const styles = require("./styles");

module.exports = {
	...rules,
	...styles,

	// plugins
	...pluginCompat,
	...pluginImport,
	...pluginJest,
	...pluginJsxA11y,
	...pluginNode,
	...pluginPromise,
	...pluginReact,
	...pluginReactHooks,
};
