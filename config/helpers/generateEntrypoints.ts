import fs from 'fs';
import path from 'path';

export default function generateEntrypoints() {
    const partialsDir = '../../src/client/partials';
    const pagesDir = '../../src/client/pages';

    const pagesNames = fs.readdirSync(path.resolve(__dirname, pagesDir));
    const fileNames = fs.readdirSync(path.resolve(__dirname, partialsDir));

    return Object.fromEntries([
        ...pagesNames.map(name => [
            name,
            [
                'webpack-hot-middleware/client?reload=true&noInfo=true',
                `./src/client/pages/${name}/index.ts`,
                `./src/client/pages/${name}/styles.scss`,
            ],
        ]),
        ...fileNames.map(name => {
            return [
                name,
                [
                    'webpack-hot-middleware/client?reload=true&noInfo=true',
                    `./src/client/partials/${name}/index.ts`,
                    `./src/client/partials/${name}/styles.scss`,
                ],
            ];
        }),
    ]);
}
