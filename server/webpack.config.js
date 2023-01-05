const path = require('path');

module.exports = {
  entry: './src/server.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
