const config = require("../lintstagedrc.json");

describe("configuration", () => {
	describe("lint Staged", () => {
		test("should render the configuration", () => expect(config).toMatchSnapshot());
	});
});
