const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

/**
 * Get the current version defined in the package.json file
 */
const CURRENT_VERSION = process.env.npm_package_version;

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: `bundle.${CURRENT_VERSION}.js`
    },
    plugins: [
        // Define the version number as global const
        new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(CURRENT_VERSION)
        }),
        new HtmlWebpackPlugin({
            title: 'HTML Offline app',
            template: './app/html/template.html',
            filename: 'index.html'
        }),
        // Copy workers files
        new CopyWebpackPlugin([
            {from: './app/js/workers/**/*.js', to: `[name].${CURRENT_VERSION}.[ext]`, toType: 'template'}
        ])
    ]
};
