var config = {
  mode:'development',
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
      }
    ]
  }
};

module.exports = config;
