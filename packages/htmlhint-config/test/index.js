const config = require('../htmlhintrc.json');

describe('Configuration', () => {
	describe('HTMLHint', () => {
		it('should render the configuration', () => expect(config).toMatchSnapshot());
	});
});
