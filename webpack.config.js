var config = {
  mode: "development",
  entry: "./main.js",
  output: {
    path: "./build",
    filename: "index.js"
  },
  devServer: {
    inline: true,
    port: 9900
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /.css?$/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
};

module.exports = config;
