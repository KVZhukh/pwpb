import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default () => {
    const dir = '../../src/client/partials';
    const partialsNames = fs.readdirSync(path.resolve(__dirname, dir));

    return partialsNames.flatMap(name => {
        return [
            new HtmlWebpackPlugin({
                filename: `${name}.html`,
                template: `src/client/partials/${name}/index.ts`,
                title: name,
                description: `Description of ${name}`,
                inject: true,
                minify: {
                    /* Очищаем пустые пространства, появляющиеся из-за удобного для разработки форматирования внутри hbs-шаблонов. */
                    collapseWhitespace: true,
                    /* При этом сохраняем переносы строк. */
                    preserveLineBreaks: true,
                },
                chunks: [name],
                // excludeAssets: [name, (asset: any) => asset.attributes && asset.attributes['x-skip']],
            }),
        ];
    });
};
