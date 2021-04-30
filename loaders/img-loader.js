let loaderUtils = require('loader-utils');
function imgLoader(resource) {
 let options = loaderUtils.getOptions(this) ||{};
 let name = options.name.split('/')
 let fileName =  loaderUtils.interpolateName(this,name.pop(),{content: resource});
 this.emitFile(`${name}/${fileName}`,resource); // 发射一个文件即产生一个文件
 return `module.exports="${name}/${fileName}"`
}

imgLoader.raw = true; // 表示以buffer的形式获取内容
module.exports = imgLoader