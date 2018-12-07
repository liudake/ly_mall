import { SKU, GOODS_DETAIL } from './goodsDetailConfig';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    actived: 0,
    buyModel: false,
    goodsDetail: GOODS_DETAIL,
    sku: SKU,
    guessList: [
      {
        mid: '1',
        title: '你就是',
        price: '323',
        originPrice: '389',
        num: 323,
        thumb:
          'http://img1.imgtn.bdimg.com/it/u=4095470285,4213575198&fm=26&gp=0.jpg'
      },
      {
        mid: '2',
        title:
          '回家快回32ds回家快，家快回家快回家客户问问问回家快回家客户问问问',
        price: '3233',
        originPrice: '3893',
        num: '32',
        thumb:
          'http://img1.imgtn.bdimg.com/it/u=4095470285,4213575198&fm=26&gp=0.jpg'
      },
      {
        mid: '3',
        title:
          '回家快回32ds回家快，家快回家快回家客户问问问回家快回家客户问问问',
        price: '3233',
        originPrice: '3893',
        num: '32',
        thumb:
          'http://img1.imgtn.bdimg.com/it/u=4095470285,4213575198&fm=26&gp=0.jpg'
      },
      {
        mid: '4',
        title:
          '回家快回32ds回家快，家快回家快回家客户问问问回家快回家客户问问问',
        price: '3233',
        originPrice: '3893',
        num: '32',
        thumb:
          'http://img1.imgtn.bdimg.com/it/u=4095470285,4213575198&fm=26&gp=0.jpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('options', options.id);
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
   * 监听用户滑动页面事件
   */
  onPageScroll: function(e) {
    let scrollTop = e.scrollTop;
    this.setData({
      scrollTop
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},

  onSelectSwiper(e) {
    console.log('e', e);
    const pictures = e.currentTarget.dataset.pictures;
    const selectPicture = e.currentTarget.dataset.selectPicture;

    let results = [];

    pictures.forEach(item => {
      results.push(item.src);
    });

    console.log('results', results);
    wx.previewImage({
      urls: results,
      current: selectPicture
    });
  },

  onClickHome() {
    wx.switchTab({
      url: '../../pages/index/index'
    });
  },

  onClickShopcartTap() {
    wx.switchTab({
      url: '../../pages/shopcart/shopcart'
    });
  },

  onClickShopcart() {
    this.onBuyShow();
  },

  onClickBuy() {
    this.onBuyShow();
  },

  onBuyShow() {
    this.setData({
      buyModel: true
    });
  },

  onBuyHide() {
    this.setData({
      buyModel: false
    });
  },

  onSelectSku(event) {
    console.log('event', event.currentTarget);
    const { id } = event.currentTarget.dataset.item;
    const actived = this.handlerChoosed(this.data.sku.tree[0].v, id);
    this.setData({
      actived
    });
  },

  onSkuImg(e) {
    const picture = e.currentTarget.dataset.picture;
    wx.previewImage({
      urls: [picture]
    });
  },

  tapOrder() {
    this.onBuyHide();
    wx.navigateTo({
      url: '../../pages/order/order'
    });
  },

  handlerChoosed(data, id) {
    const index = data.findIndex(item => {
      return item.id === id;
    });
    return index;
  }
});
