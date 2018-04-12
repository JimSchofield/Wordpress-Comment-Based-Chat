const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'chat.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-env', 'babel-preset-react']
                }
            }
        ]
    },
    mode: 'development'
}