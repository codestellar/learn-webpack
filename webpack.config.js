const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  mode: "production",
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.js$/, // Apply to all JS files
        use: [
          {
            loader: "expose-loader",
            options: {
              exposes: ["foo"], // Expose 'foo' globally
            },
          },
        ],
      },
      {
        test: /\.css$/, // Apply to all CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin((percentage, message) => {
      console.log(`${(percentage * 100).toFixed()}% ${message}`);
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "index.html" }),
  ],
  output: {
    filename: "main.js",
    library: "prim",
    libraryTarget: "var",
    globalObject: "this",
  },
};
