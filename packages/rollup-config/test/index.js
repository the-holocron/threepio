/* eslint-env jest */
const config = require('../rollup.config.js');

describe('Preset', () => {
	describe('Rollup', () => {
		it('should render the configuration', () => expect(config).toMatchSnapshot());
	});
});
