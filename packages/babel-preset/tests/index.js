const config = require('../babel.config.json');

describe('Preset', () => {
	describe('Babel', () => {
		it('should render the configuration', () => expect(config).toMatchSnapshot());
	});
});
