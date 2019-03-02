const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config')

const bundleAnalyzer = new BundleAnalyzerPlugin({
  analyzerMode: 'disabled',
  // for all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
  generateStatsFile: true,
  // will be available at `.next/stats.json`
  statsFilename: 'stats.json',
})

module.exports = withCustomBabelConfigFile({
  dir: 'src/pages',
  distDir: 'dist',
  pageExtensions: ['jsx', 'js'],
  useFileSystemPublicRoutes: false,
  webpack: (config) => {
    // perform customizations to config
    config.plugins.push(bundleAnalyzer)
    // important: return the modified config
    return config
  },
  babelConfigFile: path.resolve('babel.config.js'),
})
