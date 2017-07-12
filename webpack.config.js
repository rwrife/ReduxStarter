var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var pluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

var config = {
    entry: __dirname + '/app/index.jsx',
    module: {
        loaders:[
            {
                test:  /\.jsx$/,
                include: __dirname + '/app',
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                include: __dirname + '/app',
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }            
        ]      
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    plugins: [ pluginConfig, new ExtractTextPlugin("index.css")]
};

module.exports = config;