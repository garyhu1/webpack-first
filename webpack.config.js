const path = require("path");

const assetsPath = function(_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production' ?
        "./static" :
        "./static"
    return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: process.env.NODE_ENV === 'production' ?
            "./" : "./"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(png|svg|jpg|jepg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    "xml-loader"
                ]
            }
        ]
    }
}