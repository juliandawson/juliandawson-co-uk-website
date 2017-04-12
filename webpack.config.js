var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    "polyfills": __dirname + "/src/polyfills",
    "vendor": __dirname + "/src/vendor",
    "app": __dirname + "/src/main"
  },
  output: {
    path: __dirname + "/src/js",
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: "source-map",
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ["app", "vendor", "polyfills"]
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        htmlLoader: {
          minimize: true,
          removeAttributeQuotes: false,
          caseSensitive: true,
          customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
          ],
          customAttrAssign: [/\)?\]?=/]
        },
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      beautify: false,
      output: {
        comments: false
      },
      mangle: {
        screw_ie8: true
      },
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
    })
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ["awesome-typescript-loader", "angular2-template-loader"],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  node: {
    global: true,
    crypto: "empty",
    process: false,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}
