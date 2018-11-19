let Fly = require('../static/js/flyio/wx'); //npm引入方式

let fly = new Fly(); //创建fly实例
/**
 * [请求时拦截器和响应时拦截器]
 * request      [请求拦截器]
 * response     [响应时拦截器]
 */
fly.interceptors.request.use(
  (config, promise) => {
    // 请求时做一些处理
    // console.log('这里可以加一些动作，比如来个进度条开始动作', config);
    console.log('config', config);

    return config;
  },
  error => {
    console.log('加载失败', promise);
    //  当网络或者服务器响的错误做一些处理
    return promise.reject(error);
  }
);

fly.interceptors.response.use(
  (response, promise) => {
    // console.log('这里可以加一些动作，比如来个进度条开始动作', response);

    // 返回响应时做一些处理
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }

    //  后端报错
    return promise.reject(response);
  },
  error => {
    // 当网络或者服务器响的错误做一些处理
    console.log(
      '拦截器服务器响的错误',
      error.request,
      error.response,
      error.message,
      error.config
    );
    return promise.reject(error);
  }
);

export default fly;
