import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import * as webpack from 'webpack';

import cssInline from './helpers/cssInline';
import generateEntrypoints from './helpers/generateEntrypoints';
import generateHtml from './helpers/generateHtml';

const isDev = process.env.NODE_ENV === 'development';

const config: webpack.Configuration = {
    name: 'client',
    mode: isDev ? 'development' : 'production',
    entry: generateEntrypoints(),
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, '../src/client'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[id].css',
        }),
        ...generateHtml(),
        cssInline(),
    ],
};

export default config;
