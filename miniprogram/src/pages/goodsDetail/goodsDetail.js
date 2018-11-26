Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail: {
      id: 16,
      price: '1123.00',
      originPrice: '1832.00',
      title:
        '海尔（Haier）洗衣机滚筒全自动10公斤高温变频上排水家用电器洗衣机一级能效G100818BG 香槟金10公斤',
      desc:
        '8月家电【送货入户+免邮包安装】售后 退换无忧，全国联保，给您称心如意的购物体验^_^',
      tagList: ['全场包邮', '7天退换', '48小时发货', '假一陪十'],
      sliderImgUrls: [
        {
          itemId: '1',
          src:
            'http://t00img.yangkeduo.com/goods/images/2018-11-20/53931ba990b7aead665df99b178e26a0.jpeg@750w_1l_50Q.src'
        },
        {
          itemId: '2',
          src:
            'http://t00img.yangkeduo.com/goods/images/2018-11-19/da201ee76a300f769b5bdfe0bfccbe00.jpeg@750w_1l_50Q.src'
        },
        {
          itemId: '3',
          src:
            'http://t00img.yangkeduo.com/goods/images/2018-11-20/53931ba990b7aead665df99b178e26a0.jpeg@750w_1l_50Q.src'
        }
      ],
      goodsContent:
        '<p style="text-align:justify"><strong>中国证券投资基金业协会党委书记、会长洪磊在《财经》年会2019上发表讲话。</strong></p><p style="text-align:justify"><strong><span style="font-size:15px">坐拥河套福保，开启财富未来。11月13日，福田保税区长富金茂大厦T2招商推荐会隆重举行，项目各方负责人、深圳各区房产中介代表、物业代表及意向客户逾百人参与了本次盛会。</span></strong></p><p style="text-align:justify"><img src="http://sbce-test.jdwins.cn:8080/upload_cms/images/weixin/20181115/OicEz6yClAnib4MeDaLXYFHbumxkkChpdUTMuyTSkcz7ibDU9JhQArZZTRZicOo1iafH5rLvpZboDJib8re1c4AvmKdg.jpeg" /></p>'
    },
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
