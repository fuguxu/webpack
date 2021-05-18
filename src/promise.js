
class MyPromise {
  constructor(handler){
    this.status = 'PENDING';
    this.value = null ;
    this.resolveQueues = [];
    this.rejectQueues = [];
    handler(this.resolve.bind(this), this.reject.bind(this))
  }
  static _resolve (value) {
    // 如果参数是MyPromise实例，直接返回这个实例
    if (value instanceof MyPromise) return value
    return new MyPromise(resolve => resolve(value))
  }
  
  resolve(val){
    if (this.status !=='PENDING') return
    setTimeout(()=>{
      this.status = 'RESOLVED'
      this.value = val;
      let cb
      while (cb = this.resolveQueues.shift()) {
        cb(val)
      }
    },0)
    
  }

  reject(err) {
    if (this.status !=='PENDING') return
    setTimeout(()=>{
      this.status = 'REJECTED'
      this.value = err;
      while (cb = this.rejectQueues.shift()) {
        cb(err)
      }
    },0)
    
  }
  then(sfn,efn){
    let {status, value} = this
    return new MyPromise((sfnNext, efnNext)=>{
      let fulfilled = (val) => {
        try{
          if (typeof sfn !== 'function') {
            sfnNext(val)
          } else {
            let res = sfn(val)
            if(res instanceof MyPromise) {
              res.then(sfnNext.bind(this),efnNext.bind(this))
            } else {
              sfnNext(res)
            }
          }
        }catch(err){
          efnNext(err)
        }
        
      }
      let rejected = (val) => {
        try{
          if (typeof efn !== 'function'){
            efnNext(val)
          } else {
            let res = efn(val)
            if(res instanceof MyPromise) {
              res.then(sfnNext.bind(this),efnNext.bind(this))
            } else {
              efnNext(res)
            }
          }
        }catch(err){
          efnNext(err)
        }
      }
      switch(status) {
        case 'PENDING':
          this.resolveQueues.push(fulfilled);
          this.rejectQueues.push(rejected);
          break;
        case 'RESOLVED':
          sfn(value);
          break;
        case 'REJECTED':
          efn(value);
          break;
      }

    })
  }
}


// new MyPromise((resolve,reject) => {
//   setTimeout(()=>{
//     resolve(0)
//   },2000)
// }).then(res =>{
//   console.log('res',res)
//   return 1
// }).then(res1=>{
//   console.log('res1',res1)
//   return new MyPromise((s,r)=>{
//     setTimeout(() => {
//       s(2)
//     }, 0);
//   })
// }).then(res2 =>{
//   console.log('res2',res2);
//   return 3
// }).then(res3 => {
//   console.log('res3',res3)
// })

/** 
MyPromise._resolve().then(() => {
  console.log(0);
  return MyPromise._resolve(4);
}).then((res) => {
  console.log(res)
})

MyPromise._resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() =>{
  console.log(6);
})
**/

/**
 * http:缓存机制
 * 1.expires: 过期时间，服务端决定资源到期的时间，如果请求的时间在此时间之后则返回资源，http1.0的产物，现在很少用了
 * 2.cache-control: 有很多属性，public: 允许代理服务器缓存；pricite；max-age:多少时间以内使用缓存；no-cache: 协商缓存，服务端查看文件内容是否变化；no-store: 不使用缓存，返回全新内容;
 * 3.last-modified: 最后修改时间,跟浏览器的if-modified-since(浏览器在缓存中获取)结合使用
 * 4.etag服务器给资源唯一的标识，资源内容改变，此值会变化，与if-none-match(浏览器在缓存中获取)结合使用
 * 
 * credentials
 * access-control-allow-origin
 * access-control-allow-credentials
 * withCredentials
 * 
 */


// 手写bind
Function.prototype.myBind = function(ctx, ...args) {
  let self = this;
  if (typeof self !== 'function') throw new TypeError(self + 'must be a function')
  let innerfn =  function (...args1){
    let arg = [...args,...args1]
    console.log(new.target)
    if( new.target /**this instanceof innerfn*/) { // 如果myBind之后要用new的话，需要实现以下new操作
      // let obj = {};
      // obj.__proto__ = self.prototype; // 或者let obj = Object.create(self.prototype)
      let obj = Object.create(self.prototype)
      let result = self.call(obj,...arg);
      let type = typeof result
      return  (type === 'object' || type==='function') && type!==null ? result : obj
    } else {
      return self.call(ctx,...arg)
    }
  }
  return innerfn
}

function outerfn(...args) {
  console.log(this)
  this.name = 'jack'
  console.log(args)
  // return {test:222}
}
let bindfn = outerfn.myBind({a:3},2,2);

// let newFn =new bindfn(3)
// console.log(newFn, newFn instanceof  outerfn)

// 手写call
function getGlobal(){
  return this
}
Function.prototype.myCall = function(ctx,...args) {
  if(typeof this !=='function') throw new TypeError(this+'is not a function')
  let type = typeof ctx;
  if(ctx===undefined || ctx===null) ctx = getGlobal()
  if (type !=='object' && type !=='symbol'&& type !=='bigint'&& type !=='function') ctx = new ctx.constructor(ctx)
  let __fn__ = Symbol('__fn__')
  ctx[__fn__] = this;
  let result = ctx[__fn__](...args);
  delete ctx[__fn__]
  return result
}

function fncall(...args) {
  console.log(this)
  console.log(args)
}
fncall.myCall({call:3},2,2)


//实现instanceof
function myInstanceof(left, right) {
  /**
   * 在此增加一些边界处理即可
   */
  let __proto__ = left.__proto__;
  while (true) {
    if (__proto__ === right.prototype) return true
    __proto__ = __proto__.__proto__
    if(__proto__ === null)  return false
  }
}

console.log(myInstanceof(4,Number))

// 深拷贝函数
function cloneDeep(obj){
  if (obj===null || undefined) return obj
  let type = typeof obj
  if(type ==='symbol') return Symbol(obj)
  if(type === 'bigint') return BigInt(obj)
  if(type!=='object') return obj
  let newObj = new obj.constructor()
  Object.keys(obj).forEach(key=>{
    newObj[key] = cloneDeep(obj[key])
  })
  return newObj
}