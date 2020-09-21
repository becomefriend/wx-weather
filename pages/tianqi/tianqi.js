// pages/tianqi/tianqi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tianqineirong:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     

  },
  inputneirong:function(e){
    let That=this;
    let val = e.detail.value;
      wx.request({
        url: "https://www.tianqiapi.com/api/?version=v1&city="+val+"",
        success(res) {
          console.log(res.data);
          That.setData({
            tianqineirong:res.data
          })

        }

      })

  },
  toxiangqin:function(e){
    console.log(e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id;
    wx.reLaunch({
      url: "../new1/new1?id="+id+"",
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})