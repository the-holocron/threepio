const { terser } = require('rollup-plugin-terser');
const del = require('del');

module.exports = async function ({ filename, watch, output = 'dist' }) {
	await del(output);

	const builds = [];

	// Main
	builds.push({
		input: 'src/index.js',
		output: [
			{
				dir: `${output}/esm/`,
				format: 'esm',
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js',
			},
			{
				dir: `${output}/cjs/`,
				format: 'cjs',
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js',
			},
		],
	});

	// Minified iife
	builds.push({
		input: `${output}/esm/index.js`,
		plugins: [
			terser({
				compress: { ecma: 2019 },
			}),
		],
		output: {
			file: `${output}/iife/index.min.js`,
			format: 'iife',
			esModule: false,
			name: filename,
		},
	});

	return builds;
}
