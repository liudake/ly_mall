Component({
  externalClasses: ['tops-class'],
  properties: {
    text: {
      type: String,
      value: '顶部'
    },
    scrollTop: {
      type: Number,
      value: 0
    },
    scrollHeight: {
      type: Number,
      value: 500
    }
  },

  methods: {
    clickTop() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 500
      });

      this.triggerEvent('click');
    }
  }
});
