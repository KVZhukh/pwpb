import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import * as webpack from 'webpack';

import generateEntrypoints from './helpers/generateEntrypoints';
import generateHtml from './helpers/generateHtml';
import generateHtmlPartials from './helpers/generateHtmlPartials';

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
            { test: /\.(png|woff|woff2|eot|otf|ttf|svg)$/, use: ['url-loader?limit=100000000'] },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource',
            // },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
        }),
        ...generateHtml(),
        ...generateHtmlPartials(),
    ],
};

export default config;
