// Webpack configuration
var path = require("path");
var webpack = require("webpack");

module.exports = {
  cache: true,
  //context: path.join(__dirname, "client"),
  entry: "./app/scripts/app.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {  
        test: /\.(js|jsx)$/, 
        exclude: /(node_modules|bower_components)/, 
        loader: "babel-loader" 
      },{
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/, 
        loader: "style!css!sass"
      },{
        test: /\.(png|jpg|woff|woff2|ttf|svg|eot)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    // Optimize
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        // Signal production mode for React JS libs.
        NODE_ENV: JSON.stringify("production")
      }
    }),
    // Manually do source maps to use alternate host.
    new webpack.SourceMapDevToolPlugin(
      "bundle.js.map",
      "\n//# sourceMappingURL=http://127.0.0.1:3001/dist/[url]")
  ]
};