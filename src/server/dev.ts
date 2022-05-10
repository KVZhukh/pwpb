import express from 'express';
import fs from 'fs';
import pdf from 'html-pdf';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../../webpack.config';
import listen from './listen';

const app = express();

const clientConfig = config({ isClient: true });

const { publicPath } = clientConfig.output;

const compiler = webpack([clientConfig]);
const { stats } = clientConfig;

const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath,
    stats,
    writeToDisk: filePath => /^(?!.*(hot)).*/.test(filePath),
});
const hotMiddleware = webpackHotMiddleware(compiler.compilers[0]);

app.use(devMiddleware);
app.use(hotMiddleware);

app.get('/pdf/:name', (req, res) => {
    const fileName = req.originalUrl.split('/')[2];

    const htmlPath = `../../dist/${fileName}.html`;
    const htmlFile = fs.readFileSync(path.resolve(__dirname, htmlPath), 'utf8');
    // if (htmlFile) {
    // eslint-disable-next-line consistent-return
    pdf.create(htmlFile, { format: 'A4' }).toFile('../../public/uploads/demopdf.pdf', error => {
        if (error) {
            // eslint-disable-next-line no-console
            return console.error(error);
        }
        const datafile = fs.readFileSync('../../public/uploads/demopdf.pdf');
        res.header('content-type', 'application/pdf');
        res.send(datafile);
    });
    // } else {
    //     res.status(404);
    // }
});

devMiddleware.waitUntilValid(() => listen(app));
