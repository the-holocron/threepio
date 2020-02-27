const markdownlint = require('markdownlint');

const result = markdownlint.sync({
	files: [
		'README.md',
		'tests/invalid.md',
	],
	config: require('../markdownlintrc.json'),
});

describe('Configuration', () => {
	describe('MarkdownLint', () => {
		it('should not error on valid markdown', () => {
			const foo = result['README.md'];
			console.log(foo);
			expect(result['README.md'].length).toBe(0)
		});
		it('should error on invalid markdown', () => expect(result['tests/invalid.md'].length).toBeGreaterThan(0));
	});
});
