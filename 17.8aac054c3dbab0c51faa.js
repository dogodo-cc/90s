(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{193:function(t,e,r){var a=r(255);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(2)(a,i);a.locals&&(t.exports=a.locals)},254:function(t,e,r){"use strict";var a=r(193);r.n(a).a},255:function(t,e,r){(t.exports=r(1)(!1)).push([t.i,'.uxms-draw{padding-top:50px;overflow:hidden}.uxms-draw .title{font-size:20px;padding:20px 0;text-align:center}.uxms-draw .switch{position:fixed;left:0;bottom:0}.draw-turntable{position:relative;width:300px;height:300px;margin:30px auto}.draw-turntable .turntable{position:relative;width:100%;height:100%;left:50%}.draw-turntable .turntable,.draw-turntable .turntable .piece{-webkit-transform-origin:left center;transform-origin:left center}.draw-turntable .turntable .piece{position:absolute;left:0;top:0;width:150px;height:300px;border-radius:0 150px 150px 0}.draw-turntable .turntable .piece .content{width:50%;height:50%;-webkit-transform:rotate(15deg);transform:rotate(15deg);-webkit-transform-origin:left top;transform-origin:left top;text-align:center}.draw-turntable .turntable .piece .content span{color:#fff}.draw-turntable .turntable .piece:nth-child(2n){background-image:linear-gradient(120deg,green,green 75px,transparent 0)}.draw-turntable .turntable .piece:nth-child(odd){background-image:linear-gradient(120deg,#ccc,#ccc 75px,transparent 0)}.draw-turntable .turntable .piece-0{-webkit-transform:rotate(-30deg);transform:rotate(-30deg)}.draw-turntable .turntable .piece-1{-webkit-transform:rotate(-60deg);transform:rotate(-60deg)}.draw-turntable .turntable .piece-2{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.draw-turntable .turntable .piece-3{-webkit-transform:rotate(-120deg);transform:rotate(-120deg)}.draw-turntable .turntable .piece-4{-webkit-transform:rotate(-150deg);transform:rotate(-150deg)}.draw-turntable .turntable .piece-5{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.draw-turntable .turntable .piece-6{-webkit-transform:rotate(-210deg);transform:rotate(-210deg)}.draw-turntable .turntable .piece-7{-webkit-transform:rotate(-240deg);transform:rotate(-240deg)}.draw-turntable .turntable .piece-8{-webkit-transform:rotate(-270deg);transform:rotate(-270deg)}.draw-turntable .turntable .piece-9{-webkit-transform:rotate(-300deg);transform:rotate(-300deg)}.draw-turntable .turntable .piece-10{-webkit-transform:rotate(-330deg);transform:rotate(-330deg)}.draw-turntable .start{width:50px;height:50px;background-color:#fff;border-radius:50%;position:absolute;left:50%;top:50%;margin-left:-25px;margin-top:-25px}.draw-turntable .start:after{display:block;position:absolute;left:50%;top:-18px;margin-left:-10px;content:"";width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:20px solid #fff}',""])},273:function(t,e,r){"use strict";r.r(e);var a={name:"draw",data:()=>({pieces:["冻结","冰粉","王导","再来","元帅","腰果","冻结","希罗","童童","坐标","焦糖","牛仔"],radis:30,time:0,totalDeg:0,isPlaying:!1,useAudio:!0}),computed:{$audio(){return this.$refs.audio}},methods:{start(){this.isPlaying||(this.isPlaying=!0,this.time=0,this.totalDeg=0,setTimeout(()=>{const t=Math.floor(12*Math.random());this.totalDeg=1800+this.radis*t+this.radis/2,this.time=1e4,this.playAudio(),console.log(this.pieces[t],t)},100))},playAudio(){if(!this.useAudio)return;const{$audio:t}=this;t.paused&&t.play()}}},i=(r(254),r(10)),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uxms-draw"},[r("el-switch",{staticClass:"switch",model:{value:t.useAudio,callback:function(e){t.useAudio=e},expression:"useAudio"}}),t._v(" "),r("div",{staticClass:"title"},[t._v("设计工坊&哥伦布尾牙抽奖")]),t._v(" "),r("div",{staticClass:"draw-turntable"},[r("div",{staticClass:"turntable",style:{transform:"rotate("+t.totalDeg+"deg)",transition:"transform "+t.time+"ms cubic-bezier(0, .31, .57, 1.03)"},on:{transitionend:function(e){t.isPlaying=!1}}},t._l(t.pieces,(function(e,a){return r("div",{key:a,class:["piece","piece-"+a]},[r("div",{staticClass:"content"},[r("span",[t._v(t._s(e))])])])})),0),t._v(" "),r("div",{staticClass:"start",on:{click:t.start}})]),t._v(" "),r("audio",{ref:"audio",attrs:{preload:"",src:"https://st-gdx.dancf.com/assets/20200111-170134-3df4.mov"}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);