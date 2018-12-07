import { GOODS_LIST_ORDER_MOCK, RECEIVER } from '../../models/mock';
import utils from '../../common/js/util';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: GOODS_LIST_ORDER_MOCK,
    receiver: RECEIVER,
    query: {}
  },

  /**
   * 结算逻辑
   */
  onConfirmToPay() {
    const { name, tel, addressDetail, detail } = this.data.receiver || {};
    if (!name || !tel || !addressDetail) {
      wx.showModal({
        title: '收货地址为空，请先填写收货地址',
        icon: 'none',
        duration: 3000
      });
      return;
    }

    if (!this.data.list || !this.data.list.length) {
      return;
    }

    wx.showModal({
      title: '等待支付～',
      duration: 3000
    });
  },

  onCopyBtn(e) {
    wx.setClipboardData({
      data: 'N83293289382932323bbbb',
      success: function(res) {
        console.log('res', res);
        wx.showToast({
          title: '复制成功'
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('options', options);
    this.setData({
      query: options
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
