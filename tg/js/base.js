function toCode (str) {  //加密字符串
  //定义密钥，36个字母和数字
  var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var l = key.length;  //获取密钥的长度
  var a = key.split("");  //把密钥字符串转换为字符数组
  var s = "",b, b1, b2, b3;  //定义临时变量
  for (var i = 0; i <str.length; i ++) {  //遍历字符串
    b = str.charCodeAt(i);  //逐个提取每个字符，并获取Unicode编码值
    b1 = b % l;  //求Unicode编码值得余数
    b = (b - b1) / l;  //求最大倍数
    b2 = b % l;  //求最大倍数的于是
    b = (b - b2) / l;  //求最大倍数
    b3 = b % l;  //求最大倍数的余数
    s += a[b3] + a[b2] + a[b1];  //根据余数值映射到密钥中对应下标位置的字符
  }
  return s;  //返回这些映射的字符
}