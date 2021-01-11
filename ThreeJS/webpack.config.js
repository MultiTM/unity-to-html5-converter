const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devServer: {
		contentBase: '../Assets/HTML5Exporter/Dist',
	},
	output: {
		path: path.resolve('../Assets/HTML5Exporter/Dist'),
		filename: 'main.js',
	},
	performance: {
		maxEntrypointSize: 1024000,
		maxAssetSize: 1024000
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};
