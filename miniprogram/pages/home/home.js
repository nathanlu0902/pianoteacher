Page ({
  data: {
    today: (new Date()).toLocaleString(),
    username: "",
    nextitems: ["时间","课程","老师"]
  },
  handleSign (event) {
    const that = this;
    wx.showModal({
      title: '签到确认',
      content: '确认签到吗？',
      success (res) {
        if (res.confirm) {
          wx.cloud.callFunction({
            name: 'checkin',
            data: {},
            success: res => (
              console.log(res)
            )
          })
          that.setData (
            console.log('successful'),function () {
              wx.showToast({
                title: '签到成功',
                duration: 700
              });
            });
        } else if (res.cancel) {
          console.log('用户取消');
        }
    }
  });
},
toCalendar: function (event) {
  wx.navigateTo({
    url: '/pages/calendar/calendar',
    success: function (res) {
      console.log ("to calendar")
    }
  })
},
toStu: function (event) {
  wx.navigateTo({
    url: '/pages/stu_detail/stu_detail',
    success: function (res) {
      console.log ("to stu_detail")
    },
    fail: function (res) {
      console.error(res)
    }

  })
}
})
