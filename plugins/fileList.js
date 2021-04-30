class fileList{
  constructor({fileName}) {
    this.fileName = fileName
  }
  apply(compiler){
    compiler.hooks.emit.tap('fileList', (compilation) => {
      let assets = compilation.assets ;
      console.log(assets['index.js'].size())
      let content = '# 文件名称   文件大小\r\n'
      Object.entries(assets).forEach(([fileName,statObj]) =>{
        content += `- ${fileName}    ${statObj.size()}\r\n`
      })
      compilation.assets[this.fileName] = {
        source(){
          return content
        },
        size() {
          return content.length
        }
      }
    })
  }
}

module.exports = fileList