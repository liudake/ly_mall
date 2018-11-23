const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onGetUserInfo();
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
    
  },
  onGetUserInfo: function() {
    let that = this;
    wx.getSetting({
      success: res => {
        let auth = res.authSetting;
        // 未授权--进入授权界面
        if (!auth['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success: res => {
              // 获取用户信息
              wx.getUserInfo({
                success: res => {
                  console.log(res);
                  that.onTrun();
                }
              })
            }
          })
        } else {
          wx.getUserInfo({
            success: res => {
              console.log(res);
              that.onTrun();
            }
          })
        }
      }
    })
  },
  onTrun: function() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
})