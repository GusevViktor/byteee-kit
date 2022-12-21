// const config = require("../webpack.config")
module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/preset-scss',
  ],
  "framework": "@storybook/react",
  staticDirs: ['../public'],
  // staticDirs: [{ from: '../public', to: '/static' }],
  core: {
    builder: "webpack5"
  },
    webpackFinal:async (config) => {
        config.module.rules =  [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.svg$/i,
                use: ["@svgr/webpack", "file-loader"],

            }
        ]
        return config
    },
};