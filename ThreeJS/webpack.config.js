const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devServer: {
		contentBase: './dist',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	performance: {
		maxEntrypointSize: 1024000,
		maxAssetSize: 1024000
	},
};
