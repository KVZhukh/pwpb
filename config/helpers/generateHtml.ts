import fs from 'fs';
import HTMLInlineCSSWebpackPlugin from 'html-inline-css-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

export default () => {
    const dir = '../../src/client/pages';
    const dirNames = fs.readdirSync(path.resolve(__dirname, dir));
    return dirNames
        .filter(name => {
            return name !== 'index.ts';
        })
        .flatMap(name => [
            new HtmlWebpackPlugin({
                filename: `${name}.html`,
                template: `src/client/pages/${name}/index.ts`,
                title: name,
                description: `Description of ${name}`,
                inject: true,
                minify: {
                    /* Очищаем пустые пространства, появляющиеся из-за удобного для разработки форматирования внутри hbs-шаблонов. */
                    collapseWhitespace: true,
                    /* При этом сохраняем переносы строк. */
                    preserveLineBreaks: true,
                },
            }),
            // new HTMLInlineCSSWebpackPlugin({
            //     filter(fileName) {
            //         return fileName.includes(name);
            //     },
            //     leaveCSSFile: true,
            //     replace: {
            //         target: '<!-- embed_styles -->',
            //         removeTarget: true,
            //     },
            // }),
        ]);
};
