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
      console.log ("success")
    }
  })
}
})
