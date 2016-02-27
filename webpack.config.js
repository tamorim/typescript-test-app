module.exports = {
  entry: './src/index.tsx',
  output: {
    path: './dist/',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    alias: {
      'typings': './typings',
      'interfaces.d.ts': './src/interfaces.d.ts'
    }
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader!ts-loader'
      },
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  devtool: 'source-map',
  quiet: true,
  noInfo: true
};
