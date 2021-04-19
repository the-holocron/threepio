const { CLIEngine } = require('eslint');
const config = require('../');

const valid = 'const foo = 1;\nconst bar = function () {\n// noOp\n};\nbar(foo);\n';
const cli = new CLIEngine({
	useEslintrc: false,
	configFile: 'eslintrc.json',
});

describe('Configuration', () => {
	describe('ESLint', () => {
		describe('Valid JS', () => {
			it('should not error', () => expect(cli.executeOnText(valid).results[0].errorCount).toBe(0));
			it('should flag no warnings', () => expect(cli.executeOnText(valid).results[0].warningCount).toBe(0));
		});

		describe('Options', () => {
			it('should contain certain options', () => {
				expect(config.parserOptions).toBeTruthy();
				expect(config.parserOptions).toBeTruthy();
				expect(config.env).toBeTruthy();
				expect(config.globals).toBeTruthy();
				expect(config.rules).toBeTruthy();
			});
		});
	});
});
