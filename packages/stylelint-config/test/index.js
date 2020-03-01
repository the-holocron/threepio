const { readFileSync } = require('fs');
const stylelint = require('stylelint');
const config = require('../');

const valid = readFileSync('./test/valid.mocks.scss', 'utf-8');
const invalid = readFileSync('./test/invalid.mocks.scss', 'utf-8');

describe('Configuration', () => {
	describe('StyleLint', () => {
		describe('Valid SCSS', () => {
			let result;

			beforeEach(() => {
				result = stylelint.lint({
					code: valid,
					config,
				});
			});

			it('should not error', () => result.then(data => expect(data.errored).toBeFalsy()));
			it('should flag no warnings', () => result.then(data => expect(data.results[0].warnings).toHaveLength(0)));
		});

		describe('Invalid SCSS', () => {
			let result;

			beforeEach(() => {
				result = stylelint.lint({
					code: invalid,
					config,
				});
			});

			it('should error', () => result.then(data => expect(data.errored).toBeTruthy()));
			it('should flag 1 warnings', () => result.then(data => expect(data.results[0].warnings).toHaveLength(1)));
			it('should flag with warning text', () => result.then(data => expect(data.results[0].warnings[0].text).toBe('Unexpected unknown type selector "madeup" (selector-type-no-unknown)')));
			it('should flag a rule', () => result.then(data => expect(data.results[0].warnings[0].rule).toBe('selector-type-no-unknown')));
			it('should flag with severity', () => result.then(data => expect(data.results[0].warnings[0].severity).toBe('error')));
			it('should flag the correct line number', () => result.then(data => expect(data.results[0].warnings[0].line).toBe(1)));
			it('should flag the correct column number', () => result.then(data => expect(data.results[0].warnings[0].column).toBe(1)));
		});
	});
});
