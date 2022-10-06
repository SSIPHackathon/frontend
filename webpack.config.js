module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          enforce: "pre",
          
          use: ["source-map-loader"],
        },
      ],
    },
    ignoreWarnings: [/Failed to parse source map/],
  };