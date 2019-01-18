const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          sourceMap: false,
          compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true
          },
          mangle: {
            reserved: ['$super', '$', 'exports', 'require']
          },
          output: {
            comments: false
          } 
        }
      })
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
