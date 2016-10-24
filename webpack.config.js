module.exports = {
  entry: "./app/main.js",
  output: {
    path: "public",
    filename: "bundle.js"
  },
  devServer: {
    inline:true,
    contentBase: './public',
    port: 3333,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
