/* eslint-env jest */
const config = require('../prettier.config.json');

describe('Preset', () => {
	describe('Prettier', () => {
		it('should render the configuration', () => expect(config).toMatchSnapshot());
	});
});
