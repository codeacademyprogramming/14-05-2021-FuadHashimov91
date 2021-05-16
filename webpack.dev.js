const path = require('path');
const common = require('./webpack.common');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ],
    }
}