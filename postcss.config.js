const plugins = [];
const prodPlugins = ['autoprefixer', 'cssnano', 'node-css-mqpacker', 'postcss-nested', 'postcss-import'];
const devPlugins = ['node-css-mqpacker', 'postcss-nested', 'postcss-import'];

if (process.env.NODE_ENV === 'production') {
    plugins.push(...prodPlugins);
} else {
    plugins.push(...devPlugins)
}

module.exports = {
    plugins,
}
