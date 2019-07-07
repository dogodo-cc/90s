module.exports = function(api) {
  api.cache();
  const presets = [
    [
      '@babel/preset-env',
      {
        "useBuiltIns": 'usage',
        "corejs": 3,
        "targets": {
          "browsers": ['last 2 versions', 'not ie < 11']
        }
      }
    ]
  ];

  const plugins =  [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 2
      }
    ]
  ];

  return {
    presets,
    plugins
  }
}