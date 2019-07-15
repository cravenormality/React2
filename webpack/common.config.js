
module.exports = {
  entry: {
    app: ['./src/bootstrap.js']
  },

  resolve: {
    extensions: ['.js', '.scss'],

    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        type: 'javascript/auto',
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: '/',
        },
      },

      {
        test: /\.(mp4|webm)$/,
        loader: 'url?limit=10000',
      },

      {
        test: /\.(csv|tsv)$/,
        loader: 'csv-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: '/'
        }
      }
    ],
  },
};
