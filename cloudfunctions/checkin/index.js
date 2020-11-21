// 云函数入口文件
const cloud = require('wx-server-sdk')
var seq = 0

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const stu = db.collection("student")
  const date = new Date()
  
  const wxContext = cloud.getWXContext()
  stu.add({
    data: {
    "time" : date.toISOString(),
    "seq" : seq,
    "appid" : context.appid
  },
  success: function(res) {
    seq +=1;
    console.log(res)
  }
})
}