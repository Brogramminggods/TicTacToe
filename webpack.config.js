//./webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Greeting page',
			template: 'src/html/index.ejs' // load a custom template	
		}),
		new CleanWebpackPlugin(['dist'])
	],
	module: {
		rules: [
		  {
			test: /\.css$/,
			use: [ 'style-loader', 'css-loader' ]
		  }
		]
	  },
	devServer: {
		port: 3000,
		open: true,
		proxy: {
			"/src/server/api.js": "http://localhost:8080"
		}
	},

	entry: './src/client/index.js',
	//entry: './src/html/index.ejs',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	}
}


