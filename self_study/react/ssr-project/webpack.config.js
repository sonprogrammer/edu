const path = require('path');
module.exports ={
    mode: 'development',

    target: 'web',
    entry: './src/client/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module:{
        rules:[
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets:
                        ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    }
}