Component({
  externalClasses: ['panel-class', 'panel-header-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    title: String,
    value: String,
    isLink: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    onClickRight() {
      this.triggerEvent('clickRight');
    }
  }
});
