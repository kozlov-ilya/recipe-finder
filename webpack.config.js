const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "development";

const devMode = mode === "development";

const devtool = devMode ? "source-map" : undefined;

module.exports = {
  mode,
  devtool,

  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "dist"),
    filename: "build.js",
    clean: true,
  },

  module: {
    rules: [
      { test: /\.html$/i, loader: "html-loader" },

      {
        test: /\.(css|sass|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Recipe Finder",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
