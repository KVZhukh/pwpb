import express from 'express';
import fs from 'fs';
import pdf from 'html-pdf';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import config from '../../webpack.config';
import listen from './listen';

const app = express();

const clientConfig = config({ isClient: true });
// const serverConfig = config({ isClient: false });

const { publicPath } = clientConfig.output;
// const compiler = webpack([clientConfig, serverConfig]);
const compiler = webpack([clientConfig]);
const { stats } = clientConfig;

const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath,
    stats,
    writeToDisk: filePath => /^(?!.*(hot)).*/.test(filePath),
});
const hotMiddleware = webpackHotMiddleware(compiler.compilers[0]);

// const hotServerMiddleware = webpackHotServerMiddleware(compiler, {
//     chunkName: 'server',
// });

app.use(devMiddleware);
app.use(hotMiddleware);

// app.get('/', (_, res) => {
//     res.render('home');
// });
console.log(__dirname);
app.get('/', (req, res) => {
    const htmlPath = '../../dist/ui-kit.html';
    const htmlFile = fs.readFileSync(path.resolve(__dirname, htmlPath), 'utf8');
    pdf.create(htmlFile, { format: 'A4' }).toFile('../../public/uploads/demopdf.pdf', (error, result) => {
        if (error) {
            return console.error(error);
        } else {
            const datafile = fs.readFileSync('../../public/uploads/demopdf.pdf');
            res.header('content-type', 'application/pdf');
            res.send(datafile);
        }
    });
});
// app.use(hotServerMiddleware);

devMiddleware.waitUntilValid(() => listen(app));
