import { baseURL } from './constants';
import './interceptors';
import { checkStatus, checkCode, checkErr } from './config-check';

let Fly = require('../static/js/flyio/wx.umd.min'); //npm引入方式

let fly = new Fly(); //创建fly实例

export default {
  get(url, params = '', isLoading = true) {
    return fly
      .get({
        baseURL,
        url,
        params,
        isLoading,
        method: 'GET',
        timeout: 30000,
        withCredentials: false,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        return checkStatus(response);
      })
      .then(res => {
        return checkCode(res);
      })
      .catch(err => {
        return checkErr(err);
      });
  },
  post(url, data = '', isLoading = true) {
    return fly
      .post(
        {
          baseURL,
          url,
          isLoading,
          method: 'POST',
          timeout: 30000,
          withCredentials: false,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            token: 'E8C5666C93FEFAE526F7501CD64B89D2',
            userId: '1',
            ver: 'v1'
          }
          // transformRequest: [
          //   function(data) {
          //     // data = JSON.stringify(data); // json提交;
          //     data = qs.stringify(data); //  表单提交;
          //     return data;
          //   }
          // ]
        },
        data
      )
      .then(response => {
        return checkStatus(response);
      })
      .then(res => {
        return checkCode(res);
      })
      .catch(err => {
        return checkErr(err);
      });
  }
};
