import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import * as webpack from 'webpack';

import generateEntryCSS from './helpers/generateEntryCSS';
import generateEntrypoints from './helpers/generateEntrypoints';
import generateHtml from './helpers/generateHtml';

const isDev = process.env.NODE_ENV === 'development';

const config: webpack.Configuration = {
    name: 'client',
    mode: isDev ? 'development' : 'production',
    entry: generateEntrypoints(),
    optimization: {
        splitChunks: {
            cacheGroups: generateEntryCSS(),
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            /* publicPath нужен для указания основной директории относительно стилей. Т.к. стили лежат внутри styles, то выходим на один уровень вверх. Иначе такие зависимости, как шрифты, будут искать внутри styles. */
                            publicPath: '../',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // importLoaders: 1,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        ...generateHtml(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[id].css',
        }),
    ],
};

export default config;
