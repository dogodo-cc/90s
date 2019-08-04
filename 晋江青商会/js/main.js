
var alan = (function(document, undefined) {
    var readyRE = /complete|loaded|interactive/;
    var idSelectorRE = /^#([\w-]+)$/;
    var classSelectorRE = /^\.([\w-]+)$/;
    var tagSelectorRE = /^[\w-]+$/;
    var translateRE = /translate(?:3d)?\((.+?)\)/;
    var translateMatrixRE = /matrix(3d)?\((.+?)\)/;

    var $ = function(selector, context) {
        context = context || document;
        if (!selector)
            return wrap();
        if (typeof selector === 'object')
            if ($.isArrayLike(selector)) {
                return wrap($.slice.call(selector), null);
            } else {
                return wrap([selector], null);
            }
        if (typeof selector === 'function')
            return $.ready(selector);
        if (typeof selector === 'string') {
            try {
                selector = selector.trim();
                if (idSelectorRE.test(selector)) {
                    var found = document.getElementById(RegExp.$1);
                    return wrap(found ? [found] : []);
                }
                return wrap($.qsa(selector, context), selector);
            } catch (e) {}
        }
        return wrap();
    };

    var wrap = function(dom, selector) {
        dom = dom || [];
        Object.setPrototypeOf(dom, $.fn);
        dom.selector = selector || '';
        return dom;
    };

    /**
     * querySelectorAll
     * @param {type} selector
     * @param {type} context
     * @returns {Array}
     */
    $.qsa = function(selector, context) {
        context = context || document;
        return $.slice.call(classSelectorRE.test(selector) ? context.getElementsByClassName(RegExp.$1) : tagSelectorRE.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector));
    };


    $.uuid = 0;

    $.data = {};

    $.insertAfter = function(elem,tarElem){
        var parent = tarElem.parentNode;
        if (parent.lastChlid == tarElem) {
            parent.appendChild(elem);
        }else{
            parent.insertBefore(elem,tarElem.nextSibling);
        }
    };

    // 查找兄弟元素
    $.getSiblings = function(o){
        var a = [];
        var p = o.previousSibling;
        while(p){
            if(p.nodeType === 1){
                a.push(p);
            }
            p = p.previousSibling;
        }
        a.reverse();

        var n = o.nextSibling;
        while(n){
            if(n.nodeType === 1){
                a.push(n);
            }
            n = n.nextSibling;
        }
        return a;
    };

    $.toggleClass = function( elem, c ) {
        if(elem.classList.contains(c)){
            elem.classList.remove(c);
        }else{
            elem.classList.add(c);
        }
    };

    /* 移动端点击事件模拟PC端hover事件
    * class1,选择匹配的元素
    * class2,匹配元素里的a元素，阻止它跳转
    * */
    $.touchToHover = function (class1,class2) {

        [].slice.call(document.querySelectorAll(class1)).forEach( function( el) {
            el.querySelector(class2).addEventListener( 'touchstart', function(e) {
                console.log(this);
                //e.stopPropagation();
                e.preventDefault();
            }, false );
            el.addEventListener( 'touchstart', function(e) {
                $.toggleClass( this, 'cs-hover' );
            }, false );
        });
    };

    $.getStyle = function(elem,attr){
        return elem.currentStyle ? elem.currentStyle[attr] : window.getComputedStyle(elem,false)[attr];
    };

    $.getElemPosition = function(elem){
        var oPositon = elem.getBoundingClientRect();
        return {
            top:oPositon.top,
            bottom:oPositon.bottom,
            left:oPositon.left,
            right:oPositon.right,
        };
    };

    $.Event = {
        on:function(elem,type,handler){
            if (elem.addEventListener) {
                elem.addEventListener(type,handler,false);
            }else if(elem.attachEvent){
                elem.attachEvent('on'+type,handler);
            }else{
                elem['on'+type] = handler;
            }
        },
        off:function(elem,type,handler){
            if (elem.removeEventListener) {
                elem.removeEventListener(type,handler,false);
            }else if (elem.detachEvent) {
                elem.detachEvent('on'+type,handler);
            }else{
                elem['on'+type] = null;
            }
        },
        getEvent:function(event){ //将它放在事件处理程序的开头，可以确保获取事件。
            return event ? event : window.event;
        },
        getTarget:function(event){ //目标元素
            return event.target || event.srcElement;
        },
        preventDefault:function(event){ //取消默认
            if (event.preventDefault) {
                event.preventDefault();
            }else{
                event.returnValue = false;
            }
        },
        stopPropagation:function(event){ //阻止冒泡
            if (event.stopPropagation) {
                event.stopPropagation();
            }else{
                event.cancelBubble = true;
            }
        },
        getRelatedTarget:function(event){//获得相关元素
            if (event.relatedTarget) {
                return event.relatedTarget;
            }else if (event.toElement) {
                return event.toElement;
            }else if (event.fromElement) {
                return event.fromElement;
            }else{
                return null;
            }
        },
        getButton:function(event){ //获取鼠标按钮
            if (alan.isSupported2) {
                return event.button;
            }else{
                switch(event.button){
                    case 0:
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                        return 0;
                    case 2:
                    case 6:
                        return 2;
                    case 4:
                        return 1;
                }
            }
        },
        getWheelDelta:function(event){ //滚轮的事件
            if (event.wheelDelta) {
                return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
            }else{
                return -event.detail * 40;
            }
        },
        getCharCode:function(event){
            if (typeof event.charCode == 'number') {
                return event.charCode;
            }else{
                return event.keyCode;
            }
        }
    };

    /**
     * 在连续整数中取得一个随机数
     * @param  {number}
     * @param  {number}
     * @param  {string} 'star' || 'end' || 'both'  随机数包括starNum || endNum || both
     * @return 一个随机数
     */
    $.mathRandom = function(starNum,endNum,type){
        var num = endNum - starNum;
        switch (type) {
            case 'star' : return parseInt(Math.random()*num + starNum,10);
            case 'end' : return Math.floor(Math.random()*num + starNum) + 1;
            case 'both' : return Math.round(Math.random()*num + starNum);
            default : console.log('没有指定随机数的范围');
        }
    };

    // 获得数组中最小值
    $.getArrayMin = function(array) {
        /*var min = array[0];
         array.forEach(function (item) {
         if(item < min){
         min = item;
         }
         });
         return min;*/

        return Math.min.apply(Math,array);
    };

    // 获得数组中最大值
    $.getArrayMax = function (array) {
        return Math.max.apply(Math,array);
    };

    // 数组去重复
    $.getArrayNoRepeat = function (array) {
        var noRepeat = [];
        var data = {};
        array.forEach(function (item) {
            if(!data[item]){
                noRepeat.push(item);
                data[item] = true;
            }
        });
        return noRepeat;
    };

    $.isArray = function(val){
        return Array.isArray(val) || Object.prototype.toString.call(val) === '[object Array]';
    };
    $.isFunction = function(val){
        return Object.prototype.toString.call(val) == '[object Function]';
    };
    $.isRegExp = function(val){
        return Object.prototype.toString.call(val) == '[object RegExp]';
    };

    $.isMacWebkit = (navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Version") !== -1);
    $.isFirefox = (navigator.userAgent.indexOf("Firefox") !== -1);
    $.isWeChat = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    };

    // 检测浏览器对css的支持情况
    $.testProperty = function(property){
        var root = document.documentElement;
        if (property in root.style) {
            root.classList.add(property.toLowerCase());
            return true;
        }

        root.classList.add('no-' + property.toLowerCase());
        return false;
    };

    //
    $.fn = {
        each: function(callback) {
            [].every.call(this, function(el, idx) {
                return callback.call(el, idx, el) !== false;
            });
            return this;
        }
    };

    //兼容 AMD 模块
    if (typeof define === 'function' && define.amd) {
        define('alan', [], function() {
            return $;
        });
    }
    return $;
})(document);

// 判断是否支持触摸事件
var hasTouch = "ontouchstart" in window;
var startEvent = hasTouch ? "touchstart" : "mousedown";
var moveEvent = hasTouch ? "touchmove" : "mousemove";
var endEvent = hasTouch ? "touchend" : "mouseup";

// 滚动动画
(function ($) {
    /*
    * 需要在css文件里添加 .scroll-animate.animated {visibility: hidden;} 样式，解决"闪一下"的bug
    * .disable-hover {pointer-events: none;} 也需要加在样式表中
    * 如果滚动事件失效，查看body元素是否设置了 {height:100%}，它会影响滚动事件。
    * 如果不希望动画每次滚动都出现，可以给动画元素加 no-show-again 类名。
    * */

    var ScrollAnimate = function (opt) {
        this.opt = opt || {};
        this.className = this.opt.className || '.scroll-animate'; // 获取集合的class
        this.animateClass = this.opt.animateClass || 'animated';  // 动画依赖的class
        this.elem = document.querySelectorAll(this.className);    // 需要滚动展示的元素
        this.position = [];                                       // 所有元素的offsetTop距离数组
        this.windowHeight = ('innerHeight' in window) ? window.innerHeight : document.documentElement.clientHeight;
        this.time = null;
        this.body = document.body;
        this.touchEndTime = null;
        this.init();

        // 为播放音乐拓展的功能
        this.music = document.getElementById('music');
        this.musicBox = document.querySelectorAll('.scroll-music');
        this._musicBox = [].slice.call(this.musicBox).reverse();
        this.musicBoxPosition = [];
        this.musicBoxLength = this.musicBox.length;

        this.step1_top = 0;
        this.step2 = document.querySelector('.step-2');
        this.step3 = document.querySelector('.step-3');

    };
    ScrollAnimate.prototype = {
        getPosition:function () {
            var self = this;
            self.position.length = 0;  // 重置数组
            [].slice.call(self.elem).forEach(function (elem) {
                if(elem.classList.contains('father')){
                    var children = elem.querySelectorAll(elem.dataset.child);
                    var delay = parseFloat(elem.dataset.delay);
                    [].slice.call(children).forEach(function (obj,index) {
                        obj.classList.add('animated');
                        obj.style.visibility = 'hidden';

                        if(obj.dataset.delay){
                            obj.style.animationDelay = obj.dataset.delay + 's';
                        }else{
                            obj.style.animationDelay = delay * index + 's';
                        }
                    })
                }else if(elem.classList.contains('font-fadeIn')){
                    elem.style.visibility = 'hidden';
                }else{
                    elem.classList.add('animated');
                }
                self.position.push(self.getOffsetTop(elem));
            });
        },
        getMusicPosition:function () {
            var self = this;
            self.musicBoxPosition.length = 0;
            if(self.musicBox.length < 0) return false;
            [].slice.call(self.musicBox).forEach(function (elem) {
                self.musicBoxPosition.push(self.getOffsetTop(elem));
            })
        },
        getOffsetTop:function(element){
            var top;
            while (element.offsetTop === void 0) {
                element = element.parentNode;
            }
            top = element.offsetTop;
            while (element = element.offsetParent) {
                top += element.offsetTop;
            }
            return top;
        },
        scrollEvent:function () {
            var self = this;


            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            //console.log('滚动事件触发，滚动距离是' + scrollTop)
            self.position.forEach(function (item,index) {
                var currentElem = self.elem[index];
                var effect = currentElem.dataset.effect || 'slideInLeft';
                var flag = (scrollTop + (self.windowHeight*.75) > item) ? true : false;

                // 判断当前元素是否有father，得知将动画应用到当前元素还是当前元素到子元素。
                if(currentElem.classList.contains('father')){
                    var children = currentElem.querySelectorAll(currentElem.dataset.child);

                    if(flag){
                        [].slice.call(children).forEach(function (item) {

                            if(item.style.visibility == 'hidden'){
                                item.style.visibility = 'visible';

                                // 判断是否为滚动数字效果的元素
                                // 数字滚动的效果，默认都放在father的容器里，因为这个效果一般都是多个同时出现。
                                if(item.classList.contains('count-up')){
                                    //self.countUp(item,true);
                                }else{
                                    if(item.dataset.effect){
                                        item.classList.add(item.dataset.effect);
                                    }else{
                                        item.classList.add(effect);
                                    }
                                }

                            }
                        })
                    }else{
                        [].slice.call(children).forEach(function (item) {
                            if(item.style.visibility == 'visible' && !item.classList.contains('no-show-again')){
                                /*if(item.classList.contains('count-up')){
                                    self.countUp(item,false);      // 传入false，告诉函数清空计时器。
                                }*/

                                if(item.dataset.effect){
                                    item.classList.remove(item.dataset.effect);
                                }else{
                                    item.classList.remove(effect);
                                }

                                if(!item.classList.contains('no-show-again')){
                                    item.style.visibility = 'hidden';
                                }
                            }
                        });
                    }
                }else if(currentElem.classList.contains('font-fadeIn')){  // 文字淡入到效果
                    if(flag && currentElem.style.visibility == 'hidden'){
                        self.fontEffect(currentElem);
                    }else if(!flag && currentElem.style.visibility == 'visible' && !currentElem.classList.contains('no-show-again')){
                        currentElem.style.visibility = 'hidden';
                    }
                }else{
                    if(flag){
                        currentElem.style.visibility = 'visible';
                        currentElem.classList.add(effect);
                        currentElem.style.animationDelay = currentElem.dataset.delay + 's';

                    }else{
                        if(currentElem.style.visibility == 'visible' && !currentElem.classList.contains('no-show-again')){
                            currentElem.classList.remove(effect);
                            currentElem.style.visibility = 'hidden';
                        }
                    }
                }
            });

            // 获取音乐索引
            for(var i =0;i<self.musicBoxPosition.length;i++){
                //console.log(scrollTop + (self.windowHeight/2),self.musicBoxPosition);
                if(scrollTop + (self.windowHeight*.75) > self.musicBoxPosition[i] && scrollTop + (self.windowHeight*.75) - self.musicBoxPosition[i] < self.windowHeight/3 ){
                    // 滚动高度大于 它 又不大过于 多少。
                    self.changeBgm(self._musicBox[i].dataset.music);
                    break;
                }
            }

            // 灌篮高手
            if(scrollTop + (self.windowHeight*.75) < self.step1_top){
                self.step2.classList.remove('on');
                self.step3.classList.remove('on');
            }


        },
        changeBgm:function(a){
            var self = this;
            // 如果当前已经在播放 传入的音乐，则不执行，避免重复播放
            if (!(self.music.src === a)) {
                //alert(a);
                self.music.src = a;
                self.music.load();
                self.music.play();
                self.music.oncanplay = function() {
                    self.music.play();
                };
                console.log(self.music.src)
            }else {
                console.log('我不接受相同的路径')


                //  这句代码拯救了我BGM很难触发播放的bug，果然洗澡完会有不同的思路。
                if(self.music.paused){
                    self.music.play();
                }
            }
        },
        fontEffect:function (elem) {
            var array = elem.dataset.text.split('');
            //var array = elem.innerText.split('');
            var delay = elem.dataset.delay;
            var effect = elem.dataset.effect || 'fadeIn';
            elem.innerHTML = '';
            var Fragment = document.createDocumentFragment();
            array.forEach(function (item,i) {
                var span = document.createElement("font");
                span.className='animated';
                span.classList.add(effect);
                if(delay){
                    span.style.animationDelay = delay * i + 's';
                }else{
                    span.style.animationDelay = 0.1 * i + 's';
                }
                span.innerText = item;
                Fragment.appendChild(span);
            });
            elem.style.visibility = 'visible';
            elem.appendChild(Fragment);
        },
        init:function () {
            var self = this;

            if(self.elem.length < 1){
                console.log('滚动动画对象集合为零');
                return;
            }

            self.scrollEvent = self.scrollEvent.bind(this);

            setTimeout(function () {
                self.getPosition(); // 获取每个元素的位置，存放在一个数组。
                self.getMusicPosition(); // 同上面的操作

                self.musicBoxPosition.sort(function (a,b) {
                    return b-a;
                });

                self.step1_top = self.getOffsetTop(document.querySelector('.step-1'));
                self.scrollEvent();

                console.log(self.musicBoxPosition);

                // var _scrollEvent = throttlePro(self.scrollEvent,100,300);  // 移动端不截流，流畅性考虑。


                document.addEventListener(startEvent,self.scrollEvent,false);

                //document.addEventListener(moveEvent,self.scrollEvent,false);
                document.addEventListener(moveEvent,function () {
                    self.scrollEvent();

                    // 为了解决touchEnd 事件不能被触发，在move事件里放一个定时器来模拟end事件。
                    // 用于移动端快速滑动页面，丢失end事件的bug。
                    clearTimeout(self.touchEndTime);
                    self.touchEndTime = setTimeout(function () {
                        self.scrollEvent();
                    },1500);
                },false);

                document.addEventListener(endEvent,self.scrollEvent,false);   // 不能触发

                // 改变窗口大小，重新初始化一些数据
                window.onresize = function () {

                    throttle(function () {
                        self.windowHeight = ('innerHeight' in window) ? window.innerHeight : document.documentElement.clientHeight;
                        self.getPosition();
                        self.getMusicPosition();
                        self.musicBoxPosition.sort(function (a,b) {
                            return b-a;
                        });
                        self.scrollEvent();
                    })
                };
            },0);

        }
    };

    $.scrollAnimate = ScrollAnimate;

})(alan);

// 函数截流
function throttle(method,context){
    clearTimeout(method.tId);
    method.tId = setTimeout(function(){
        method.call(context);
    },500);
}

/*

 window.addEventListener('resize',function () {
    throttle(resizeFn,window);
 },false);

 把需要在resize事件后执行的任务放在resizeFn 里面，用addEventListener 避免覆盖了window的其他resize事件。

*/

function throttlePro(fn, delay, mustRunDelay){
    var timer = null;
    var t_start;
    return function(){
        var context = this, args = arguments, t_curr = +new Date();
        clearTimeout(timer);
        if(!t_start){
            t_start = t_curr;
        }
        if(t_curr - t_start >= mustRunDelay){
            fn.apply(context, args);
            t_start = t_curr;
        }
        else {
            timer = setTimeout(function(){
                fn.apply(context, args);
            }, delay);
        }
    };
}


// 独立出来的文字展示效果，经常运用在轮播效果的回调函数里。
function font_effect(elems) {
    [].slice.call(elems).forEach(function (elem) {
        elem.style.visibility = 'visible';
        var array = elem.dataset.text.split('');
        var delay = elem.dataset.delay;
        var effect = elem.dataset.effect || 'fadeIn';
        elem.innerHTML = '';
        var Fragment = document.createDocumentFragment();
        array.forEach(function (item,i) {
            var span = document.createElement("font");
            span.className='animated';
            span.classList.add(effect);
            if(delay){
                span.style.animationDelay = delay * i + 's';
            }else{
                span.style.animationDelay = 0.1 * i + 's';
            }
            span.innerText = item;
            Fragment.appendChild(span);
        });
        elem.style.visibility = 'visible';
        elem.appendChild(Fragment);
    })
}


// 打字机效果 英文效果不错，中文不推荐使用。
/*
 typeEffect({
     elem:dom,
     speed:75,
     callBack:fn
  });
* */


// 代码部分

new alan.scrollAnimate();
var auBgmF = true;
var bgmObj = document.getElementById("auBgm");

bgmObj.oncanplay = function() {
    if (auBgmF) {
        bgmObj.play();
    }
};
bgmObj.onplay = function() {
    auBgmF = false;
};

document.addEventListener(startEvent, function() {
    if (auBgmF) {
        bgmObj.play();
        auBgmF = false;
    }
});
document.addEventListener("WeixinJSBridgeReady", function() {
    if (auBgmF) {
        bgmObj.play();
        auBgmF = false;
    }
});


// 加载页面不允许点击和滑动。
document.querySelector('.loading').addEventListener(startEvent,function (e) {
    e.preventDefault();
    e.stopPropagation();
},false);


var imgArray = [
    'https://www90s.co/晋江青商会/images/body-bg.jpg',
    'https://www90s.co/晋江青商会/images/p1-1.png',
    'https://www90s.co/晋江青商会/images/p1-2a.png',
    'https://www90s.co/晋江青商会/images/p1-2b.png',
    'https://www90s.co/晋江青商会/images/p1-3.png',
    'https://www90s.co/晋江青商会/images/p1-4.png',
    'https://www90s.co/晋江青商会/images/p2-0-1992.png',
    'https://www90s.co/晋江青商会/images/p2-0-1993.png',
    'https://www90s.co/晋江青商会/images/p2-0-1994.png',
    'https://www90s.co/晋江青商会/images/p2-0-1995.png',
    'https://www90s.co/晋江青商会/images/p2-0.png',
    'https://www90s.co/晋江青商会/images/p2-1-txt.png',
    'https://www90s.co/晋江青商会/images/p2-1.png',
    'https://www90s.co/晋江青商会/images/p2-2.png',
    'https://www90s.co/晋江青商会/images/p2-3-light.png',
    'https://www90s.co/晋江青商会/images/p2-3-people.png',
    'https://www90s.co/晋江青商会/images/p2-3-txt.png',
    'https://www90s.co/晋江青商会/images/p2-3.png',
    'https://www90s.co/晋江青商会/images/p2-4-a.png',
    'https://www90s.co/晋江青商会/images/p2-4-b.png',
    'https://www90s.co/晋江青商会/images/p2-4.png',
    'https://www90s.co/晋江青商会/images/p2-5-shang.png',
    'https://www90s.co/晋江青商会/images/p2-5-txt.png',
    'https://www90s.co/晋江青商会/images/p2-5-yun.png',
    'https://www90s.co/晋江青商会/images/p2-5.png',
    'https://www90s.co/晋江青商会/images/p2-6-txt.png',
    'https://www90s.co/晋江青商会/images/p2-6.png',
    'https://www90s.co/晋江青商会/images/p2-7.png',
    'https://www90s.co/晋江青商会/images/p3-1-bg.png',
    'https://www90s.co/晋江青商会/images/p3-1-txt.png',
    'https://www90s.co/晋江青商会/images/p3-2-bg.png',
    'https://www90s.co/晋江青商会/images/p3-2-people.png',
    'https://www90s.co/晋江青商会/images/p3-2-txt.png',
    'https://www90s.co/晋江青商会/images/p3-3-bg.png',
    'https://www90s.co/晋江青商会/images/p3-3-txt.png',
    'https://www90s.co/晋江青商会/images/p3-4-bg.png',
    'https://www90s.co/晋江青商会/images/p3-4-txt.png',
    'https://www90s.co/晋江青商会/images/p3-5-bg.png',
    'https://www90s.co/晋江青商会/images/p3-5-icon1.png',
    'https://www90s.co/晋江青商会/images/p3-5-icon2.png',
    'https://www90s.co/晋江青商会/images/p3-5-icon3.png',
    'https://www90s.co/晋江青商会/images/p3-6-txt.png',
    'https://www90s.co/晋江青商会/images/p3-6.png',
    'https://www90s.co/晋江青商会/images/p3-7.png',
    'https://www90s.co/晋江青商会/images/p4-1.png',
    'https://www90s.co/晋江青商会/images/p4-2.png',
    'https://www90s.co/晋江青商会/images/p4-3-txt.png',
    'https://www90s.co/晋江青商会/images/p4-3.png',
    'https://www90s.co/晋江青商会/images/p4-4-txt.png',
    'https://www90s.co/晋江青商会/images/p4-4.png',
    'https://www90s.co/晋江青商会/images/p4-5-people.png',
    'https://www90s.co/晋江青商会/images/p4-5.png',
    'https://www90s.co/晋江青商会/images/p4-6.png',
    'https://www90s.co/晋江青商会/images/p4-7-txt.png',
    'https://www90s.co/晋江青商会/images/p4-7.png',
    'https://www90s.co/晋江青商会/images/p5-1-a-1.png',
    'https://www90s.co/晋江青商会/images/p5-1-a-2.png',
    'https://www90s.co/晋江青商会/images/p5-1-a-3.png',
    'https://www90s.co/晋江青商会/images/p5-1-a-4.png',
    'https://www90s.co/晋江青商会/images/p5-1-a-5.png',
    'https://www90s.co/晋江青商会/images/p5-1-a-txt.png',
    'https://www90s.co/晋江青商会/images/p5-1-a.png',
    'https://www90s.co/晋江青商会/images/p5-1-b-txt.png',
    'https://www90s.co/晋江青商会/images/p5-1-b.png',
    'https://www90s.co/晋江青商会/images/p5-1-c-txt.png',
    'https://www90s.co/晋江青商会/images/p5-1-c.png',
    'https://www90s.co/晋江青商会/images/p5-1-d-txt.png',
    'https://www90s.co/晋江青商会/images/p5-1-d.png',
    'https://www90s.co/晋江青商会/images/p5-1-video.png',
    'https://www90s.co/晋江青商会/images/p5-2-people.png',
    'https://www90s.co/晋江青商会/images/p5-2.png',
    'https://www90s.co/晋江青商会/images/p5-3-txt.png',
    'https://www90s.co/晋江青商会/images/p5-3.png',
    'https://www90s.co/晋江青商会/images/p5-4-txt.png',
    'https://www90s.co/晋江青商会/images/p5-4.png',
    'https://www90s.co/晋江青商会/images/p5-5-txt.png',
    'https://www90s.co/晋江青商会/images/p5-5.png',
    'https://www90s.co/晋江青商会/images/p5-6-leaf.png',
    'https://www90s.co/晋江青商会/images/p5-6-txt.png',
    'https://www90s.co/晋江青商会/images/p5-6.png',
    'https://www90s.co/晋江青商会/images/p6-1-txt.png',
    'https://www90s.co/晋江青商会/images/p6-1.png',
    'https://www90s.co/晋江青商会/images/p6-1b-txt.png',
    'https://www90s.co/晋江青商会/images/p6-1b.png',
    'https://www90s.co/晋江青商会/images/p6-2-txt.png',
    'https://www90s.co/晋江青商会/images/p6-2.png',
    'https://www90s.co/晋江青商会/images/p6-3.png',
    'https://www90s.co/晋江青商会/images/p6-4.png',
    'https://www90s.co/晋江青商会/images/p6-5.png',
    'https://www90s.co/晋江青商会/images/p6-6-txt.png',
    'https://www90s.co/晋江青商会/images/p6-6.png',
    'https://www90s.co/晋江青商会/images/p7.png',
    'https://www90s.co/晋江青商会/images/p8-icon1.png',
    'https://www90s.co/晋江青商会/images/p8-icon2.png',
    'https://www90s.co/晋江青商会/images/p8-logo.png',
    'https://www90s.co/晋江青商会/images/share.png',
    "https://www90s.co/晋江青商会/images/step/baiyun.png",
    "https://www90s.co/晋江青商会/images/step/ball.png",
    "https://www90s.co/晋江青商会/images/step/news-paper.png",
    "https://www90s.co/晋江青商会/images/step/pao-1.png",
    "https://www90s.co/晋江青商会/images/step/pao-2.png",
    "https://www90s.co/晋江青商会/images/step/yanhua.png"
];

var musicList = [
    "https://www90s.co/晋江青商会/mp3/ball.mp3",
    "https://www90s.co/晋江青商会/mp3/pao.mp3",
    "https://www90s.co/晋江青商会/mp3/type2.mp3",
    "https://www90s.co/晋江青商会/mp3/yanhua.mp3"
];
musicList.forEach(function (item) {
    var audio = document.createElement("audio");
    audio.src = item;
    audio.preload = "auto";
    audio.volume = 0;
    audio.load();
    audio.oncanplay = function () {
        console.log(this.src + '加载成功！');
    }
});


var loading = document.querySelector('.loading');
var proses = loading.querySelector('.proses');

function loadimg(imglist,okfn) {
    var mimglist = imglist;
    var loadOk = 0;
    var loadOkList = [];
    var t = this;
    for (var i = 0; i < mimglist.length; i++) {
        var img = new Image();
        img.src = mimglist[i];

        if (img.readyState == "complete") {
            if (loadOkList.indexOf(img.src) < 0) {
                loadOkList.push(img.src);
                loadOk++;

            }
            t.loadOk();
        } else {
            img.onload = function () {
                if (loadOkList.indexOf(this.src) < 0) {
                    loadOkList.push(this.src);
                    loadOk++;
                }
                t.loadOk();
            }
        }
    }
    this.loadOk = function () {
        proses.innerHTML = "已经加载"+ parseInt((loadOk / mimglist.length) * 100) + '%';
        if (loadOk == mimglist.length) {
            okfn();
        }
    }
}
loadimg(imgArray,function () {
    loading.classList.add('loaded');
    loading.addEventListener('webkitTransitionEnd',function () {
        loading.parentNode && loading.parentNode.removeChild(loading);
    },false);
});

// 打字机效果
var txtBox = document.querySelector('.txt-box ');
var txtBoxH1 = txtBox.querySelector('h1');
var txtBoxP = txtBox.querySelector('p');
var txtBoxh2 = txtBox.querySelector('h2');
var needType = true;  // 是否需要打字

// 原生js
function typeEffect(opt) {
    var text = opt.elem.getAttribute('data-typeText');
    var _speed = opt.speed || 75;
    opt.elem.innerHTML = '';

    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length && needType) {
            opt.elem.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
             opt.callBack && opt.callBack();
        }
    }, _speed);
}


txtBox.addEventListener('webkitTransitionEnd',function () {
    if(txtBox.classList.contains('print')){ // 说明是出现的时候，
        needType = true;
        typeEffect({
            elem:txtBoxH1,
            speed:150,
            callBack:function () {
                typeEffect({
                    elem:txtBoxP,
                    speed:150,
                    callBack:function () {
                        if(needType){
                            txtBoxh2.className = "animated fadeInUp";
                        }

                    }
                });
            }
        });
    }else{
        resetTxtBox();
    }
},false);

// 鲁迅出现之后
/*txtBoxh2.addEventListener('webkitAnimationEnd',function () {
    if(txtBox.classList.contains('print')){
        setTimeout(function () {
            txtBox.style.display = 'none';
            logoBox.classList.add('on');

            // 让内容滑到底
            document.documentElement.scrollTop = 100000;
            window.pageYOffset = 100000;
            document.body.scrollTop = 100000;
        },2000);
    }
},false);*/

// 分享的功能
var shareBtn = document.querySelector('.btns .r');
var share = document.querySelector('.share');


shareBtn.addEventListener('click',function (event) {
    event.preventDefault();
    event.stopPropagation();
    share.style.display = 'block';
},false);




// 再看一遍
var again = document.querySelector('.btns .l');


again.addEventListener(startEvent,function () {
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    document.body.scrollTop = 0;

    resetTxtBox();

    share.style.display = 'none';

},false);

function resetTxtBox() {
    // 把文字那部分都初始化
    needType = false;
    txtBox.style.display = 'flex';
    txtBox.style.visibility = 'visible';
    txtBox.classList.remove('print');

    txtBoxH1.innerHTML = '';
    txtBoxP.innerHTML = '';
    txtBoxh2.className = '';
}

// 灌篮高手
var step_1 = document.querySelector('.step-1');
var step_2 = document.querySelector('.step-2');
var step_3 = document.querySelector('.step-3');

step_1.addEventListener('webkitAnimationEnd',function () {
    if(this.classList.contains('slideInLeft')){
        step_2.classList.add('on');
    }

},false);

step_2.addEventListener('webkitTransitionEnd',function () {
    if(this.classList.contains('on')){
        step_3.classList.add('on');
    }
},false);

// 分享


