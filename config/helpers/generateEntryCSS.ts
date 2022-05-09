import fs from 'fs';
import path from 'path';

export default function generateEntryCSS() {
    const pagesDir = '../../src/client/pages';

    const pagesNames = fs.readdirSync(path.resolve(__dirname, pagesDir));

    return Object.fromEntries(
        pagesNames.map(name => [
            name,
            {
                type: 'css/mini-extract',
                name: 'styles',
                test: (m: any, c: any, entry = 'foo') => {
                    console.log('console.log', m, c, entry);
                    return true;
                    // return m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry
                },
                // chunks: (chunk: { name: string }) => {
                //     return chunk.name === name;
                // },
                enforce: true,
            },
        ])
    );
}
