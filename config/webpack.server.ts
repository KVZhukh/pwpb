import { resolve } from 'path';
import * as webpack from 'webpack';

const isDev = process.env.NODE_ENV === 'development';

const config: webpack.Configuration = {
    name: 'server',
    target: 'node',
    mode: isDev ? 'development' : 'production',
    entry: { server: resolve(__dirname, '../src/server/render.ts') },
    output: {
        path: resolve(__dirname, '../build'),
        filename: '[name].js',
        // libraryTarget: 'commonjs2',
    },
};

export default config;
