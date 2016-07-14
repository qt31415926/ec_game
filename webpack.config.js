var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/client.js',
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist")
  }
};
