(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{134:function(t,e,s){var o=s(143);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(4)(o,i);o.locals&&(t.exports=o.locals)},142:function(t,e,s){"use strict";var o=s(134);s.n(o).a},143:function(t,e,s){(t.exports=s(3)(!1)).push([t.i,".box[data-v-91684c9e]{width:400px;height:300px;text-align:center;line-height:300px;background:grey;color:#fff;margin:30px auto}",""])},150:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"box",staticClass:"box"},[e("span",[this._v(this._s(this.text))])])])};o._withStripped=!0;var i={name:"mouse",data:function(){return{text:"",boxW:0,boxH:0,boxL:0,boxT:0}},methods:{fn:function(t){var e=this.boxW,s=this.boxH,o=(t.clientX-this.boxL-e/2)*(e>s?s/e:1),i=(t.clientY-this.boxT-s/2)*(s>e?e/s:1),n=Math.round((Math.atan2(i,o)*(180/Math.PI)+180)/90+3)%4,r=new Array("上方","右侧","下方","左侧");"mouseover"==t.type||"mouseenter"==t.type?this.text=r[n]+"进入":this.text=r[n]+"离开"}},mounted:function(){this.boxW=this.$refs.box.offsetWidth,this.boxH=this.$refs.box.offsetHeight,this.boxL=this.$refs.box.offsetLeft,this.boxT=this.$refs.box.offsetTop,this.$refs.box.addEventListener("mouseover",this.fn,!1),this.$refs.box.addEventListener("mouseout",this.fn,!1)}},n=(s(142),s(12)),r=Object(n.a)(i,o,[],!1,null,"91684c9e",null);r.options.__file="src/views/effects/mouse/index.vue";e.default=r.exports}}]);