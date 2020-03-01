const config = require('../postcss.config.js');

describe('Configuration', () => {
	describe('PostCSS', () => {
		it('should render the configuration', () => expect(config).toMatchSnapshot());
	});
});
