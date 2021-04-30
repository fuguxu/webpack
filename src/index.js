// let str = require('./a.js')
// let path = require('path')
// let fs = require('fs')
// let code = fs.readFileSync(path.resolve(__dirname,'./a.js'),'utf-8')
// console.log(code,typeof code)
// console.log(str)

// fs.writeFileSync('./b.js',code+'\n' + 'console.log(2)')
// let p =  require('./img.jpg') // webpack只能识别js，如果其他文件不配置相关loader的话，打包就会报错
// console.log(p)
// let img = document.createElement('img');
// img.src = p;
// document.body.appendChild(img)

let l = require('./index.less');
console.log(l);