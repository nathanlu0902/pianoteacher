const app = getApp()

Page({
  data:{
    surname: '',
    name: '',
    gender: '',
    mobile: '',
    parmobile: '',
    gender: 'M'
  },
  getSurname: function (e) {
    this.setData({surname: e.detail.value})
  },
  getName: function (e) {
    this.setData({name: e.detail.value})
  },
  getGender: function (e) {
    console.log(e)
    this.setData({gender: e.detail.value})
  },
  getMobile: function (e) {
    this.setData({mobile: e.detail.value})
  },
  getParmobile: function (e) {
    this.setData({parmobile: e.detail.value})
  },
  formSubmit: function () {
    let that=this
    if (that.data.surname =="" || that.data.name=="" || that.data.mobile=="") {
      wx.showToast({
        title: '请填写必填信息',
        icon: 'fail',
        duration: 2000
      })
      return;
    } 
    const db=wx.cloud.database({});
    const stu_collection=db.collection('student');
    stu_collection.add ({
      data: {
        surname:that.data.surname,
        name:that.data.name,
        mobile:that.data.mobile,
        parmobile:that.data.parmobile,
        gender:that.data.gender
      },
      success: function(res) {
        wx.showToast({
          title: "成功",
          content: "学生添加成功",
        })},
      fail: function (err) {
        console.error(err)
      }
    })
  }

})