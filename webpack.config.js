import { fileURLToPath } from 'url';
import { dirname } from 'path';
const path = require('path');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

module.exports = {
  entry: './src/js/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development'
};