//index.js
import { getByTag } from '../../service/byTag/index';

Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    mallList: [
      {
        id: '1',
        mode: 'aspectFit',
        price: '123',
        title: '当时的',
        originPrice: '300',
        src:
          'http://img3.imgtn.bdimg.com/it/u=2249893882,1165836821&fm=26&gp=0.jpg'
      },
      {
        id: '2',
        mode: '',
        price: '22',
        title: '读书读书读书读书读书读书得瑟',
        originPrice: '66',
        src:
          'http://img3.imgtn.bdimg.com/it/u=3258641584,555286175&fm=26&gp=0.jpg'
      },
      {
        id: '3',
        mode: 'aspectFill',
        price: '323',
        title: '读书读书读读书读书读书读书读书读书得瑟书读书读书读书得瑟',
        originPrice: '455',
        src:
          'http://img1.imgtn.bdimg.com/it/u=4095470285,4213575198&fm=26&gp=0.jpg'
      },
      {
        id: '4',
        mode: 'scaleToFill',
        price: '13',
        originPrice: '30',
        title: '来来来',
        src:
          'http://img3.imgtn.bdimg.com/it/u=3258641584,555286175&fm=26&gp=0.jpg'
      },
      {
        id: '5',
        mode: 'aspectFit',
        price: '32',
        originPrice: '45',
        title: '电话就可以',
        src:
          'http://img3.imgtn.bdimg.com/it/u=3258641584,555286175&fm=26&gp=0.jpg'
      }
    ],
    tabList: [
      {
        tabName: '商品1',
        id: '1',
        items: [
          {
            mid: '1',
            title: '你就是',
            price: '323',
            originPrice: '389',
            num: 0
          },
          {
            mid: '2',
            title:
              '回家快回32ds回家快，家快回家快回家客户问问问回家快回家客户问问问',
            price: '3233',
            originPrice: '3893',
            num: '32'
          },
          {
            mid: '3',
            title: '列为 u 问问',
            price: '99',
            originPrice: '',
            num: '323434'
          },
          {
            mid: '4',
            title: '¥的事的吗器来了我ndskew34么',
            price: '90',
            originPrice: '123',
            num: '32233'
          },
          {
            mid: '5',
            title: 'fdfhdfhkyGUkdsi',
            price: '13',
            originPrice: '23',
            num: '1323333333'
          }
        ]
      },
      {
        tabName: '商品2',
        id: '2',
        items: [
          {
            mid: '1',
            title: '你就是',
            price: '323',
            originPrice: '389',
            num: '13233'
          },
          {
            mid: '2',
            title:
              '回家快回32ds回家快，家快回家快回家客户问问问回家快回家客户问问问',
            price: '3233',
            originPrice: '3893',
            num: '32'
          },
          {
            mid: '3',
            title: '列为 u 问问',
            price: '99',
            originPrice: '',
            num: '323434'
          },
          {
            mid: '4',
            title: '¥的事的吗器来了我ndskew34么',
            price: '90',
            originPrice: '123',
            num: '32233'
          },
          {
            mid: '5',
            title: 'fdfhdfhkyGUkdsi',
            price: '13',
            originPrice: '23',
            num: '1323333333'
          }
        ]
      },
      {
        tabName: '商品3',
        id: '3',
        items: [
          {
            mid: '1',
            title: '你就是',
            price: '323',
            originPrice: '389',
            num: '13233'
          },
          {
            mid: '2',
            title:
              '回家快回32ds回家快，家快回家快回家客户问问问回家快回家客户问问问',
            price: '3233',
            originPrice: '3893',
            num: '32'
          },
          {
            mid: '3',
            title: '列为 u 问问',
            price: '99',
            originPrice: '',
            num: '323434'
          },
          {
            mid: '4',
            title: '¥的事的吗器来了我ndskew34么',
            price: '90',
            originPrice: '123',
            num: '32233'
          },
          {
            mid: '5',
            title: 'fdfhdfhkyGUkdsi',
            price: '13',
            originPrice: '23',
            num: '1323333333'
          }
        ]
      },
      {
        tabName: '商品4',
        id: '4',
        items: [
          {
            mid: '1',
            title: '你就是',
            price: '323',
            originPrice: '389',
            num: '13233'
          },
          {
            mid: '2',
            title:
              '回家快回32ds回家快，家快回家快回家客户问问问回家快回家客户问问问',
            price: '3233',
            originPrice: '3893',
            num: '32'
          },
          {
            mid: '3',
            title: '列为 u 问问',
            price: '99',
            originPrice: '',
            num: '323434'
          },
          {
            mid: '4',
            title: '¥的事的吗器来了我ndskew34么',
            price: '90',
            originPrice: '123',
            num: '32233'
          },
          {
            mid: '5',
            title: 'fdfhdfhkyGUkdsi',
            price: '13',
            originPrice: '23',
            num: '1323333333'
          }
        ]
      }
    ],
    test: [],
    active: 0
  },

  onLoad: function() {
    //  测试请求接口
    getByTag({
      tag: '前端',
      src: 'web',
      t: '1'
    }).then(res => {
      console.log('res结果', res);
      this.setData({
        test: res.d[0].tag
      });
    });
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           this.setData({
    //             avatarUrl: res.userInfo.avatarUrl,
    //             userInfo: res.userInfo
    //           });
    //         }
    //       });
    //     }
    //   }
    // });
  }
});
