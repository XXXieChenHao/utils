// 获取url参数
// 建议封装到window的原型链中 在全局都可以直接使用
function getQueryVariable (variable) {
    var query = window.location.search.substring(1)
    var vars = query.split("&")
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=")
        if (pair[0] == variable) {
            return pair[1]
        }
    }
    return (-1)
}