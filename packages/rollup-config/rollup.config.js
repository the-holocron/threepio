const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const strip = require('@rollup/plugin-strip');
const { terser } = require('rollup-plugin-terser');

module.exports = async function (args) {
	const input = args.input || 'src';
	delete args.input;
	const output = args.output || 'dist';
	delete args.output;

	const builds = [];

	// Main
	builds.push({
		input: `${input}/index.js`,
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
		plugins: [
			nodeResolve(),
			babel({
				babelHelpers: 'bundled',
				exclude: 'node_modules/**',
				presets: [
					[ '@babel/preset-env', {
						'targets': {
							'browsers': [
								'chrome >= 61',
								'safari >=8',
								'edge >= 14',
								'ff >= 57',
								'ie >= 11',
								'ios >= 8'
							]
						},
						modules: false,
						forceAllTransforms: true,
						useBuiltIns: 'usage',
						corejs: '3.0',
					}]
				],
			}),
			strip({
				function: [
					'assert.*',
					'console.*',
					'echo.*',
				],
			}),
		],
	});

	// Minified iife
	builds.push({
		input: `${output}/esm/index.js`,
		plugins: [
			nodeResolve(),
			terser({
				compress: { ecma: 2019 },
			}),
		],
		output: {
			file: `${output}/iife/index.min.js`,
			format: 'iife',
			esModule: false,
			name: args.name,
		},
	});

	return builds;
}
