const path = require('path'),
			webpack = require('webpack'),
			merge = require('webpack-merge'),
			baseWebpackConfig = require('./webpack.config');

let webpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  entry: {
    server_public: './src/entry-server.public.js',
		server_admin: './src/entry-server.admin.js'
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('./package.json').dependencies),
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': 'production'
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     })
//   ]
})
module.exports = webpackConfig
