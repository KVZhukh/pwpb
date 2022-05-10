import fs from 'fs';
import path from 'path';

export default function generateEntrypoints() {
    const pagesDir = '../../src/client/pages';

    const pagesNames = fs.readdirSync(path.resolve(__dirname, pagesDir));

    return Object.fromEntries(
        pagesNames.map(name => [
            name,
            [
                'webpack-hot-middleware/client?reload=true&noInfo=true',
                `./src/client/pages/${name}/index.ts`,
                `./src/client/pages/${name}/template.html`,
            ],
        ])
    );
}
