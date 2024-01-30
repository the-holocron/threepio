/* eslint-env jest */
const config = require("../bundlewatch.config.json");

describe("preset", () => {
	describe("bundlewatch", () => {
		test("should render the configuration", () => expect(config).toMatchSnapshot());
	});
});
