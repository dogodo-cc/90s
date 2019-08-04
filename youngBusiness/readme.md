
### `php` 获取微信权限

```php

<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx9be371311ca4e505", "53e50faf5bc0601368de010e2502c54c");
$signPackage = $jssdk->GetSignPackage();
?>
```

### 微信分享

```javascript
 wx.config({
    debug: false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      'checkJsApi',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'previewImage',
      'openLocation',
      'getLocation',
      'closeWindow',
      'hideOptionMenu'
    ]
  });


  wx.ready(function () {
    wx.onMenuShareTimeline({
      title: '晋江青商︱25载辉煌岁月，感恩有你', // 分享标题
      desc: '时光回溯，从1991年成立至今，青商离不开每一位会员始终如一的支持和参与。在换届来临之前，让我们随着时光的车轮穿越回那些见证青商成长的一个个现场……', // 分享描述
      link: '', // 分享链接，该链接域名必须与当前企业的可信域名一致
      imgUrl: 'http://90s.co/young-business/images/share-logo.jpg', // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });

    wx.onMenuShareAppMessage({
      title: '晋江青商︱25载辉煌岁月，感恩有你', // 分享标题
      desc: '时光回溯，从1991年成立至今，青商离不开每一位会员始终如一的支持和参与。在换届来临之前，让我们随着时光的车轮穿越回那些见证青商成长的一个个现场……', // 分享描述
      link: '', // 分享链接，该链接域名必须与当前企业的可信域名一致
      imgUrl: 'http://90s.co/young-business/images/share-logo.jpg', // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
  });
```