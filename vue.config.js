const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // lintOnSave: true,
  // publicPath:'/dist/',
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  }
};
