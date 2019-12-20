// 封装小程序请求函数
const DOMAIN = "https://nicexch.cn";
const subDOMAIN = "xch";
// 此为配置基地址，一般在config.js文件中配置 module exports 暴露
// 在此文件中  require引入即可

// 配置一般请求 
const request = (url, partDomain, method, data) => {
    // url 为请求接口地址
    // partDomain 为子域名  存在条件 
    // method 为请求方式
    // data 为传入数据
    let _url = DOMAIN + (partDomain ? '/' + subDOMAIN : '') + url;

    // 使用 Promise 对象
    return new Promise((resolve, reject) => {
        // 调用 微信API
        wx.request({
            url: _url,
            method: method,
            data: data,
            // 微信 配置请求头信息
            header: {
                // Content-Type 消息主体的格式 
                'Content-Type': 'application/x-www-form-urlencoded',
                'access_token': wx.getStorageSync('token'),
                // 获取微信本地缓存中的 token
                'origin': 'wxApplet'
            },
            success(response){
                console.log(response.data);
                
                // 调用resolve方法 使Promise变为操作成功状态（fulfilled）
                resolve(response.data)
            },
            fail(error) {
                // 用reject方法后，Promise状态变为rejected
                reject(error)
            }
        })
    })
}

// 配置

// 暴露请求
// module.exports = {
//     request
// }

// 下面的代码应该是在 API 文件内

// const request = require('../request.js')
module.exports = {
    // 获取用户信息
    getUserInfo: (data) => {
        return request('/user/userinfo', true, 'get', data)
    },
    // 用户登录接口
    getLogin: (data) => {
        return request('user/login', true, 'post', data)
    }
    // ...... 诸如此般
}

// 下面是第三个文件，调用接口
// const api = require('../API.js')
// 模仿获取用户信息
function getUserInfo() {
    api.getUserInfo({
        userId: uid
    }).then(res => {
        console.log(res)
        // 已成功接收到响应，进行数据处理
    }).catch(err=> {
        console.log(err)
    })
}
