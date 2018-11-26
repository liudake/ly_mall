Component({
  externalClasses: ['price-class', 'price-origin-class'],

  properties: {
    price: String,
    originPrice: String,
    priceSize: {
      type: Number,
      value: 28
    },
    originPriceSize: {
      type: Number,
      value: 20
    },
    aligns: {
      type: String,
      value: 'left'
    },
    currency: {
      type: String,
      value: '¥'
    }
  }
});
