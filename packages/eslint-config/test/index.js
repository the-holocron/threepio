const path = require("path");
const { ESLint } = require("eslint");
const config = require("../");

describe("configuration", () => {
	describe("eSLint", () => {
		test("valid JS", async () => {
			const eslint = new ESLint({
				useEslintrc: false,
				overrideConfigFile: path.resolve(__dirname, "../src/index.js"),
			});

			const valid = "const foo = 1;\nconst bar = function () {\n// noOp\n};\nbar(foo);\n";
			const results = await eslint.lintText(valid);

			expect(results[0].errorCount).toBe(0);
			expect(results[0].warningCount).toBe(0);
		});

		test("should contain certain options", () => {
			expect(config.parserOptions).toBeTruthy();
			expect(config.parserOptions).toBeTruthy();
			expect(config.env).toBeTruthy();
			expect(config.globals).toBeTruthy();
			expect(config.rules).toBeTruthy();
		});
	});
});
