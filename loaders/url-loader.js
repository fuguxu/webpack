let loaderUtils = require('loader-utils');
let mime = require('mime');
function urlLoader(resource) {
  let {limit} = loaderUtils.getOptions(this) ||{};
  if(limit && limit > resource.length) {
    return `module.exports = "data:${mime.getType(this.resourcePath )};base64,${resource.toString('base64')}"`
  } else {
    return require('./img-loader.js').call(this,resource)
  }
}

urlLoader.raw = true; // 表示以buffer的形式获取内容
module.exports = urlLoader