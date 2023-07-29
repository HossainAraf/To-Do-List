import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(process.cwd(), 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
    ],
  },
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Development',
      template: './src/index.html',

    }),
  ],

};