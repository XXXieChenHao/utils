
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
  var timeSpanStr = year + '/' + add0(month) + '/' + add0(day) + '';//+ ' ' + hour + ':' + minute
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
  var timeSpanStr = year + '-' + add0(month) + '-' + add0(day) + ' ' + add0(hour) + ':' + add0(minute) + ':' + add0(second);//+ ' ' + hour + ':' + minute
  return timeSpanStr;
}

function add0(m) {return m < 10? '0' + m : m}

function dateCount(time, variable) {
  // 获取现在的时间
  var date = new Date();
  // 获取未来的时间
  var preTime = time + variable * 60 * 60 * 1000;
  var until = new Date(preTime);
  var days = (until - date) / 1000 / 3600 / 24;
  var day = Math.floor(days);
  var hours = (days - day) * 24;
  var hour = Math.floor(hours);
  var minutes = (hours - hour) * 60;
  var minute = Math.floor(minutes);
  var seconds = (minutes - minute) * 60;
  var second = Math.floor(seconds);
  var temp = variable > 24 ?  day + '天': ''
  var back = '剩余 ' + temp + hour + '小时 ' + minute + ' 分钟 ' + second + ' 秒 ';
  if(days <= 0) {
    return  '已过期'
  }
  return back;
}