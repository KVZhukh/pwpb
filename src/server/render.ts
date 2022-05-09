import { Request, Response } from 'express';

export default () => async (req: Request, res: Response) => {
    const html = `
    <!DOCTYPE html>
        <html lang="ru" dir="ltr">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            <meta name="format-detection" content="telephone=no" />
        </head>
        <body>
            <div id="root">123/div>
        </body>
    `;
    console.log('req', req);
    res.status(200).send(html);
};
