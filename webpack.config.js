// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
var app_root = 'src'; // the app root folder: src_hello, src_users, etc
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    app_root: app_root, // the app root folder, needed by the other webpack configs
    entry: [
        __dirname + '/' + app_root + '/index.js',
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ],
    },
    devServer: {
        contentBase: __dirname + '/dist',
    },
    plugins: [new HtmlWebpackPlugin({
        title: "fcde",
        template: "src/index.html",
        favicon: "src/icon/favicon.ico"
    })],
};