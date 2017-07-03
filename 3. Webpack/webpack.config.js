//generate HTML file
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
//crates seprat files
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//To seperate manifest
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require("webpack-chunk-hash");
//to access built-in plugins
const webpack = require('webpack');
const path = require('path');

const config = {
  //Entry path to js file from which we want to create bundle.js
  //In case of 2 or more entry points use
  //entry: {
  //  firstName: path,
  //  secondName path,
  //}

  entry: './src/index.js',
  //Output path is a place where webpack will crate bundle.js
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    sourceMapFilename: '[name].map'
  },
  //Loaders allows to bundle any static resource CSS,SASS, FONTS, IMG, DATA
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader', publicPath:'../'})
      },
      {
        test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader:'url-loader?limit=1024&name=img/[name].[ext]'
      },
    ]
  },
  //HMR
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  //Plugins - "things which can't be done by loaders for example minify"
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ title: 'Webpack simple boilerplate', filename: 'index.html' }),
    new ExtractTextPlugin("style/[name].[hash].css"),
    new webpack.optimize.CommonsChunkPlugin({ name: ["vendor", "manifest"], minChunks: Infinity, }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({ filename: "chunk-manifest.json", manifestVariable: "webpackManifest", inlineManifest: true })
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
    })
  ]
};

module.exports = config
