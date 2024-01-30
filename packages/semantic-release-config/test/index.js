const config = require("../releaserc.json");

describe("configuration", () => {
	describe("semantic Release", () => {
		test("should render the configuration", () => expect(config).toMatchSnapshot());
	});
});
