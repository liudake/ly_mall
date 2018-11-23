 Auth = {
  // 云开发版本提示
  versionTip: function() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
  },
  // 是否授权
  isAuth: function() {
    wx.getSetting({
      success: res => {
        let auth = res.authSetting;
        // 未授权--进入授权界面
        if (!auth['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success: res =>  {
              // 获取用户信息
              wx.getUserInfo({
                success: res => {
                  console.log(res);
                  wx.navigateTo({
                    url: '/pages/authorize/index'
                  })
                }
              })
            }
          })
        } else {
          wx.getUserInfo({
            success: res => {
              console.log(res);
              wx.navigateTo({
                url: '/pages/index/index'
              })
            }
          })
        }
      }
    })
  }
}

module.exports = Auth;