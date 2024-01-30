const config = require("../jest-preset.json");

describe("preset", () => {
	describe("jest", () => {
		test("should render the configuration", () => expect(config).toMatchSnapshot());
	});
});
