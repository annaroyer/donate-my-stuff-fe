module.exports = {
  entry: {
    main: "./lib/index.js",
  },
  output: {
    filename: "main.bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(png|svg|jpg|gif)$/, loaders: ["file-loader"] }
    ]
  }
}
