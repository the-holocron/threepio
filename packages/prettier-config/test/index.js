/* eslint-env jest */
const config = require("../prettier.config.json");

describe("preset", () => {
	describe("prettier", () => {
		test("should render the configuration", () => expect(config).toMatchSnapshot());
	});
});
