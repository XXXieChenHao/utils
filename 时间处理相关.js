
//ʱ���ת��������ʱ��
function formatTime(unixtime) {
  var dateTime = new Date(parseInt(unixtime))
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var day = dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second = dateTime.getSeconds();
  var now = new Date();
  var now_new = Date.parse(now.toDateString());  //typescriptת��д��
  var milliseconds = now_new - dateTime;
  var timeSpanStr = year + '/' + month + '/' + day + '';//+ ' ' + hour + ':' + minute
  return timeSpanStr;
}

//ʱ���ת��������ʱ��
function formatTimeSmall(unixtime) {
  var dateTime = new Date(parseInt(unixtime))
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var day = dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second = dateTime.getSeconds();
  var now = new Date();
  var now_new = Date.parse(now.toDateString());  //typescriptת��д��
  var milliseconds = now_new - dateTime;
  var timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;//+ ' ' + hour + ':' + minute
  return timeSpanStr;
}

// ʣ��ʱ�䴦��
function dateCount(time) {
  // ��ȡ���ڵ�ʱ��
  var date = new Date();
  // ��ȡ������ʱ��
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
  var back = 'ʣ�� ' + day + ' �� ' + hour + ' Сʱ ' + minute + ' ���� ' + second + ' �� ';
  return back;
}
