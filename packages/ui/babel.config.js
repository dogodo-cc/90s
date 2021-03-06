const presets = [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "usage",
      "corejs": 2,
      targets: {
        firefox: "72",
        chrome: "80",
        safari: "13",
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
]

module.exports = { presets, plugins };