const path = require("path");
const webpack = require('webpack');
const dotenv = require('dotenv').config( {
    path: path.join(__dirname, '.env')
} );

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../wwwroot/js"),
        filename: "index.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                include: path.resolve(__dirname, "./src"),
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin( {
            "process.env": dotenv.parsed
        } ),
    ],
};