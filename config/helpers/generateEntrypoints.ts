import fs from 'fs';
import path from 'path';

export default function generateEntrypoints() {
    const pagesDir = '../../src/client/pages';

    const pagesNames = fs.readdirSync(path.resolve(__dirname, pagesDir));

    return Object.fromEntries(pagesNames.map(name => [name, `./src/client/pages/${name}/index.ts`]));
}
