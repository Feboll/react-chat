var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'common.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    devtool: 'inline-source-map',
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }]
    }
};