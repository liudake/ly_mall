Component({
  externalClasses: ['custom-class'],
  properties: {
    addressInfo: {
      type: Object,
      value: {}
    },
    showDelete: {
      type: Boolean,
      value: false
    },
    showCancel: {
      type: Boolean,
      value: false
    }
  },

  data: {
    addressData: {},
    defaultRegion: ['湖南省', '衡阳市', '常宁市']
  },
  attached() {
    this.setData({
      addressData: this.properties.addressInfo
    });
  },

  methods: {
    onRegionChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail);
      this.setData({
        'addressData.areaList': e.detail.value
      });
    },

    onFocus(e) {
      console.log('e', e);
      const attr = e.currentTarget.dataset.attr;

      const value = e.detail;

      let selectValue = {};

      selectValue[attr] = value;

      const data = Object.assign({}, this.data.addressData, selectValue);

      this.setData({
        addressData: data
      });
      console.log('q', this.data.addressData);
      this.triggerEvent('focus', selectValue);
    },

    onSave(e) {
      console.log('onSave', e, this.data.addressData);
      this.triggerEvent('save', this.data.addressData);
    },

    onDelete() {
      console.log('onDelete');
      this.triggerEvent('delete', this.data.addressData);
    },

    onCancel() {
      this.triggerEvent('cancel', this.data.addressData);
    }
  }
});
