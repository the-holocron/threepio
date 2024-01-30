/* eslint-disable no-console */
const browserslist = require("browserslist");
const config = require("../");

const browsers = browserslist(config);

describe("configuration", () => {
	describe("browserslist", () => {
		test("should return a list of browsers", () => expect(browsers.length).toBeGreaterThan(0));
		test("should render the configuration", () => expect(browsers).toMatchSnapshot());
		afterAll(() => console.log("Resolved the following browsers:\n\n", browsers.join("\n")));
	});
});
