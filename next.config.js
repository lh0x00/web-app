const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const bundleAnalyzer = new BundleAnalyzerPlugin({
  analyzerMode: 'disabled',
  // for all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
  generateStatsFile: true,
  // will be available at `.next/stats.json`
  statsFilename: 'stats.json',
})

module.exports = {
  distDir: 'build',
  pageExtensions: ['jsx', 'js'],
  useFileSystemPublicRoutes: false,
  webpack: (config) => {
    // perform customizations to config
    config.plugins.push(bundleAnalyzer)
    // important: return the modified config
    return config
  },
}
