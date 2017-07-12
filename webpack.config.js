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
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    plugins: [pluginConfig]
};

module.exports = config;