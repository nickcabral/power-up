const path = require('path');

module.exports = {
  entry: './src/router.tsx',
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js', 'json' ],
    alias: {
      "@comps": path.resolve(__dirname, 'src/components')
    }
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
