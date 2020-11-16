//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'pianoteacher-4goeti171e9dee4d',
        traceUser: true,
      })
    }

    this.globalData = {}
  },
  onload: function () {
    const stu_db=wx.cloud.database()
    stu_db.collection('student').get().then(res=>{
      console.log(res.data)
    })
    .catch(err=>{
      console.error(err)
    })
  }
})
