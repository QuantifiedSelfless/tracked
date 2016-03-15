var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'eval',
  entry: {
    app : [
      './lib/index.js'],
  },
  output: {
    path: path.join(__dirname, './public/js/'),
    filename: `qself-news-[name].js`,
    publicPath: '/js/'
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
    }),
  ],
  node: {
    fs: "empty"
  },
  resolve: {
    alias: {
      // 'redux-devtools/lib': path.join(__dirname, '..', '..', 'src'),
      // 'redux-devtools': path.join(__dirname, '..', '..', 'src'),
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js']
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    noParse: [/acorn\/dist/],   // supress Critical dependencies: acorn/dist/walk.js
    loaders: [
    {
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: [path.join(__dirname,'./lib')]
    },
    {
      test: /\.xml$/,
      loader: "raw"
    },
    {
      test: /\.json$/,
      loaders: ['json-loader']
    },
    {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};



//
// var path = require('path');
// var webpack = require('webpack');
// var CRAFTML_VERSION = require('./craftml/package.json').version
// module.exports = {
//   // devtool: "source-map",
//   entry: {
//     app : [
//       './craftml-ide/lib/browser',
//       './craftml-preview/lib/browser.js',
//       './craftml/lib/browser/webpack.js',
//       './start.js']
//   },
//   output: {
//     path: path.join(__dirname, '../craftml.io/public/js/'),
//     filename: `craftml-[name].js`,
//     publicPath: '/js/'
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//         'process.env': {
//           'NODE_ENV': JSON.stringify('production')
//         }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//     }),
//   ],
//   node: {
//     fs: "empty"
//   },
//   resolve: {
//     alias: {
//       'react': path.join(__dirname, 'node_modules', 'react')
//     },
//     extensions: ['', '.js']
//   },
//   resolveLoader: {
//     'fallback': path.join(__dirname, 'node_modules')
//   },
//   module: {
//     noParse: [/acorn\/dist/],   // supress Critical dependencies: acorn/dist/walk.js
//     loaders: [
//     {
//       test: /\.js$/,
//       loaders: ['babel'],
//       exclude: /node_modules/,
//       include: [__dirname,
//         path.join(__dirname,'./craftml-ide/lib'),
//         path.join(__dirname,'./craftml-preview/lib'),
//         path.join(__dirname,'./craftml/lib')
//       ]
//     },
//     {
//       test: /\.xml$/,
//       loader: "raw"
//     },
//     {
//       test: /\.json$/,
//       loaders: ['json-loader']
//     },
//     {
//       test: /\.css?$/,
//       loaders: ['style', 'raw'],
//       include: __dirname
//     }]
//   }
// };
