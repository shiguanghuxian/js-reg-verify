var reg = require('../src/lib');

// 手机号
console.log('CheckCNPhone', reg.CheckCNPhone('13288888988'));

// 全是中文
console.log('CheckChinese', reg.CheckChinese('你好'))

// 验证由数字、26个英文字母或下划线组成的字符串
console.log('CheckAscii', reg.CheckAscii('sdsds999_'))

// 验证邮箱格式
console.log('CheckEmail', reg.CheckEmail('zuoxiupeng@live.com'))

// 验证15位身份证号
console.log('CheckIdNumBy15', reg.CheckIdNumBy15('130503670401007'))

// 验证18位身份证号
console.log('CheckIdNumBy18', reg.CheckIdNumBy18('110101199003070839'))

// 身份证号严格验证模式
console.log('CheckStrictIdNumBy18', reg.CheckStrictIdNumBy18('110101199003070839'));

// 验证金额格式
console.log('CheckMoney', reg.CheckMoney('88.99'));

// 验证 ip v4
console.log('CheckIpV4', reg.CheckIpV4('8.8.8.8'));

// 验证 ip v6
console.log('CheckIpV6', reg.CheckIpV6('FE80::713e:a426:d167:37ab'));

// 验证2018-10-10格式的日期
console.log('CheckDate', reg.CheckDate('2006-01-2'));

// 验证6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格
console.log('CheckPassword1', reg.CheckPassword1('abc123'));

// 验证6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格），必须包含大写字母
console.log('CheckPassword2', reg.CheckPassword2('99999Aa99999'));

// 验证密码不能为纯数字或字母，不少于6位
console.log('CheckPassword3', reg.CheckPassword3('abc123'));

// 验证微信号
console.log('CheckWeChat', reg.CheckWeChat('abc123'));

// 验证腾讯QQ号码
console.log('CheckQQ', reg.CheckQQ('123456'));

// 验证固定电话
console.log('CheckTelephone', reg.CheckTelephone('010-88888888'));

// 验证域名
console.log('CheckDomainName', reg.CheckDomainName('www.53it.net'));

// 验证URL
console.log('CheckURL', reg.CheckURL('http://www.53it.net'));

// 验证车牌号
console.log('CheckCnLicensePlate', reg.CheckCnLicensePlate('京A88888'));

// 验证护照
console.log('CheckPassport', reg.CheckPassport('P9999999'));

