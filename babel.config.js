module.exports = function config(api) {
  const isProd = process.env.MODE === 'production'

  api.cache(isProd)

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow',
  ]

  const plugins = [
    [
      'module-resolver',
      {
        root: [
          './',
          './src',
        ],
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-runtime',
  ]

  const ignore = [
    '**/__test__',
    '**/**/__test__',
  ]

  return {
    presets,
    plugins,
    ignore,
  }
}
