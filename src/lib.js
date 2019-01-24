'use strict';

// js正则验证

/**
 * 验证国内手机号
 * @param {string} phone 
 */
exports.CheckCNPhone = function (phone) {
    if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(phone)) {
        return false;
    }
    return true;
};

/**
 * 验证字符串仅能是中文
 * @param {string} txt 
 */
exports.CheckChinese = function (txt) {
    if (!/^[\u4e00-\u9fa5]{0,}$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证由数字、26个英文字母或下划线组成的字符串
 * @param {string} txt 
 */
exports.CheckAscii = function (txt) {
    if (!/^\w+$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证邮箱格式
 * @param {string} txt 
 */
exports.CheckEmail = function (txt) {
    if (!/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证15位身份证号
 * @param {string} txt 
 */
exports.CheckIdNumBy15 = function (txt) {
    if (!/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证18位身份证号
 * @param {string} txt 
 */
exports.CheckIdNumBy18 = function (txt) {
    if (!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 身份证号严格验证模式
 * @param {string} txt 
 */
exports.CheckStrictIdNumBy18 = function (txt) {
    if (!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(txt)) {
        return false;
    }
    // 增强验证
    var coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    txt = txt.toUpperCase();
    var sum = 0;
    var txtArr = txt.split('');
    for (var i = 0; i < (txtArr.length-1); i++) {
        sum += txtArr[i] * coefficient[i];
    }
    return code[sum % 11] == txtArr[17];
};

/**
 * 验证金额格式
 * @param {string} txt 
 */
exports.CheckMoney = function (txt) {
    if (!/^[0-9]+(.[0-9]{1,2})?$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证 ip v4
 * @param {string} txt 
 */
exports.CheckIpV4 = function (txt) {
    if (!/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证 ip v6
 * @param {string} txt 
 */
exports.CheckIpV6 = function (txt) {
    if (!/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证2018-10-10格式的日期
 * @param {string} txt 
 */
exports.CheckDate = function (txt) {
    if (!/^[1-9]\d{3}-(0{0,1}[1-9]|1[0-2])-(0{0,1}[1-9]|[1-2]\d|3[01])$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格
 * @param {string} txt 
 */
exports.CheckPassword1 = function (txt) {
    if (!/^(?!\d{6,8}$)(?! )(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格），必须包含大写字母
 * @param {string} txt 
 */
exports.CheckPassword2 = function (txt) {
    if (!/^(?!\d{6,8}$)(?! )(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证密码不能为纯数字或字母，不少于6位
 * @param {string} txt 
 */
exports.CheckPassword3 = function (txt) {
    if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证微信号
 * @param {string} txt 
 */
exports.CheckWeChat = function (txt) {
    if (!/^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证腾讯QQ号码
 * @param {string} txt 
 */
exports.CheckQQ = function (txt) {
    if (!/[1-9][0-9]{4,}/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证固定电话
 * @param {string} txt 
 */
exports.CheckTelephone = function (txt) {
    if (!/\d{3}-\d{8}|\d{4}-\{7,8}/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证域名
 * @param {string} txt 
 */
exports.CheckDomainName = function (txt) {
    if (!/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证URL
 * @param {string} txt 
 */
exports.CheckURL = function (txt) {
    if (!/^(?=^.{3,255}$)(http(s)?:\/\/){1}(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证车牌号
 * @param {string} txt 
 */
exports.CheckCnLicensePlate = function (txt) {
    if (!/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(txt)) {
        return false;
    }
    return true;
};

/**
 * 验证护照
 * @param {string} txt 
 */
exports.CheckPassport = function (txt) {
    if (!/^(P\d{7}|G\d{7,8}|TH\d{7,8}|S\d{7,8}|A\d{7,8}|L\d{7,8}|\d{9}|D\d+|1[4,5]\d{7})$/.test(txt)) {
        return false;
    }
    return true;
};