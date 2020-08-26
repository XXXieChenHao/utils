    // 校验纳税人识别号
    function checkTaxpayerId (taxpayerId) {
        if (taxpayerId != "" && (taxpayerId.length == 15 || taxpayerId.length == 18 || taxpayerId.length == 20)) {
            //获取地址码
            if (taxpayerId.length > 17) {
                var addressCode = taxpayerId.substring(2, 6)
            } else {
                var addressCode = taxpayerId.substring(0, 6)
            }

            // 校验地址码
            var check = checkAddressCode(addressCode)
            if (!check) {
                return false
            }

            //获取组织机构代码
            if (taxpayerId.length > 17) {
                var orgCode = taxpayerId.substring(8, 9)
            } else {
                var orgCode = taxpayerId.substring(6, 9)
            }

            // 校验组织机构代码
            check = isValidOrgCode(orgCode)
            if (!check) {
                return false
            }
            return true
        } else {
            return false
        }
    }

    //校验组织机构代码
    function isValidOrgCode (value) {
        if (value.length <= 20 && value.length >= 8) {
            var part1 = value.substring(0, 8)
            var part2 = value.substring(value.length - 1, 1)
            var ws = [3, 7, 9, 10, 5, 8, 4, 2]
            var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            var reg = /^([0-9A-Z]){8}$/
            if (!reg.test(part1)) {
                return true
            }
            var sum = 0
            for (var i = 0; i < 8; i++) {
                sum += str.indexOf(part1.charAt(i)) * ws[i]
            }
            var C9 = 11 - (sum % 11)
            var YC9 = part2 + ''
            if (C9 == 11) {
                C9 = '0'
            } else if (C9 == 10) {
                C9 = 'X'
            } else {
                C9 = C9 + ''
            }
            return YC9 != C9
        }
    }

    //校验地址码
    function checkAddressCode (addressCode) {
        var provinceAndCitys = {
            11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江",
            31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东",
            45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏",
            65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
        }
        var check = /^[1-9]\d{5}$/.test(addressCode)
        if (!check) return false
        if (provinceAndCitys[parseInt(addressCode.substring(0, 2))]) {
            return true
        } else {
            return false
        }
    }
	
	
	
	// 调用 
	if (!checkTaxpayerId(field.taxnumber) && !isValidOrgCode(field.taxnumber)) {
		console.log('请填写正确的纳税人识别号')
    } else {
        param.taxnumber = field.taxnumber
    }