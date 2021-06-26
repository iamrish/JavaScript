const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname , "assets", "scripts"),
    publicPath: "assets/scripts/" // Jab dynamic imports gadhbadh karne lagein 
  },
  mode: "development",
//   devServer: {
//       contentBase: "./"
//   }
  devtool: "cheap-module-eval-source-map", 
  plugin: [
    new CleanPlugin.CleanWebpackPlugin()
]
};
