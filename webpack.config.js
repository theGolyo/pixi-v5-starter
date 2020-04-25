const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/app.ts'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({title: "pixi-starter"})
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        open: true,
        watchContentBase: true,
        port: 9000,
        host: '0.0.0.0',
        public: 'localhost:9000'
    },
    devtool: 'inline-source-map'
};
