Page({
  data:{
    student_list: []
  },
  onLoad: function () {
    let that=this
    const db=wx.cloud.database()
    const student=db.collection("student")
    student.where({}).get({
      success: function (res) {
        console.log(res)
        that.setData({
          student_list: res.data
        })
      }
    })

  },
  add_stu: function() {
    wx.navigateTo({
      url: '../add_stu/add_stu',
    })
  }
})