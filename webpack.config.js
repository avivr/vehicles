var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var settings = require('./config-settings.js');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './app.js',
    output: {
        path: path.join(__dirname, settings.outputFolder),
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.jpg$/, loader: "file-loader"},
            {test: /\.png$/, loader: "url-loader?mimetype=image/png"},
            {test: /\.html$/, loader: "html"},
            {test: /\.js$/, loaders: ['ng-annotate?add=true', 'babel'], exclude: /node_modules/}
        ]
    },
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/]
    },
    plugins: [
        new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src/index.html')
    })
    ]
};
