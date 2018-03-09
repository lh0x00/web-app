const path = require('path')

module.exports = {
  resolve: {
    // these extensions are tried when resolving a file.
    modules: [
      path.join(`${__dirname}/`, './'),
      path.join(`${__dirname}/`, './node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },
}
