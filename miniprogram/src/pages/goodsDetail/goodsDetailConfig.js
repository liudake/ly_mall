export const SKU = {
  tree: [
    {
      k: '尺寸', // skuKeyName：规格类目名称
      v: [
        {
          id: '30349', // skuValueId：规格值 id
          name: '1:2', // skuValueName：规格值名称
          imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
        },
        {
          id: '1215',
          name: '3:4',
          imgUrl: 'https://img.yzcdn.cn/2.jpg'
        }
      ],
      k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
    }
  ],
  list: [
    {
      id: 2259, // skuId，下单时后端需要
      price: 100, // 价格（单位分）
      s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
      s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
      s3: '0', // 最多包含3个规格值，为0表示不存在该规格
      stock_num: 110 // 当前 sku 组合对应的库存
    }
  ],
  price: '1.00', // 默认价格（单位元）
  stock_num: 227, // 商品总库存
  collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
  none_sku: false, // 是否无规格商品
  hide_stock: false // 是否隐藏剩余库存
};

export const GOODS_DETAIL = {
  id: 16,
  price: '1123.00',
  originPrice: '1832.00',
  title:
    '海尔（Haier）洗衣机滚筒全自动10公斤高温变频上排水家用电器洗衣机一级能效G100818BG 香槟金10公斤',
  desc:
    '8月家电【送货入户+免邮包安装】售后 退换无忧，全国联保，给您称心如意的购物体验^_^',
  tagList: ['全场包邮', '7天退换', '48小时发货', '假一陪十'],
  picture:
    'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg',
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
};

export const CUSTOM_STEPPER_CONFIG = {
  // 自定义限购文案
  quotaText: '每次限购xxx件',
  // 自定义步进器超过限制时的回调
  handleOverLimit: data => {
    const { action, limitType, quota, quotaUsed } = data;

    if (action === 'minus') {
      Toast('至少选择一件商品');
    } else if (action === 'plus') {
      // const { LIMIT_TYPE } = Sku.skuConstants;
      if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
        let msg = `单次限购${quota}件`;
        if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
        Toast(msg);
      } else {
        Toast('库存不够了~~');
      }
    }
  }
};
