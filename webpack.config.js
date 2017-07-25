var HTMLWebpackPlugin = require('html-webpack-plugin');
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
                exclude: /node_modules/,
                include: __dirname + '/app',
                loaders: ["style-loader", "css-loader", "sass-loader"]
            } ,
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {   test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            }
        ]      
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    plugins: [ pluginConfig ]
};

module.exports = config;