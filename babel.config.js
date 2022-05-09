module.exports = {
    presets: [
        '@babel/typescript',
    ],
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        'transform-html-import-to-string',
        '@loadable/babel-plugin',
    ],
};
