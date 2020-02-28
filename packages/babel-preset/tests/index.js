/* eslint-env jest */
const config = require('../babel.config.js');

describe('Preset', () => {
	describe('Babel', () => {
		it('should render the configuration', () => expect(config).toMatchSnapshot());
	});
});
