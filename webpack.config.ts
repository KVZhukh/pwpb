import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import * as webpack from 'webpack';
import merge from 'webpack-merge';

import clientBaseConfig from './config/webpack.client.base';
import clientDevConfig from './config/webpack.client.dev';
import serverConfig from './config/webpack.server';

const isDev = process.env.NODE_ENV === 'development';

export default ({ isClient }: { isClient?: boolean }) => {
    let config;

    if (isClient) {
        config = merge(clientBaseConfig, clientDevConfig);
    } else {
        config = serverConfig;
    }
    const smp = new SpeedMeasurePlugin();

    const baseConfig: webpack.Configuration = {
        output: {
            publicPath: '/',
        },
        stats: { all: false, errors: true, warnings: true, colors: true },
        mode: 'development',
        resolve: {
            extensions: ['.js', '.ts', '.json', 'scss', '.d.ts'],
        },
        devtool: isDev ? 'source-map' : false,
        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
                {
                    test: /\.html$/,
                    loader: 'mustache-loader',
                },
            ],
        },
    };

    return smp.wrap(merge(baseConfig, config));
};
