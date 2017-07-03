var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const scriptConfig = {
    devtool: 'source-map',
    plugins: [
        new WriteFilePlugin()
    ],
    module: {
        rules: [
             {
                 test: /\.js$/,
                 exclude: /(node_modules|bower_components)/,
                 use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                 }
             }
        ]
    }
};

const styleConfig = {
    devtool: 'source-map',
    plugins: [
        new WriteFilePlugin()
    ],
    module: {
        rules: [
             {
                  test: /\.scss$/,
                  use: ExtractTextPlugin.extract({
                      fallback: 'style-loader',
                      //resolve-url-loader may be chained before sass-loader if necessary
                      use: ['css-loader', 'sass-loader']
                    })
             }
        ]
    }
};

var script = Object.assign(scriptConfig, {
    entry: './src/js/index.js',
    output: {
        filename: 'btm-slider.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist'
    }
});

var style = Object.assign(styleConfig, {
    entry: {
        'btm-slider': './src/scss/btm-slider.scss',
        example: './src/scss/example.scss'
    },
    output: {
        filename: '[name].css',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist'
    }
});
style.plugins.push(new ExtractTextPlugin({
    filename: '[name].css'
}));

module.exports = [script, style]
