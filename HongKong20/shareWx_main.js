!function(e, n) {
        function t() {
            var e = navigator.userAgent.toLocaleLowerCase();
            return !!e.match(/micromessenger/gi)
        }
        function o(e, n, t) {
            var o = "css" == e,
                i = o ? "link" : "script";
            _pos = o ? "head" : "body", _attrs = o ? {
                rel: "stylesheet",
                type: "text/css",
                href: n
            } : {
                src: n
            }, _$file = document.createElement(i);
            for (var r in _attrs) _$file.setAttribute(r, _attrs[r]);
            document[_pos].appendChild(_$file), _$file.onload = function() {
                t && t(), _$file.onload = null
            }
        }
        function i(e, t, o) {
            var i = document.createElement("script");
            return i.src = e, i.charset = "utf-8", i.className = t || "dataContainer", i.onerror = o, n.body.appendChild(i), r(i.className), i
        }
        function r(e) {
            var n = e || "dataContainer",
                t = document.querySelector("." + n);
            setTimeout(function() {
                t && Array.prototype.slice.call(t).forEach(function(e) {
                    e.remove()
                }, this)
            }, 200)
        }
        function a(e, n) {
            return {
                title: n.shareInfo.title || "",
                desc: n.shareInfo.desc || "",
                link: n.shareInfo.link || window.location.href,
                imgUrl: n.shareInfo.imgUrl || "http://n.sinaimg.cn/translate/20161121/gWyK-fxxxauy0636236.jpg",
                type: n.shareInfo.type || "",
                dataUrl: n.shareInfo.dataUrl || "",
                success: function() {},
                cancel: function() {}
            }
        }
        function c() {
            var e = _wxConfig || {};
            e.init && (wx.config(e.init), wx.ready(function() {
                wx.onMenuShareAppMessage(a("onMenuShareAppMessage", e)), wx.onMenuShareTimeline(a("onMenuShareTimeline", e))
            }), wx.error(function(e) {}))
        }
        function s() {
            var e = document.querySelector(".sWxImg"),
                n = document.querySelector('[rel="apple-touch-icon-precomposed"]'),
                t = "http://mjs.sinaimg.cn/wap/online/public/images/addToHome/sina_114x114_v1.png",
                o = "";
            return e ? ("IMG" == e.tagName ? o = e.src : (e = e.querySelector("img"), o = e && e.src || ""), o || n && n.href || t) : n && n.href || t
        }
        function l() {
            var e = "undefined" != typeof _wxShareConfig && _wxShareConfig || {},
                n = document.querySelector('[name="description"]'),
                t = s();
            return {
                title: e && e.title || document.title || "",
                desc: e && e.desc || n && n.content || "",
                link: e && e.link || window.location.href,
                imgUrl: e && e.imgUrl || t,
                type: e && e.type || "",
                dataUrl: e && e.dataUrl || ""
            }
        }
        function u() {
            var e = document.location.protocol + "//mp.sina.cn/aj/wechat/gettoken?url=" + encodeURIComponent(window.location.href) + "&callback=setWSignCB";
            i(e)
        }
        function f() {
            var e = t();
            e && u()
        }
        window.setWSignCB = function(e) {
            if ("undefined" != typeof e && 0 == parseInt(e.status) && e.data) {
                var n = e.data,
                    t = document.location.protocol + "//res.wx.qq.com/open/js/jweixin-1.0.0.js",
                    i = l();
                window._wxConfig = {
                    init: {
                        debug: !1,
                        appId: n.appid || "",
                        timestamp: n.time || 0,
                        nonceStr: n.nonceStr || "",
                        signature: n.signature || "",
                        jsApiList: ["onMenuShareAppMessage", "onMenuShareTimeline"]
                    },
                    shareInfo: i
                }, console.log(_wxConfig), o("js", t, c)
            }
        }, f()
    }(window, document);