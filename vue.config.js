const { defineConfig } = require("@vue/cli-service");
const jQueryPath = "jquery/dist/jquery.js";
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: jQueryPath,
        $: jQueryPath,
        "window.jQuery": jQueryPath,
      }),
    ],
  },
});
