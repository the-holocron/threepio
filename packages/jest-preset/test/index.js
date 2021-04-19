const config = require('../jest-preset.json');

describe('Preset', () => {
	describe('Jest', () => {
		it('should render the configuration', () => expect(config).toMatchSnapshot());
	});
});
