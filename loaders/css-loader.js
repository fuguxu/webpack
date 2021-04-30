function loader(source) {
  let reg = /url\((.+?)\)/g;
  let position = 0;
  let content = '';
  let arr  = ['let list = []'];
  while(content = reg.exec(source)) {
    let [matchUrl, gr] = content; 
    let last = reg.lastIndex - matchUrl.length;
    arr.push(`list.push(${JSON.stringify(source.slice(position,last))})`); 
    position = reg.lastIndex;

    arr.push(`list.push('url(' + require(${gr})+')')`)
  }
  arr.push(`list.push(${JSON.stringify(source.slice(position))})`)
  arr.push(`module.exports=list.join('')`)
  return arr.join('\r\n')
}

module.exports  = loader