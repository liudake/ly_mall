/**
 * 防抖函数
 */
function debounce(fn, wait, immediate) {
  let timeout, args, context, timestamp, result;
  return function() {
    context = this;
    args = arguments;
    timestamp = new Date();
    const later = () => {
      const last = new Date() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        result = fn.apply(context, args);
      }
    };
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
}

/**
 * 节流函数
 */
function throttle(fn, delay) {
  let last, deferTimer;
  return function(args) {
    let that = this;
    let _args = arguments;
    let now = +new Date();
    if (last && now < last + delay) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function() {
        last = now;
        fn.apply(that, _args);
      }, delay);
    } else {
      last = now;
      fn.apply(that, _args);
    }
  };
}

/**
 * 截取列表时间
 */
function padString(str, split) {
  var str = String(str),
    len = str.length,
    split = split >> 0,
    first =
      split >= 0 ? str.substr(0, len - split) : str.substr(0, len + split);
  return first;
}

/**
 * 日期格式化
 * 调用
 * format("yyyy-MM-dd hh:mm:ss")
 */
function format(date, format) {
  var args = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
    S: date.getMilliseconds()
  };
  if (/(y+)/.test(format))
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  for (var i in args) {
    var n = args[i];
    if (new RegExp('(' + i + ')').test(format))
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? n : ('00' + n).substr(('' + n).length)
      );
  }
  return format;
}

/**
 *  获取时间 周、月、年
 * @param {date}
 */

function formatDate(date) {
  var year = date.getFullYear() + '年';
  var month = date.getMonth() + 1 + '月';
  var day = date.getDate() + '日';
  var week =
    '(' +
    ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][
      date.getDay()
    ] +
    ')';

  // return year + month + day + ' ' + week;
  return month + day;
}

/**
 * 添加时间
 * @param {} date
 * @param {} n
 */

function addDate(date, n) {
  date.setDate(date.getDate() + n);
  return date;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

/**
 * 获取url传参
 * @param {*} name
 */
function getQueryString(name) {
  let queryString = window.location.search.split('?')[1];
  let ret;
  if (queryString) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = queryString.match(reg);
    if (r !== null) {
      //  encodeURI decodeURIComponent
      ret = encodeURI(r[2]);
    } else {
      return null;
    }
  }
  return ret;
}

/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 ====================================================*/
function parseParam(param, key, encode) {
  if (param == null) return '';
  let paramStr = '';
  const t = typeof param;
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += `&${key}=${
      encode == null || encode ? encodeURIComponent(param) : param
    }`;
  } else {
    for (const i in param) {
      const k =
        key == null ? i : key + (param instanceof Array ? `[${i}]` : `.${i}`);
      paramStr += `&${parseParam(param[i], k, encode)}`;
    }
  }
  return paramStr.substr(1);
}

/**
 * 去掉特殊字符
 */
function excludeSpecial(str) {
  str = str.replace(/[\%\^\&\_\+\{\}\:\"\<\>\?]/g, '');
  return str;
}

/**
 * 判断是否空对象
 */
function isEmptyObj(obj = {}) {
  let objs = obj || {};

  let isEmptyObj = Object.keys(objs).length === 0;

  return isEmptyObj;
}

/**
 * 格式化cell组件数据
 */
function normalizeCellData(newData, oldData) {
  let nData = newData;

  let oData = oldData || {};

  if (!isEmptyObj(oData)) {
    nData.map(item => {
      item['desc'] = oData[item.key];
    });
  }

  return nData;
}

/**
 * 处理单位 万
 */

function unitConvert(val) {
  if (Math.abs(val) >= 10000) {
    let resultVal = val / 10000;

    let arr = (val + '').split('.')[0];

    let dec_length = arr ? arr.length : 0;
    // toFixed toPrecision
    return parseFloat(resultVal.toPrecision(dec_length)) + '万';
  } else {
    let valNum = val ? +val : 0;

    return parseFloat(valNum.toFixed()) + '元';
  }
}

/**
 * 判断两个对象是否相等
 */

function diff(newObj, oldObj) {
  let nO = newObj instanceof Object;

  let oO = oldObj instanceof Object;

  if (!nO || !oO) {
    return newObj === oldObj;
  }

  if (Object.keys(newObj).length !== Object.keys(oldObj).length) {
    return false;
  }

  for (let attr in newObj) {
    let t1 = newObj[attr] instanceof Object;
    let t2 = oldObj[attr] instanceof Object;
    if (t1 && t2) {
      return diff(newObj[attr], oldObj[attr]);
    } else if (newObj[attr] !== oldObj[attr]) {
      return false;
    }
  }
  
  return true;
}

/**
 * 判断URL链接是否有效
 */
function urlRep(url) {
  const URLRexExp = new RegExp(
    /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
  );

  return URLRexExp.test(url);
}

function zero(val) {
  if (val !== null && val < 10) {
    return '0' + val;
  }
  return val;
}

//LCT添加，用于获取深层对象。
const get = p => o =>
  p.split('.').reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o);

export default {
  debounce,
  throttle,
  padString,
  get,
  getQueryString,
  format,
  formatDate,
  addDate,
  excludeSpecial,
  parseParam,
  isEmptyObj,
  normalizeCellData,
  unitConvert,
  urlRep,
  zero,
  diff
};
