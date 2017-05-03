var webpack = require('webpack');
var path = require('path');

//var BUILD_DIR = path.resolve(__dirname, 'dist');

var config = {
  entry: './app/components/main.js',
  output: {
    filename: 'bundle.js',
    path:__dirname +'/public'
  },
  /*
  devServer:{
    contentBase:'/public', // Relative directory for base of server
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server

  },
  */
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