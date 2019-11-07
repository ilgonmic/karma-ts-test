module.exports = function (config) {

  config.set({
    "singleRun": true,
    "autoWatch": false,
    "files": [
      "/Users/ilya.goncharov/repos/karma-ts-test/test.js"
    ],
    "frameworks": [
      "mocha"
    ],
    "browsers": [
      "ChromeHeadless"
    ],
    "reporters": [
      "progress"
    ]
  });
};