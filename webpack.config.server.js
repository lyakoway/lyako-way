const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.ts',
  output: {
    path: __dirname,
    filename: 'server.js',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      __mocks__: path.resolve(__dirname, './__mocks__'),
    },
    extensions: ['.ts', '.js'],
  },
  externals: [nodeExternals()],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: "tsconfig.server.json",
          }
        },
      },
    ],
  },
};
