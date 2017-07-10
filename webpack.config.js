var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const env = require('yargs').argv.env;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const scriptConfig = {
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
    }
};

const styleConfig = {
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
        filename: (env === 'production') ? 'btm-slider.min.js' : 'btm-slider.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist',
        library: 'BTMSlider',
        libraryTarget: 'umd'
    }
});

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

var style = Object.assign(styleConfig, {
    entry: {
        'btm-slider': './src/scss/js-slider.scss'
    },
    output: {
        filename: (env === 'production') ? '[name].min.css' : '[name].css',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist'
    }
});

style.plugins.push(new ExtractTextPlugin({
    filename: (env === 'production') ? '[name].min.css' : '[name].css'
}));

if (env !== 'production') {
    style.entry.example = './src/scss/example.scss';
}

module.exports = [script, style]
