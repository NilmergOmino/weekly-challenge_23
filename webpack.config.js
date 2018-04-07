const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/js/app.js"
    },
    output: {
        path: `${__dirname}/dist/js`,
        filename: "bundle.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            ["env", {
                                "targets": {
                                "browsers": ["last 2 versions", "safari >= 7"]
                                }
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // minify css at the end
                    use: [{loader: 'css-loader', options: {minimize: false}}, 'postcss-loader']

                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // minify css at the end
                    use: [{loader: 'css-loader', options: {minimize: false}}, 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../assets/'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        // new UglifyJsPlugin({
        //     sourceMap: true
        // }),
        new ExtractTextPlugin({
            filename: '../css/style.css'
        })
    ]
}
