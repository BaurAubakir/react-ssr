module.exports = {
  // Tell webpack to run babel on every file it runs trought
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/preset-env', { targets: ['last 2 versions'] }]
          ]
        }
      }
    ]
  }
};
