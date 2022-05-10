import HtmlWebpackPlugin from 'html-webpack-plugin';
import juice from 'juice';

/**
 * Инлайнит css в теги.
 */

export default () => ({
    apply: (compiler: any) => {
        compiler.hooks.compilation.tap('cssInline', (compilation: any) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('cssInline', (data, cb) => {
                console.log('data juice', data);
                juice.excludedProperties = [
                    'box-sizing',
                    'border-spacing',
                    'word-wrap',
                    'vertical-align',
                    'font-size',
                    'border-collapse',
                    'background-color',
                    'margin',
                    'line-height',
                    'font-family',
                    'overflow',
                    'opacity',
                    '-webkit-hyphens',
                    '-ms-hyphens',
                    'hyphens',
                    '-webkit-text-size-adjust',
                    '-ms-text-size-adjust',
                    'font-weight',
                    'min-width',
                ];
                data.html = juice(data.html, { removeStyleTags: false, applyAttributesTableElements: false });
                cb(null, data);
            });
        });
    },
});
