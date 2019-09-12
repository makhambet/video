module.exports = {
    // proxy API requests to Valet during development
    devServer: {
      proxy: 'http://api-1.test'
    },
  }