export const NUMBER = /^\d{1,}$/; // 数字
export const LETTER_AND_NUMBER = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,30}$/; // 必须是数字和字母组合
export const LETTER_NUMBER = /^[\w\s]+$/; // 只能输入数字或字母
export const PHONE = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/; // 电话号码
export const EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; // 邮箱
export const ID_NUMBER = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/; // 身份证号，支持1/2代（15位和18位）
export const USCC = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/; // 统一社会信用代码
export const DATE = /^\d{4}(-)(1[0-2]|0?\d)\1([0-2]\d|\d|30|31)$/; // 日期
export const URL = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/; // 网址(url,支持端口和"?+参数"和"#+参数)
export const MD5 = /^([a-f\d]{32}|[A-F\d]{32})$/; // md5格式(32位)
export const VERSION = /^\d+(?:\.\d+){2}$/; // 版本号(version)格式必须为X.Y.Z
export const BANK_CARD_NUMBER = /^[1-9]\d{9,29}$/; // 银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付]
export const ALPHABET = /^[a-zA-Z]+$/; // 字母
// 中文汉字 ↓
export const CHINESE_CHARACTERS = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/; 
export const ZIP_CODE = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/; // 邮政编码
export const LANDLINE_TELEPHONE = /^\d{3}-?\d{8}$|^\d{4}-?\d{7}$/; // 座机号码 完全匹配 不需要可删除 ^ $
export const REMOVE_HTML_TAGS = /<[^>]+>/gi; // 去除所有 html 标签