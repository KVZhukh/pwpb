// function HtmlWebpackPluginRemove(test) {
//     this.test = test;
// }

// export default () => {
//     aplcompiler.plugin('compilation', function (compilation) {
//         // Hook into html-webpack-plugin event
//         compilation.plugin('html-webpack-plugin-after-html-processing', function (pluginData, cb) {
//             pluginData.html = pluginData.html.replace(test, '');

//             if (cb) {
//                 cb(null, pluginData);
//             } else {
//                 return Promise.resolve(pluginData);
//             }
//         });
//     });
// }

// module.exports = HtmlWebpackPluginRemove;
