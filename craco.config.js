const path = require("path")
const CracoLessPlugin = require("craco-less");;

const resolve = pathName => path.resolve(__dirname, pathName);

module.exports = {
  // less配置
  plugins: [
    {
      plugin: CracoLessPlugin,
    }
  ],
  // webpack配置
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils"),
    }
  }
}