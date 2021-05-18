const HtmlWebpackPlugin = require('html-webpack-plugin');
class inlineSourcePlugin{
  constructor({match}) {
    this.reg = match;
  }
  apply(compiler){
    compiler.hooks.compilation.tap('inlineSourcePlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync('inlineSourcePlugin',(data,cb) =>{
        let headTags = []
        let bodyTags = []
        data.headTags.forEach(headTag =>{
          headTags.push(this.processTag(headTag,compilation))
        })
        data.bodyTags.forEach(bodyTag =>{
          bodyTags.push(this.processTag(bodyTag,compilation))
        })
        data = {
          ...data,
          headTags,
          bodyTags
        }
        cb(null,data)
      })
    })
  }
  processTag(tag,compilation) {
    let newTag
    let url
    if (tag.tagName === 'link' && this.reg.test(tag.attributes.href)){
      newTag = {
        tagName: 'style',
      }
      url = tag.attributes.href
    }
    if (tag.tagName === 'script' && this.reg.test(tag.attributes.src)){
      newTag = {
        tagName: 'script',
      }
      url = tag.attributes.src
    }
    if (newTag)  {
      newTag.innerHTML = compilation.assets[url].source()
      delete compilation.assets[url]
      return newTag
    }
    return tag
  }
}

module.exports = inlineSourcePlugin