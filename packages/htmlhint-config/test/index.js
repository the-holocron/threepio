const config = require("../htmlhintrc.json");

describe("configuration", () => {
	describe("hTMLHint", () => {
		test("should render the configuration", () => expect(config).toMatchSnapshot());
	});
});
