Component({
  externalClasses: ['ly-card-class'],

  properties: {
    pid: String,
    num: Number,
    thumb: String,
    title: String,
    price: String,
    originPrice: String,
    lazyLoad: Boolean,
    thumbMode: {
      type: String,
      value: 'scaleToFill'
    }
  },

  methods: {
    onClickLink() {
      //  业务组件 在内部实现跳转商品详情页面
      console.log('id', this.properties.pid);
      wx.navigateTo({
        url: `../../pages/goodsDetail/goodsDetail?id=${this.properties.pid}`
      });
      this.triggerEvent('onClickLink');
    }
  }
});
