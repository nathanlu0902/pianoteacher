Page({
  data: {
    stuInfo: []
  },
  onLoad: function (options) {
    console.log(options)
    const db=wx.cloud.database()
    const stu=db.collection("student")
    this.setData ({
      stuInfo: stu.where({
        _id: options.id
      }).get()
    })
  }
})