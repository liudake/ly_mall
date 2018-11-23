Component({
  properties: {
    //  是否还有更多数据
    hasMore: {
      type: Boolean,
      value: false
    },
    // 加载中的显示文本
    loadingText: {
      type: String,
      value: '加载中...'
    },
    // 加载失败的显示文本
    failText: {
      type: String,
      value: '加载失败, 请点击重试!'
    },
    // 没有更多后的显示文本, 默认没有则隐藏加载更多控件
    finishText: {
      type: String,
      value: ''
    },
    // 列表渲染延时, 默认为 500 ms
    listRenderingDelay: {
      type: Number,
      value: 500
    }
  },

  data: {
    showThis: false,
    text: '',
    showIcon: false,
    isLoading: false
  },

  methods: {
    //加载更多的入口方法, 直接在page中使用时请在onReachBottom() 方法中调用这个方法, 并实现loadMoreListener方法去获取数据
    loadMore: function() {
      if (!this.properties.hasMore) {
        console.log('load more finish');
        return;
      }
      if (this.data.isLoading) {
        console.log('loading ...');
        return;
      }
      this.setData({
        isLoading: true
      });
      this.triggerEvent('loadMoreListener');
    },

    //加载完成, 传入hasMore
    loadMoreComplete: function(data) {
      
      // var hasMore = data.curPage < data.pageCount && data.pageCount != 1;
      var hasMore = data.length && data.length >= 4;
      var text = '',
        showThis = false,
        showIcon = false;

      if (hasMore) {
        showIcon = true;
        showThis = true;
        text = this.properties.loadingText;
      } else if (this.properties.finishText.length > 0) {
        text = this.properties.finishText;
        showThis = true;
      }
      this.setData({
        hasMore: hasMore,
        text: text,
        showIcon: showIcon,
        showThis: showThis
      });
      //界面渲染延迟, 避免列表还未渲染完成就再次触发 loadMore 方法
      setTimeout(
        function() {
          this.setData({
            isLoading: false
          });
        }.bind(this),
        this.properties.listRenderingDelay
      );
    },

    //加载失败
    loadMoreFail: function() {
      this.setData({
        showIcon: false,
        text: this.properties.failText
      });

      //界面渲染延迟, 避免列表还未渲染完成就再次触发 loadMore 方法
      setTimeout(
        function() {
          this.setData({
            isLoading: false
          });
        }.bind(this),
        this.properties.listRenderingDelay
      );
    },

    //点击 loadmore 控件时触发, 只有加载失败时才会进入页面回调方法
    clickLoadMore: function() {
      if (this.data.text != this.properties.failText) return;
      this.setData({
        showIcon: true,
        text: this.properties.loadingText,
        isLoading: true
      });
      this.triggerEvent('clickLoadMore');
    }
  }
});
