
//时间戳转换成日期时间
function formatTime(unixtime) {
  var dateTime = new Date(parseInt(unixtime))
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var day = dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second = dateTime.getSeconds();
  var now = new Date();
  var now_new = Date.parse(now.toDateString());  //typescript转换写法
  var milliseconds = now_new - dateTime;
  var timeSpanStr = year + '/' + month + '/' + day + '';//+ ' ' + hour + ':' + minute
  return timeSpanStr;
}

//时间戳转换成日期时间
function formatTimeSmall(unixtime) {
  var dateTime = new Date(parseInt(unixtime))
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var day = dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second = dateTime.getSeconds();
  var now = new Date();
  var now_new = Date.parse(now.toDateString());  //typescript转换写法
  var milliseconds = now_new - dateTime;
  var timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;//+ ' ' + hour + ':' + minute
  return timeSpanStr;
}

// 剩余时间处理
function dateCount(time) {
  // 获取现在的时间
  var date = new Date();
  // 获取七天后的时间
  var preTime = time + 604800000;
  var until = new Date(preTime);
  var days = (until - date) / 1000 / 3600 / 24;
  var day = Math.floor(days);
  var hours = (days - day) * 24;
  var hour = Math.floor(hours);
  var minutes = (hours - hour) * 60;
  var minute = Math.floor(minutes);
  var seconds = (minutes - minute) * 60;
  var second = Math.floor(seconds);
  var back = '剩余 ' + day + ' 天 ' + hour + ' 小时 ' + minute + ' 分钟 ' + second + ' 秒 ';
  return back;
}
