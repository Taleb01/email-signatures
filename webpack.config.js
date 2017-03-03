const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{ 
      test: [/\.js$/, /\.jsx$/], 
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.sass$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            camelCase: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')({
                  browsers: 'last 2 versions',
                }),
              ];
            }
          },
        },
        {
          loader: 'sass-loader',
          options: {
            indentedSyntax: true,
          }
        },
      ]
    }],
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    extensions: [".jsx", ".js", ".sass"],
  },
  plugins: [
    HtmlWebpackPluginConfig
  ],
}
