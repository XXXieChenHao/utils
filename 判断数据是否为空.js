// �ж������Ƿ�Ϊ��
function distanceEmpty(data) {
  // ��� data Ϊ���飬��ʽ��Ϊ true
  if (data instanceof Array) {
    // �ж������Ƿ񳤶�С��1 ���С�ڷ��� true
    return data.length < 1 ? true : false
  } else if (Object.prototype.toString.call(data) === '[object Object]') {
    // �������Ϊ���� �ж��Ƿ�Ϊ�գ�Ϊ�շ���true 
    return JSON.stringify(data) == "{}" ? true : false
  } else {
    return !data ? true : false
  }
}
