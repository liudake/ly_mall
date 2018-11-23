//index.js
import { getByTag } from '../../service/byTag/index';
import { getTabMall } from '../../service/Home/index';

let loadMoreView, page;

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
        label: '商品1',
        id: '1',
        data: [
          {
            mid: '1',
            title: '你就是',
            price: '323',
            originPrice: '389',
            num: 0,
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
            title: '列为 u 问问',
            price: '99',
            originPrice: '',
            num: '323434',
            thumb:
              'http://img1.imgtn.bdimg.com/it/u=4095470285,4213575198&fm=26&gp=0.jpg'
          },
          {
            mid: '4',
            title: '¥的事的吗器来了我ndskew34么',
            price: '90',
            originPrice: '123',
            num: '32233',
            thumb:
              'http://img3.imgtn.bdimg.com/it/u=2249893882,1165836821&fm=26&gp=0.jpg'
          },
          {
            mid: '5',
            title: 'fdfhdfhkyGUkdsi',
            price: '13',
            originPrice: '23',
            num: '1323333333',
            thumb:
              'http://img1.imgtn.bdimg.com/it/u=4095470285,4213575198&fm=26&gp=0.jpg'
          },
          {
            mid: '6',
            title:
              '大声疾呼（323），恶劣为UI（&*¥#@！）的事，我jdk（&*¥#@！)-（&*¥#@！)',
            price: '123',
            originPrice: '233',
            num: '233',
            thumb:
              'http://img3.imgtn.bdimg.com/it/u=3258641584,555286175&fm=26&gp=0.jpg'
          }
        ]
      },
      {
        label: '商品2',
        id: '2',
        data: [
          {
            mid: '1',
            title: '你就是2',
            price: '323',
            originPrice: '389',
            num: '13233'
          },
          {
            mid: '2',
            title:
              '223回家快32回32ds回家快，家快回家快回家客户问问问回家快回家客户问问问',
            price: '3233',
            originPrice: '3893',
            num: '32'
          },
          {
            mid: '3',
            title: '列为 32kh&的事%¥u 323问问',
            price: '99',
            originPrice: '',
            num: '323434'
          },
          {
            mid: '4',
            title: '¥的事3*3（32健康好肌肤@#）#@的吗器来了我ndskew34么',
            price: '90',
            originPrice: '123',
            num: '32233'
          },
          {
            mid: '5',
            title: 'fdfh3！@#¥～*（）43多少dfhkyGUkdsi',
            price: '13',
            originPrice: '23',
            num: '1323333333'
          }
        ]
      },
      {
        label: '商品3',
        id: '3',
        data: [
          {
            mid: '1',
            title: '你323就是',
            price: '323',
            originPrice: '389',
            num: '13233'
          },
          {
            mid: '2',
            title: '33333多少空间里看见额外（2*#（23）但是看见，额外），问',
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
        label: '商品4',
        id: '4',
        data: [
          {
            mid: '1',
            title: '你就4444是',
            price: '323',
            originPrice: '389',
            num: '13233'
          },
          {
            mid: '2',
            title: '多少空间火热 iu 万元',
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
    tabLists: [],
    active: 0
  },

  /**
   * 生命周期函数--监听页面加载
   * 发起请求、获取数据
   */
  onLoad: function() {
    page = 1;
    loadMoreView = this.selectComponent('#loadMoreView');
    console.log('loadMoreView', loadMoreView);
    //  测试请求接口
    this._getTabMall();
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
  onPullDownRefresh: function() {
    console.log('---');
    page = 1;
    // this.loadData(this.data.selectedView, false);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    loadMoreView.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},

  /**
   * Tab标签切换函数
   */
  onTabChange: function(event) {
    console.log('event', event);
    console.log('event-detal', event.detail);
  },

  /**
   * 上拉加载数据逻辑处理
   */
  loadMoreListener: function(e) {
    page += 1;
    this._getTabMall({ pageNum: page });
  },

  /**
   * 获取tab商品列表数据
   */
  _getTabMall: function({ pageNum = 1, loadingShow = false } = {}) {
    const params = {
      pageNum: pageNum,
      pageSize: 4
    };
    getTabMall(params)
      .then(res => {
        console.log('tab商品列表', res);
        let tabMallList = this.data.tabLists;

        if (page === 1) {
          tabMallList = res.data || [];

          wx.stopPullDownRefresh();
        } else {
          tabMallList = tabMallList.concat(res.data);
        }
        console.log('data-concat', tabMallList);

        this.setData({
          tabLists: tabMallList
        });

        loadMoreView.loadMoreComplete(res.data);
      })
      .catch(e => {
        console.log('e', e);
      });
  }
});
