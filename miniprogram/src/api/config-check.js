/**
 * 处理来自网络或者服务器的错误
 */
export function checkStatus(response) {
  if (Array.isArray(response)) {
    return response.map(res => res);
  }
  if ((response && response.status === 200) || response.status === 304) {
    return response.data;
  }
  if (response && response.message) {
    return response;
  }
  // 异常状态下，把错误信息返回去
  return {
    success: false,
    status: -2,
    msg: '服务器连接失败，请稍后再试！',
    message: '服务器连接失败，请稍后再试！'
  };
}

/**
 * 处理来自状态 code 异常的错误
 */
export function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  console.log('checkCode', res);

  // switch (res.status) {
  //   case 401:
  //     // 返回 401 验权并跳转目录
  //     Toast('执行服务失败');
  //     break;
  //   case 422:
  //     Toast('执行服务失败');
  //     break;
  //   case 503:
  //     Toast('服务器错误');
  //     break;
  // }
  return res;
}

/**
 * 处理来自程序端的错误
 */
export function checkErr(error) {
  // 错误信息，可以弹出一个错误提示，告诉用户
  // Toast.allowMultiple();
  console.log('错误信息-err.code', error.code);
  console.log('错误信息-err.message', error.message);
  console.log('错误信息-err.config', error.config);

  return error;
}
