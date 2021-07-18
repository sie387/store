
var index = parseInt(Math.random()*(2-0+1)+0,10);
var jscdn = ['niei35/store','sie387/store','asarobot/ttt01'];
var ver = 1;
var html = `<html lang="en">
 <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
  <title></title>
  <link rel="icon" href="/favicon.ico" />
  <link href="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/css/a.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/css/b.css" rel="stylesheet" />
  <script type="text/javascript" src="https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js"></script>
 </head>
 <body style="background:#000;">
  <div id="app">
    <div class="index-index">
     <div class="outlay" style="display:none;" id="gotoweb"><img src="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/img/wechat.png" alt=""></div>
     <div id="slide-container" class="slide-container">
      <div class="slide-page AClass transition" style="transform: translate3d(0px, 0px, 0px);">
       <div class="box">
        <div class="button" data-clipboard-action="copy" onclick="download()">
         <img src="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/img/button.png" alt="" />
        </div>
        <div class="next-common">
         <img src="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/img/jt.png" alt="" />
        </div>
       </div>
      </div>
      <div class="slide-page BClass transition" style="transform: translate3d(0px, 100%, 0px);">
       <div class="box">
        <div class="button" data-clipboard-action="copy" onclick="download()">
         <img src="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/img/button.png" alt="" />
        </div>
        <div class="next-common">
         <img src="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/img/jt.png" alt="" />
        </div>
       </div>
      </div>
      <div class="slide-page CClass transition" style="transform: translate3d(0px, 100%, 0px);">
       <div class="box">
        <div class="button" data-clipboard-action="copy" onclick="download()">
         <img src="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/img/button.png" alt="" />
        </div>
        <div class="next-common">
         <img src="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/img/jt.png" alt="" />
        </div>
       </div>
      </div>
      <div class="slide-page DClass transition" style="transform: translate3d(0px, 100%, 0px);">
       <div class="box">
        <div class="button" data-clipboard-action="copy" onclick="download()">
         <img src="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/img/button.png" alt="" />
        </div>
        <div class="next-common">
         <img src="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/img/jt.png" alt="" />
        </div>
       </div>
      </div>
     </div>
    </div>
    <div class="ios-index" style="display:none;">
     <div class="box">
      <div class="item AClass">
       <div class="setup">
        第一步
       </div>
       <div class="body">
        <div class="text">
         <p id="code1"></p>
         <p>如已安装，请直接操作第二步</p>
        </div>
        <div class="button">
         <a href="https://itunes.apple.com/cn/app/testflight/id899247664?mt=8" target="_blank">
          <div class="ico">
           <img src="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/img/iosA.png" alt="" />
          </div>
          <div id="code2" class="tip"></div></a>
        </div>
       </div>
      </div>
      <div class="item BClass">
       <div class="setup">
        第二步
       </div>
       <div class="body">
        <div class="text">
         <p id="code3"></p>
         <p id="code4"></p>
        </div>
        <div class="button">
         <a href="itms-beta://testflight.apple.com/join/PairhfCn" target="_blank" data-clipboard-action="copy" onclick="iosdownload()" class="clipboard_button">
          <div class="ico">
           <img src="https://cdn.jsdelivr.net/gh/${jscdn[index]}/tg/img/iosB.jpg" alt="" style="border-radius: 6px;" />
          </div>
          <div id="code5" class="tip"></div></a>
        </div>
        <div class="tutorial">
         <div class="text" onclick="video()">
          查看安装教程 &gt;&gt;&gt;
         </div>
        </div>
       </div>
      </div>
      <!---->
     </div>
    </div>
  </div>
  <div class="outlay" style="display:none;" id="videoshow" onclick="closevideo()">
    <video id="demovideo" playsinline webkit-playsinline="true" autoplay controls loop src="pay8.mp4" style="border: 1px solid #333;width:200px;position: fixed;top: 20%;left: 23%;"></video>
  </div>
  <script src="/tg/js/compress.js?v=${ver}"></script>
  <script>

  </script>
 </body>
</html>`;

document.write(html);