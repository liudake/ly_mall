import { GOODS_LIST_MOCK } from '../../models/mock';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    checkedAll: false,
    loader: false,
    list: GOODS_LIST_MOCK,
    result: [],
    total: 0 //总和
  },

  /**
   * 总价计算函数封装
   */
  getTotalPrice() {
    let selectedIds = this.data.result || [];

    let total = 0;
    if (selectedIds && selectedIds.length) {
      let selectedProducts = [];

      this.data.list.forEach(item => {
        if (selectedIds.indexOf(item.mid) > -1) {
          selectedProducts.push(item);
        }
      });

      total = selectedProducts.reduce((prev, current) => {
        console.log('prev', prev);
        return prev + current.price * current.num;
      }, 0);
    } else {
      return 0;
    }

    this.setData({
      total
    });
  },

  /**
   * 组合复选框逻辑处理
   */
  onChangeCheck(e) {
    console.log('event', e);

    this.setData({
      total: 0,
      result: e.detail
    });

    this.getTotalPrice();
  },

  /**
   * 全选复选框逻辑处理
   */
  onChangeCheckAll(e) {
    console.log('e', e);

    if (!this.data.list.length) {
      return;
    }

    let results = [];

    this.data.list.forEach(item => {
      if (e.detail) {
        results.push(item.mid);
      } else {
        results = [];
      }
    });

    this.setData({
      total: 0,
      result: results,
      checkedAll: e.detail
    });

    this.getTotalPrice();
  },

  /**
   * 步进器选择框逻辑处理
   */
  onChangeCount(e) {
    console.log('e', e);
    const index = e.currentTarget.dataset.index;

    let list = this.data.list || [];

    list[index].num = e.detail;

    this.setData({
      list
    });

    this.getTotalPrice();
  },

  onSubmit(e) {
    console.log('e', e);
    wx.navigateTo({
      url: '../../pages/order/order'
    });
  },

  handlerChoosed(data, id) {
    const index = data.findIndex(item => {
      return item === id;
    });
    return index > -1;
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
