const markdownlint = require("markdownlint");

const result = markdownlint.sync({
	files: [
		"README.md",
		"test/invalid.md",
	],
	config: require("../markdownlintrc.json"),
});

describe("configuration", () => {
	describe("markdownLint", () => {
		test("should not error on valid markdown", () => expect(result["README.md"]).toHaveLength(0));
		test("should error on invalid markdown", () => expect(result["test/invalid.md"].length).toBeGreaterThan(0));
	});
});
