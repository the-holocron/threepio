const config = require('../');

describe('Configuration', () => {
	describe('Webpack', () => {
		it('should render the configuration', () => expect(config).toMatchSnapshot());
	});
});
