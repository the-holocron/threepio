const config = require('../postcssrc.json');

describe('Configuration', () => {
	describe('PostCSS', () => {
		it('should render the configuration', () => expect(config).toMatchSnapshot());
	});
});
