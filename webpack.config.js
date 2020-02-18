const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/bundle'), // it has to be absolute path
    filename: 'index_bundle.js',
    // below redirects all server requests to index.html
    // publicPath: '/' // the path where index.html will look for index_bundle.js
    // in this case it is same folder as index.html itself, so no need to specify
  },
  devServer: {  // optional
    historyApiFallback: true  // if a route is not found, it is redirected to the root
    /* inline: true,
    port: 8001 */
  },
  module: { // a module is an import in a .js file
    rules: [
      {
        test: /\.(js|jsx)$/,  // combination of /\.js$/ and /\.jsx?$/
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [ // allows for several loaders to be used, marked as array
          // odred is important!, webpack will execute loaders in reverse order
          'style-loader', // makes .css available to index.html
          'css-loader'  // will allow imports in .js files
        ]
      }
    ]
  },
  plugins: [  // applied on the bundle before it is output
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/peanut.png'
    }),
    /* new webpack.optimize.UglifyJsPlugin({}) */ // removed
  ],
}