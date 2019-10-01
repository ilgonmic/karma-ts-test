function createWebpackConfig() {
    var config = {
        entry: "./main.ts",
      mode: 'development',
      resolve: {
        modules: [
          "node_modules"
        ]
      },
      output: {
          filename: "dist.js",
          libraryExport: "commonjs"
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
    config.devtool = 'source-map';
    
       return config;
    }

module.exports = createWebpackConfig()