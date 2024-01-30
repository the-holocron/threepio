const config = require("../");

describe("configuration", () => {
	describe("webpack", () => {
		test("should render the configuration", () => expect(config).toMatchSnapshot());
	});
});
