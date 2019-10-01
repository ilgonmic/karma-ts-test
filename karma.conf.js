// environment variables
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {

config.set({
  "singleRun": true,
  "autoWatch": false,
  "basePath": "/Users/ilya.goncharov/repos/check-js-test/build/js/packages/check-js-test-test/node_modules",
  "files": [
    "/Users/ilya.goncharov/repos/karma-ts-test/check-js-test-test.js"
  ],
  "frameworks": [
    "source-map-support",
    "mocha"
  ],
  "browsers": [
    "ChromeHeadless"
  ],
  "reporters": [
    "progress"
  ],
  "preprocessors": {
    "/Users/ilya.goncharov/repos/karma-ts-test/check-js-test-test.js": [
      "sourcemap",
      "webpack"
    ]
  }
});

// webpack config
function createWebpackConfig() {
var config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
   
    ]
  },

    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    }
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'inline-source-map';

   return config;
}

config.set({webpack: createWebpackConfig()});


}
