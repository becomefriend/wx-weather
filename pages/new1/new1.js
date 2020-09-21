// pages/new1/new1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tianqineirong: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let That = this;
    console.log(options.id)
    let id = options.id;
    //本来想在此处做一个页面判断，判断另一个页面传过来的值是否是第一绵阳的id，不是就加载，是就再加载绵阳的id，但由于判断过后无法加载绵阳了，所以算是一个小bug，不明白的地方是这个页面一加载就是绵阳本地，自动调取了地理定位功能。
  
      wx.request({
        url: "https://www.tianqiapi.com/api/?version=v1&cityid=" + id + "",
        success(e) {
          console.log(e.data);
          That.setData({
            tianqineirong: e.data
          })
        }
      })
  },
  toshousuo: function() {
    wx.navigateTo({
      url: '../tianqi/tianqi',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})