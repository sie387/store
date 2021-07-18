function fromCode (str) {
  //定义密钥，36个字母和数字
  var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var l = key.length;  //获取密钥的长度
  var b, b1, b2, b3, d = 0, s;  //定义临时变量
  s = new Array(Math.floor(str.length / 3));  //计算加密字符串包含的字符数，并定义数组
  b = s.length;  //获取数组的长度
  for (var i = 0; i < b; i ++) {  //以数组的长度循环次数，遍历加密字符串
    b1 = key.indexOf(str.charAt(d));  //截取周期内第一个字符串，计算在密钥中的下标值
    d ++;
    b2 = key.indexOf(str.charAt(d));  //截取周期内第二个字符串，计算在密钥中的下标值
    d ++;
    b3 = key.indexOf(str.charAt(d));  //截取周期内第三个字符串，计算在密钥中的下标值
    d ++;
    s[i] = b1 * l * l + b2 * l + b3  //利用下标值，反推被加密字符的Unicode编码值
  }
  b = eval("String.fromCharCode(" + s.join(',') + ")");//用fromCharCode()算出字符串
  return b ;  //返回被解密的字符串
}

var title = 'RVHHKJI3CK3DP5DO9L';
document.title = fromCode(title);
var code1 = 'UC6G20I2XR0L9HS02C02T03703801Y03002X02V02W0389HTMD2GLQSESH5QKDOU45';
$('#code1').html(fromCode(code1));
var code2 = 'I2XR0L00W02C02T03703801Y03002X02V02W038';
$('#code2').html(fromCode(code2));
var code3 = 'M9LG6ZFEZSCD00W9HSRVHHKJR7QU4X9HT';
$('#code3').html(fromCode(code3));
var code4 = 'RNBGE7H7SJ67GLPI1J00WFEZSCDGLQJF7IRKGHFFGARVHHKJR7QU4X';
$('#code4').html(fromCode(code4));
var code5 = 'FEZSCD00WRVHHKJR7QU4X';
$('#code5').html(fromCode(code5));
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
if (getQueryString('code')) {
  $('.button').attr('data-clipboard-text',getQueryString('code'));
  $('.clipboard_button').attr('data-clipboard-text',getQueryString('code'));
}
new slidePage({
  slideContainer: '#slide-container',
  slidePages: '.slide-page',
  page: 1,
  refresh: true,
  dragMode: false,
  useWheel: true,
  useSwipe: true,
  useAnimation: true,
});
function verifyQQ() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf(' qq') > -1 || ua.indexOf('micromessenger') > -1) {
    $('#gotoweb').show();
    return true;
  }
  return false;
}
function download(obj) {
  if (verifyQQ()) {
    return false;
  }
  var clipname = new ClipboardJS('.button');
  clipname.on('success', function(e) {console.log('ok')});
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('iphone') > -1) {
    $('.ios-index').show();
    $('.index-index').hide();
  } else {
    window.location.href = 'kan_2.apk';
  }
}
function iosdownload() {
  var clipname = new ClipboardJS('.button');
  clipname.on('success', function(e) {console.log('ok')});
}
function video() {
  $('#videoshow').show();
  document.getElementById('demovideo').play();
}
function closevideo() {
  $('#videoshow').hide();
  document.getElementById('demovideo').pause();
}