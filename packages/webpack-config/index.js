const path = require('path');
const ObsoleteWebpackPlugin = require('obsolete-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use: { loader: 'babel-loader' },
			}, {
				test: /\.md$/,
				use: { loader: 'raw-loader' },
			}, {
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' },
					{
						loader: 'sass-loader',
						options: {
							includePaths: [
								'node_modules/',
							],
						},
					},
				],
				include: path.resolve(__dirname, '../../../'),
			},
		],
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	},
	plugins: [
		new ObsoleteWebpackPlugin(),
	],
};
