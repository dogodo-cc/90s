(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{202:function(t,s,i){var a=i(268);"string"==typeof a&&(a=[[t.i,a,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};i(2)(a,e);a.locals&&(t.exports=a.locals)},267:function(t,s,i){"use strict";var a=i(202);i.n(a).a},268:function(t,s,i){(s=i(1)(!1)).push([t.i,".uxms-draw{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;height:100vh;overflow:hidden;background:url(https://st-gdx.dancf.com/assets/20200113-202526-e195.png) top no-repeat;background-size:cover;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.uxms-draw.pc{width:375px;height:667px;margin:0 auto}.uxms-draw .turntable-box{position:relative;width:320px;height:320px}.uxms-draw .turntable-box .turntable{position:relative;width:100%;height:100%;background:url(https://st-gdx.dancf.com/assets/20200114-185530-f432.png) 50% no-repeat;background-size:cover;-webkit-transform-origin:center center;transform-origin:center center}.uxms-draw .turntable-box .start{width:80px;height:80px;background-color:#fff;border-radius:50%;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uxms-draw .turntable-box .start img{max-width:100%;width:100%;margin-top:-15px}.uxms-draw .footer,.uxms-draw .header{max-width:100%}",""]),t.exports=s},283:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"uxms-draw",class:{pc:!t.isPhone}},[i("img",{staticClass:"header",attrs:{src:"https://st-gdx.dancf.com/assets/20200114-185809-40e7.png",alt:""},on:{click:function(s){t.isMuted=!t.isMuted}}}),t._v(" "),i("div",{staticClass:"turntable-box"},[i("div",{staticClass:"turntable",style:{transform:"rotate("+t.totalDeg+"deg)",transition:"transform "+t.time+"ms cubic-bezier(0, .31, .57, 1.03)"},on:{transitionend:function(s){t.isPlaying=!1}}}),t._v(" "),i("div",{staticClass:"start",on:{click:t.start}},[i("audio",{ref:"audio",attrs:{muted:t.isMuted,preload:"",src:"https://st-gdx.dancf.com/assets/20200111-170134-3df4.mov"}}),t._v(" "),i("img",{attrs:{src:"https://st-gdx.dancf.com/assets/20200114-185605-9076.png",alt:""}})])]),t._v(" "),i("img",{staticClass:"footer",attrs:{src:"https://st-gdx.dancf.com/assets/20200114-185831-411c.png",alt:""}})])};a._withStripped=!0;var e=i(44),r={name:"draw",data:()=>({radis:30,time:0,totalDeg:0,isPlaying:!1,isMuted:!0,isPhone:e.c}),computed:{$audio(){return this.$refs.audio}},methods:{start(){this.isPlaying||(this.isPlaying=!0,this.time=0,this.totalDeg=0,setTimeout(()=>{const t=Math.floor(12*Math.random());this.totalDeg=2880+this.radis*t+this.radis/2,this.time=1e4,this.playAudio()},30))},playAudio(){const{$audio:t}=this;t.paused&&t.play()}}},o=(i(267),i(10)),n=Object(o.a)(r,a,[],!1,null,null,null);n.options.__file="src/views/note/draw/turntable.vue";s.default=n.exports}}]);