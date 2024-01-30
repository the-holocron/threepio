/* eslint-env jest */
const config = require("../rollup.config.js");

describe("preset", () => {
	describe("rollup", () => {
		test("should render the configuration", () => expect(config).toMatchSnapshot());
	});
});
