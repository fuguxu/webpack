function com(str){
  var arr = str.split('');
  var init = 0;
  var last = arr.length-1;
  var code = ['()','{}','[]']
  while(init < last) {
    if (!code.includes(`${arr[init]}${arr[last]}`)) {
      return false
    }
    init++
    last--
  }
  return true
}
var s = com('{{[]}}')

console.log(s)

//防抖函数: 在事件触发n秒后再执行回调，如果在n秒内多次触发，则重新计时
function debounce(fn,delay) {
  return function(){
    var that = this;
    clearTimeout(fn.timerId)
    fn.timerId = setTimeout(function(){
      fn.apply(that,[...arguments])
    },delay)
  }
}

function fn(){
  console.log('fn')
}
// var deFn = debounce(fn,500)
// deFn()
// deFn()
// deFn()

// 节流函数: 在某段时间内只能触发一次函数，如果多次触发，则只有一次生效
function throttle(fn, delay) {
  var last = 0 ;
  return function() {
    var now = Date.now()
    var that = this;
    if (now - last > delay) {
      fn.apply(that,[...arguments])
      last = now;
    }
  }
}

var thFn = throttle(fn,1000)

thFn()
thFn()
thFn()


// 算法 在一个排好序的数组中查找给定的某一项下标
//时间复杂度 O(logn)
function findIndex(arr,val,left = 0,right){
  right = right || arr.length-1;
  let middle = Math.floor((left + right)/2)
  if(arr[middle] < val) {
    return findIndex(arr,val,middle,right)
  } else if(arr[middle] > val) {
    return findIndex(arr,val,left,middle)
  } else {
    return middle
  }
}
//时间复杂度 O(n/2)
function findIdx(arr,val) {
  let startIndex = 0;
  let lastIndex = arr.length -1 ;
  while (startIndex<lastIndex) {
    let startVal = arr[startIndex]
    let lastVal = arr[lastIndex]
    if(startVal !== val && lastVal !==val) {
      startIndex++
      lastIndex--
    } else {
      return startVal === val ? startIndex : lastIndex
    }
  }
}

//算法排序(升序) 冒泡
function sort(arr){
  let length = arr.length;
  for(let i =0 ;i < length-1;i++) {
    for(let j = 0; j < length-1-i;j++ ){
      if(arr[j] > arr[j+1]){
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

// 函数柯里化: 只传递给函数一部分参数来调用它, 让他返回一个函数处理剩下的参数
// 1.参数的缓存复用； 2.提前确认(有些判断可以先确定下来，以免执行函数时每次去判断)； 3.延迟计算/运行(bind的实现就是基于柯里化)
function curry(fn,...outargs){
  let originArglength = fn.length
  let _that = this;
  return function(...innerargs){
    let args = [...outargs,...innerargs]
    if (originArglength > args.length) {
      return curry.apply(_that,fn,args)
    }

    return fn.apply(this,args)
  }
}

// toString  valueOf  symbol.toPrimitive 的规则及用法