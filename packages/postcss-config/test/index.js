const config = require("../postcss.config.js");

describe("configuration", () => {
	describe("postCSS", () => {
		test("should render the configuration", () => expect(config).toMatchSnapshot());
	});
});
