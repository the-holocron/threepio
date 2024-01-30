/* eslint-env jest */
const config = require("../babel.config.js");

describe("preset", () => {
	describe("babel", () => {
		test("should render the configuration", () => expect(config).toMatchSnapshot());
	});
});
