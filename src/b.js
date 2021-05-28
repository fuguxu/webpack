// var obj = {
//   "code":"10000", 
//   "msg": "成功", 
//   "data": [
//       {
//           "parentCategoryId": "1", 
//           "parentCategoryName": "移动双V", 
//           "adTagCategoryInfo": [
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "YDSV_STATIS_U_211101", 
//                   "tagName": "测试标签2", 
//                   "tagValue": null, 
//                   "dataType": "NUMBER", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "JBSX_01_U_113032", 
//                   "tagName": "发热哇", 
//                   "tagValue": null, 
//                   "dataType": "BOOL", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "YDSV_STATIS_U_555530", 
//                   "tagName": "测试标签", 
//                   "tagValue": null, 
//                   "dataType": "BOOL", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "YDSV_STATIS_U_441014", 
//                   "tagName": "测试标签2", 
//                   "tagValue": null, 
//                   "dataType": "NUMBER", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "YDSV_STATIS_U_025304", 
//                   "tagName": "标签1", 
//                   "tagValue": null, 
//                   "dataType": "BOOL", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "YDSV_STATIS_U_545344", 
//                   "tagName": "标签1", 
//                   "tagValue": null, 
//                   "dataType": "BOOL", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "YDSV_STATIS_U_422222", 
//                   "tagName": "标签1", 
//                   "tagValue": null, 
//                   "dataType": "BOOL", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "YDSV_STATIS_U_505502", 
//                   "tagName": "标签1", 
//                   "tagValue": null, 
//                   "dataType": "BOOL", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "YDSV_STATIS_U_505504", 
//                   "tagName": "标签1", 
//                   "tagValue": null, 
//                   "dataType": "BOOL", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "YDSV_STATIS_U_245532", 
//                   "tagName": "标签1", 
//                   "tagValue": null, 
//                   "dataType": "BOOL", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "YDSV_STATIS_U_520245", 
//                   "tagName": "标签1", 
//                   "tagValue": null, 
//                   "dataType": "BOOL", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "YDSV_STATIS_U_522245", 
//                   "tagName": "标签1", 
//                   "tagValue": null, 
//                   "dataType": "BOOL", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 2, 
//                   "categoryName": "轻会员", 
//                   "tagId": "1621221674093", 
//                   "tagName": "标签1", 
//                   "tagValue": null, 
//                   "dataType": "BOOL", 
//                   "tagConfig": ""
//               }
//           ]
//       }, 
//       {
//           "parentCategoryId": "7", 
//           "parentCategoryName": "基本属性", 
//           "adTagCategoryInfo": [
//               {
//                   "categoryId": 9, 
//                   "categoryName": "基础信息", 
//                   "tagId": "JBSX_01_U_242200", 
//                   "tagName": "性别", 
//                   "tagValue": null, 
//                   "dataType": "ENUM", 
//                   "tagConfig": ""
//               }, 
//               {
//                   "categoryId": 8, 
//                   "categoryName": "性别", 
//                   "tagId": "JBSX_01_U_324500", 
//                   "tagName": "ly测试标签名称", 
//                   "tagValue": null, 
//                   "dataType": "ENUM", 
//                   "tagConfig": ""
//               }
//           ]
//       }
//   ], 
// }


// let data = obj.data.map(item => {
//   item.adTagCategoryInfo = item.adTagCategoryInfo.reduce((p,c)=>{
//     console.log(p)
//     let sub = p.find(sub=> sub.categoryId === c.categoryId)
//     if(sub) {
//        sub.children.push(c)
//     } else {
//       p.push({
//         categoryId:c.categoryId,
//         categoryName: c.categoryName,
//         children:[]
//       })
//     } 
//     return p
//   },[])
//   return item
// })

// console.log(data)

// let arrFn = () =>{
  // this.name = 'jack'
// }

// let ob = new arrFn()

// console.log(ob)
// console.log(ob)


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