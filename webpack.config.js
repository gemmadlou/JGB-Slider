var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const env = require('yargs').argv.env;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const exampleStyle = {
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ],
    entry: {
        'example': './src/scss/example.scss'
    },
    output: {
        filename: '[name].css',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist'
    },
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
}

var script = {
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
                        presets: ["env", "stage-2"]
                    }
                 }
             }
        ]
    },
    entry: './src/js/index.js',
    output: {
        filename: 'jgb-slider.min.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist',
        library: 'jgbslider',
        libraryTarget: 'umd'
    }
};

if (env === 'production') {
    script.plugins.push(
        new UglifyJSPlugin(
            {
                sourceMap: true,
                minimize: true,
                mangle: {
                    except: ['_', 'exports', 'require']
                }
            }
        )
    );
}

var style = {
    plugins: [
        new WriteFilePlugin(),
        new ExtractTextPlugin({
            filename: (env === 'production') ? '[name].min.css' : '[name].css'
        })
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
    },
    entry: {
        'jgb-slider': './src/scss/js-slider.scss'
    },
    output: {
        filename: (env === 'production') ? '[name].min.css' : '[name].css',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist'
    }
};

let configs = [script, style, exampleStyle];

module.exports = configs;
