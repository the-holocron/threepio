/* eslint-env jest */
const config = require('../bundlewatch.config.json');

describe('Preset', () => {
	describe('Bundlewatch', () => {
		it('should render the configuration', () => expect(config).toMatchSnapshot());
	});
});
