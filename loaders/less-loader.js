let less = require('less')
function loader(source) {
  let css = ''
  less.render(source, (err, r) =>{ // 是同步但是用的是回调
    css = r.css
  })
  return css
}

module.exports  = loader