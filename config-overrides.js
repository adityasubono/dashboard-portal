const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

process.env.CI = "false";
const addCustomize = () => (config) => {
  if (config.output.publicPath) {
    config.output.publicPath =
      process.env.NODE_ENV === "production"
        ? "/react-antd-admin-template/"
        : "/";
  }
  if (config.resolve) {
    config.resolve.extensions.push(".jsx");
  }
  return config;
};
module.exports = override(
  // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true, // 自动打包相关的样式
  }),

  // 使用less-loader对源码中的less的变量进行重新指定
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#222C64",
      "@link-color": "#1890ff", // link color
      "@success-color": "#52c41a", // success state color
      "@warning-color": "#faad14", // warning state color
      "@error-color": "#f5222d", // error state color
      "@font-size-base": "14px", // major text font size
      "@heading-color": "rgba(0, 0, 0, 0.85)", // heading text color
      "@text-color": "rgba(0, 0, 0, 0.65)", // major text color
      "@text-color-secondary": "rgba(0, 0, 0, 0.45)", // secondary text color
      "@disabled-color": "rgba(0, 0, 0, 0.25)", // disable state color
      "@border-radius-base": "4px", // major border radius
      "@border-color-base": "#d9d9d9", // major border color
      "@box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)", // major shadow for layers
    },
  }),

  // 配置路径别名
  addWebpackAlias({
    "@": resolve("src"),
  }),
  addCustomize()
);
