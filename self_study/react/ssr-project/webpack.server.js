const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports ={
    mode: 'development',
    target: 'node',
    entry:"./src/index.js",
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules:[
            {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/ ,
            options: {
                presets:["@babel/presets-env", "@babel/preset-react"],
            }
        }
        ]
    },
    externals: [nodeExternals()]
}