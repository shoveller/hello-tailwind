/**
 *
 * @type {PluginCreator<postcssPresetEnv.pluginOptions> | postcssPresetEnv}
 */
const postcssPresetEnv = require('postcss-preset-env')({
  stage: 0,
  features: {
    'nesting-rules': false,
    'color-mod-function': { unresolved: 'warn' },
  },
  browsers: '> 1% in KR, not dead, ie 10',
  autoprefixer: { grid: true },
})

/** @type {import('postcss').Config} */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    postcssPresetEnv,
  ],
};
