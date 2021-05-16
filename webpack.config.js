const path = require('path');

module.exports = {
    mode: "production",
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