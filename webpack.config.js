const path = require('path');

module.exports = {
  entry: './src/js/script.js',
  output: {
    filename: 'main.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production'
};