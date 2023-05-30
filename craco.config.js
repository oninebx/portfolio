const path = require("path")
module.exports = {
  webpack: {
    alias: {
      "@images": path.join(path.resolve(__dirname, "./src/assets/images")),
    }
  },
  style: {
    css: {
      loaderOptions: {
        modules: {
          // Export class names from CSS modules as original and in camelCase
          // Say your class is called .top-bar, then you can refer to it
          // in your *.jsx/*.tsx files as styles["top-bar"] or styles.topBar
          // See https://github.com/webpack-contrib/css-loader#exportlocalsconvention
          exportLocalsConvention: "camelCase",
        }
      }
    },
    sass: {
      loaderOptions: {
        additionalData: `@import "src/assets/styles/index.scss";`,
      },
    }
  },
  
}