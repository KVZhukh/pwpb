import * as webpack from 'webpack';

const config: webpack.Configuration = {
    devtool: 'source-map',
    // optimization: {
    //     splitChunks: false,
    // },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};

export default config;
