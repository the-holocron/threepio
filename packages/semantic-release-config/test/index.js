const config = require('../releaserc.json');

describe('Configuration', () => {
	describe('Semantic Release', () => {
		it('should render the configuration', () => expect(config).toMatchSnapshot());
	});
});
