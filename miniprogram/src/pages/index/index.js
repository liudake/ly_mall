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
        name: '当时的',
        initialPrice: '300',
        src:
          'http://img3.imgtn.bdimg.com/it/u=2249893882,1165836821&fm=26&gp=0.jpg'
      },
      {
        id: '2',
        mode: '',
        price: '22',
        name: '读书读书读书读书读书读书得瑟',
        initialPrice: '66',
        src:
          'http://img3.imgtn.bdimg.com/it/u=3258641584,555286175&fm=26&gp=0.jpg'
      },
      {
        id: '3',
        mode: 'aspectFill',
        price: '323',
        name: '读书读书读读书读书读书读书读书读书得瑟书读书读书读书得瑟',
        initialPrice: '455',
        src:
          'http://img1.imgtn.bdimg.com/it/u=4095470285,4213575198&fm=26&gp=0.jpg'
      },
      {
        id: '4',
        mode: 'scaleToFill',
        price: '13',
        initialPrice: '30',
        name: '来来来',
        src:
          'http://img3.imgtn.bdimg.com/it/u=3258641584,555286175&fm=26&gp=0.jpg'
      },
      {
        id: '5',
        mode: 'aspectFit',
        price: '32',
        initialPrice: '45',
        name: '电话就可以',
        src:
          'http://img3.imgtn.bdimg.com/it/u=3258641584,555286175&fm=26&gp=0.jpg'
      }
    ],
    test: []
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
