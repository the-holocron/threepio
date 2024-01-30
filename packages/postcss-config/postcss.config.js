module.exports = {
	plugins: [
		require("autoprefixer")({ cascade: false, replace: true }),
		require("postcss-flexbugs-fixes"),
	],
};
