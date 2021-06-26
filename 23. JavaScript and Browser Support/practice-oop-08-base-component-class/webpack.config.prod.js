const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/", // Jab dynamic imports gadhbadh karne lagein
  },
  mode: "production",
  //   devServer: {
  //       contentBase: "./"
  //   }
  devtool: "cheap-source-map",
  plugin: [
      new CleanPlugin.CleanWebpackPlugin()
  ]
};
