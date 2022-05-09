import * as webpack from 'webpack';

const config: webpack.Configuration = {
    // entry: ['webpack-hot-middleware/client?reload=true&noInfo=true'],
    devtool: 'source-map',
    optimization: {
        splitChunks: false,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};

export default config;
