const env = require("./env");
const globals = require("./globals");
const overrides = require("./overrides");
const parser = require("./parser");
const plugins = require("./plugins");
const rules = require("./rules");
const settings = require("./settings");

module.exports = {
	env,
	globals,
	...parser,
	...plugins,
	settings,
	rules,
	overrides,
};
