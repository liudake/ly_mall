import { VantComponent } from '../../static/js/vant-weapp/dist/common/component';

VantComponent({
  classes: ['num-class', 'thumb-class', 'title-class', 'price-class', 'origin-price-class'],
  props: {
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
    onClickThumb: function onClickThumb() {
      this.jumpLink('thumbLink');
    }
  }
});
