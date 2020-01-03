function distanceEmpty(data) {
    // 如果 data 为数组，则式子为 true
    if( data instanceof Array) {
        // 判断数据是否长度小于1 如果小于返回 true
        return data.legth < 1 ? true : false
    }else if(Object.prototype.toString.call(data) === '[object Object]'){
        // 如果数据为对象 判断是否为空，为空返回true 
        return  JSON.stringify(data) == "{}" ? true : false
    }else {
        return !data ? true : false
    }
}

console.log(distanceEmpty())