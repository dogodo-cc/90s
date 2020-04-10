const presets = [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "usage",
      "corejs": 2,
      targets: {
        firefox: "65",
        chrome: "70",
        safari: "12",
      },
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

module.exports = { presets, plugins, sourceType: 'unambiguous' };