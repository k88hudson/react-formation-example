var jsSrc = __dirname + '/src';

module.exports = {
  entry: {
    index: jsSrc + '/index.jsx'
  },
  devtool: 'source-map', // To support Firefox, switch to exec
  output: {
    path: __dirname + '/www',
    filename: '[name].bundle.js'
  },
  externals: {
    'react': 'React',
    'react/addons': 'React'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders:  ['babel-loader'],
        include: [jsSrc]
      },
      {
        test: /\.jsx$/,
        loaders:  ['babel-loader', 'jsx-loader'],
        include: [jsSrc]
      }
    ]
  }
};
