(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{354:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"hello-doc"},[t._m(0),t._v(" "),l("p",[t._v("对数据进行筛选")]),t._v(" "),t._m(1),t._v(" "),l("demo-block",[l("div",[l("p",[t._v("支持单选和多选")])]),t._v(" "),l("template",{slot:"source"},[l("element-demo0")],1),t._v(" "),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <div class=\"filters-demo\">\n    <hi-filters title=\"单选\" :value=\"value1\" @change=\"change\" :options=\"opts\"/>\n    <hi-filters title=\"多选\" :value=\"value2\" :multiple=\"true\" @change=\"change2\" :options=\"opts2\"/>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        opts: [{label: '校园',value: 1}, {label: '科技', value: 2}, {label: '复古', value: 3}],\n        opts2: [\n          {label: '校园',value: 1},\n          {label: '科技', value: 2},\n          {label: '复古', value: 3},\n          {label: '可爱', value: 4},\n          {label: '性感', value: 5},\n          {label: '风景', value: 6},\n          {label: '城市', value: 7},\n          {label: '道路', value: 8},\n          {label: '灯光', value: 9},\n          {label: '数码', value: 10},\n        ],\n        value1: '',\n        value2: [],\n      };\n    },\n    methods: {\n      change(v) {\n        this.value1 = v;\n      },\n      change2(v) {\n        this.value2 = v;\n      }\n    }\n  };\n<\/script>\n")])])])],2),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)],1)};a._withStripped=!0;var v={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[[e("div",{staticClass:"filters-demo"},[e("hi-filters",{attrs:{title:"单选",value:this.value1,options:this.opts},on:{change:this.change}}),this._v(" "),e("hi-filters",{attrs:{title:"多选",value:this.value2,multiple:!0,options:this.opts2},on:{change:this.change2}})],1)]],2)};return t._withStripped=!0,{render:t,staticRenderFns:[],...{data:()=>({opts:[{label:"校园",value:1},{label:"科技",value:2},{label:"复古",value:3}],opts2:[{label:"校园",value:1},{label:"科技",value:2},{label:"复古",value:3},{label:"可爱",value:4},{label:"性感",value:5},{label:"风景",value:6},{label:"城市",value:7},{label:"道路",value:8},{label:"灯光",value:9},{label:"数码",value:10}],value1:"",value2:[]}),methods:{change(t){this.value1=t},change2(t){this.value2=t}}}}}()}},n=l(1),s=Object(n.a)(v,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"filters-zu-jian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filters-zu-jian"}},[this._v("¶")]),this._v(" Filters 组件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"ji-ben-yong-fa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[this._v("¶")]),this._v(" 基本用法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[this._v("¶")]),this._v(" Attributes")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",[t._v("参数")]),t._v(" "),l("th",[t._v("说明")]),t._v(" "),l("th",[t._v("类型")]),t._v(" "),l("th",[t._v("可选值")]),t._v(" "),l("th",[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",[t._v("title")]),t._v(" "),l("td",[t._v("筛选项标题")]),t._v(" "),l("td",[t._v("string")]),t._v(" "),l("td",[t._v("—")]),t._v(" "),l("td",[t._v("—")])]),t._v(" "),l("tr",[l("td",[t._v("value")]),t._v(" "),l("td",[t._v("当前选中的值")]),t._v(" "),l("td",[t._v("Number, String, Array")]),t._v(" "),l("td",[t._v("—")]),t._v(" "),l("td",[t._v("-")])]),t._v(" "),l("tr",[l("td",[t._v("options")]),t._v(" "),l("td",[t._v("列表")]),t._v(" "),l("td",[t._v("Array")]),t._v(" "),l("td",[t._v("—")]),t._v(" "),l("td",[t._v("[]")])]),t._v(" "),l("tr",[l("td",[t._v("showAll")]),t._v(" "),l("td",[t._v("是否显示全部按钮")]),t._v(" "),l("td",[t._v("Boolean")]),t._v(" "),l("td",[t._v("true/false")]),t._v(" "),l("td",[t._v("true")])]),t._v(" "),l("tr",[l("td",[t._v("multiple")]),t._v(" "),l("td",[t._v("是否多选")]),t._v(" "),l("td",[t._v("Boolean")]),t._v(" "),l("td",[t._v("true/false")]),t._v(" "),l("td",[t._v("false")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[this._v("¶")]),this._v(" Events")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",[t._v("事件名称")]),t._v(" "),l("th",[t._v("说明")]),t._v(" "),l("th",[t._v("回调参数")])])]),t._v(" "),l("tbody",[l("tr",[l("td",[t._v("change")]),t._v(" "),l("td",[t._v("选中值改变的回调函数")]),t._v(" "),l("td",[t._v("value")])])])])}],!1,null,null,null);s.options.__file="src/components/Filters/index.md";e.default=s.exports}}]);