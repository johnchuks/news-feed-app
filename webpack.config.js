var webpack = require('webpack');
var path = require('path');

//var BUILD_DIR = path.resolve(__dirname, 'dist');

var config = {
  entry: './app/components/main.js',
  output: {
    filename: 'bundle.js',
    path:__dirname +'/public'
  },
  devServer:{
    historyApiFallback: true,
  },
  module: {

		rules:[
		    {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              use: {
              loader: 'babel-loader',
             options: {
                presets: ['es2015','react']
        }
      }
    }
  ]
}


};

module.exports = config;
