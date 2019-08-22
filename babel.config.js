const presets = [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "usage",
      "corejs": 3,
      "targets": {
        "browsers": ["last 2 versions", "not ie < 11", "safari > 11"]
      }
    }
  ]
];

const plugins = [
  [
    "@babel/plugin-transform-runtime",
    {
      "corejs": 2
    }
  ],
  ["@babel/plugin-syntax-dynamic-import"],
  [
    "component",
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]
]

module.exports = { presets, plugins };