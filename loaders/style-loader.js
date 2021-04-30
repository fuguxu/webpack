let loaderUtil = require('loader-utils');
function loader(source) { 
  return  `let style =  document.createElement('style')
   style.innerHTML = ${JSON.stringify(source)} // stringify方法把内容变成一行
    document.head.appendChild(style)
    `
}
loader.pitch = function(remainingRequest) { // 使用内联loader的方式去加载less-loader和css-loader
  let str = `
    let style =  document.createElement('style')
    style.innerHTML = require(${loaderUtil.stringifyRequest(this, '!!' + remainingRequest)}) 
   document.head.appendChild(style)
  `
  return str
}

module.exports  = loader