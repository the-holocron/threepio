const config = require('../lintstagedrc.json');

describe('Configuration', () => {
	describe('Lint Staged', () => {
		it('should render the configuration', () => expect(config).toMatchSnapshot());
	});
});
