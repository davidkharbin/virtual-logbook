const path = require('path');
const DIST_DIR = path.join(__dirname, '/public');
const SRC_DIR = path.join(__dirname, '/src');

module.exports = {
	entry: `${SRC_DIR}/index.jsx`,
	devtool: 'source-map',
	output: {
		filename: 'bundle.js',
		path: DIST_DIR
	},
	module: {
		rules: [
			{
				test: [/\.jsx$/],
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react'],
				}
			}
		]
	}
};
