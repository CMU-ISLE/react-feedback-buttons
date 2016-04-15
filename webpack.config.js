'use strict';

// MODULES //

var path = require( 'path' );
var webpack = require( 'webpack' );


// CONFIG //

var config = {
	// Gives you sourcemaps without slowing down rebundling
	devtool: 'eval-source-map',
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		path.join( __dirname, 'examples/main.js' )
	],
	output: {
		path: path.join( __dirname, 'examples' ),
		publicPath: "/",
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: [ 'react-hot-loader', 'babel-loader' ],
			include: [
				path.join( __dirname, 'src' ),
				path.join( __dirname, 'examples' )
			]
		},
		{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		},
		{
			test: /\.svg$/,
			loader: 'file-loader?name=./img/[name].[ext]',
			include: [
				path.join( __dirname, 'img' )
			]
		}]
	}
};


// EXPORTS //

module.exports = config;
