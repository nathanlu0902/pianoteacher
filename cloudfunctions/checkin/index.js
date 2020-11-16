// 云函数入口文件
const cloud = require('wx-server-sdk')
const db = wx.cloud.database()
const stu = db.collection("student")
const date = new Date()
const seq = 0

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  stu.add({
    data: {
    "time" : date.toISOString(),
    "seq" : seq
  },
  success: function(res) {
    console.log(res)
  }
})
  seq +=1;
}