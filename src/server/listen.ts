import { Express } from 'express';
import chalk from 'chalk';

const port = Number(process.env.PORT) || 3000;

export default (app: Express) => {
    app.listen(port, () => {
        console.log('start');
    }).on('error', (err) => {
        console.error(chalk.red(err));
    });
};
