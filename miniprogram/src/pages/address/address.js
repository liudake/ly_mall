import { ADDRESS_LIST_MOCK, RECEIVER } from '../../models/mock';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: ADDRESS_LIST_MOCK,
    receiver: RECEIVER,
    radio: '1',
    addressInfo: {}, //地址编辑详情数据
    showAddressEdit: false //是否显示地址编辑
  },

  toggle(e) {
    console.log('e', e);
    this.setData({
      radio: e.currentTarget.dataset.name
    });
  },

  onEdit(e) {
    console.log('eonEdit', e);
    this.setData({
      addressInfo: e.currentTarget.dataset.item,
      showAddressEdit: true
    });
  },

  onAddress() {
    // wx.navigateTo({
    //   url: '../../pages/addressEdit/addressEdit'
    // });
    // this.addressEditShow();
    this.setData({
      addressInfo: {},
      showAddressEdit: true
    });
  },

  onSave(e) {
    this.addressEditHide();
  },

  onDeletes(e) {
    console.log('e', e);
    this.addressEditHide();
  },

  onCancels() {
    this.addressEditHide();
  },

  addressEditShow() {
    this.setData({
      showAddressEdit: true
    });
  },
  addressEditHide() {
    this.setData({
      showAddressEdit: false
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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
