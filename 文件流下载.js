// ======================================================================",
// @author: 晨昊",
// @desc：文件流下载文件,避免直接使用路径时导致的后台无法校验用户权限问题,目前只封装了POST请求，
// @date: 1594459354170,
// @Email：nicexch@126.com",
// ======================================================================,

// @param: downloadFile({
//				url: '接口地址',
//				ext: '文件后缀名',
//				data: '接口参数',
//              filename: '文件名称，可以传，默认为时间戳' 
//			})
function downloadFile(param) { // 下载文件
        var url = param.url;
		var time = param.filename ? param.filename : new Date().getTime()
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);        // 也可以使用POST方式，根据接口
        xhr.responseType = "blob";    		// 返回类型blob
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            if (this.status == 200) {
                var blob = this.response;
                var reader = new FileReader();
                reader.readAsDataURL(blob);    // 转换为base64，可以直接放入a表情href
                reader.onload = function (e) {
                    var a = document.createElement('a');
                    a.download = time + '.' + param.ext;//下载文件名
                    a.href = e.target.result;
                    $("body").append(a);    // 修复firefox中无法触发click
                    a.click();
                    $(a).remove();
                }
            }
        };
        // 发送ajax请求

        var data = getUrlencoded(param.data)
        xhr.send(data)

        function getUrlencoded(data) {
            var arr = [];
            for (var k in data) {
                // 将参数拼接成 [参数1=值1，参数2=值2，...的数组]
                arr.push(k + '=' + data[k]);
            }
            // 调用数组 join 方法将数组拼接成  参数1=值1&参数2=值2...的字符串
            var result = arr.join('&');
            return result;
        }
}