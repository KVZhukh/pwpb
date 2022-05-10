import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import * as webpack from 'webpack';

import cssInline from './helpers/cssInline';
import generateEntryCSS from './helpers/generateEntryCSS';
import generateEntrypoints from './helpers/generateEntrypoints';
import generateHtml from './helpers/generateHtml';

const isDev = process.env.NODE_ENV === 'development';

const config: webpack.Configuration = {
    name: 'client',
    mode: isDev ? 'development' : 'production',
    entry: generateEntrypoints(),
    // output: {
    //     clean: {
    //         dry: true,
    //     },
    //     compareBeforeEmit: false,
    // },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: generateEntryCSS(),
    //     },
    // },
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
                            // importLoaders: 1,
                        },
                    },
                    'sass-loader',
                ],
                // use: [
                //     {
                //         /* На фронте используется WDS и HMR, который требует использование style-loader, т.е. инлайн стилей внутрь шапки. К тому же это более быстрое с точки зрения времени сборки решение. Для production style-loader непригоден ввиду оптимизации. */
                //         loader: 'style-loader',
                //     },
                //     {
                //         /* css-loader все url в js импорты. */
                //         loader: 'css-loader',
                //         options: {
                //             /* css-loader должен знать сколько лоадеров идёт перед ним. У нас только postcss-loader, так что 1. */
                //             importLoaders: 1,
                //             sourceMap: true,
                //         },
                //     },
                //     {
                //         loader: 'sass-loader',
                //         options: {
                //             sourceMap: true,
                //         },
                //     },
                // ],
            },
        ],
    },
    // optimization: {
    //     removeAvailableModules: false,
    //     removeEmptyChunks: false,
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[id].css',
        }),
        ...generateHtml(),
        // cssInline(),
    ],
};

export default config;
