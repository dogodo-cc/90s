(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{351:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hello-doc"},[t._m(0),t._v(" "),a("p",[t._v("瀑布流列表经常用于图片展示，无限加载的场景中。")]),t._v(" "),t._m(1),t._v(" "),a("demo-block",[a("div",[a("p",[t._v("支持动态改变列数、自动判断是否滚动到底部而触发加载。")])]),t._v(" "),a("template",{slot:"source"},[a("element-demo0")],1),t._v(" "),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div class="waterfall-wrap">\n    <hi-waterfall\n      :data="data"\n      :col="col"\n      :col-width="colWidth"\n      :margin-bottom="20"\n      :total="total"\n      :page-size="pageSize"\n      :page-num="pageNum"\n      :loading="loading"\n      @getMore="fetchData"\n      >\n      <template #default="{data}">\n        <div\n          class="card"\n          :style="{\n            height: data.height + \'px\'\n          }"\n        >\n        <span>{{data.id}}</span> \n        </div>\n      </template>\n    </hi-waterfall>\n    <div>\n      <button @click="testNoData">无数据</button>\n      <button @click="testChangeCol">变{{col === 4 ? 5 : 4}}列数</button>\n    </div>\n  </div>\n</template>\n<script>\n  let id = 1;\n  export default {\n    data() {\n      return {\n        data: [],\n        col: 4,\n        colWidth: 190,\n        pageSize: 20,\n        pageNum: 0,\n        total: 60,\n        loading: false,\n      };\n    },\n    methods: {\n      fetchData() {\n        if (this.loading) return;\n        this.loading = true;\n        this.pageNum++;\n        const r = [];\n        for (let i = 0; i < 20; i++) {\n          r.push({\n            id: id++,\n            width: this.colWidth,\n            height: parseInt(Math.random() * (9 - 5) + 5,10) * 10\n          })\n        }\n        window.setTimeout(() => {\n          this.data.push(...r);\n          this.loading = false;\n        }, 1000);\n      },\n      testNoData() {\n        this.total = 0;\n      },\n      testChangeCol() {\n        this.col = this.col === 4 ? 5 : 4;\n        this.colWidth = this.colWidth === 190 ? 150 : 190;\n      }\n    }\n  };\n<\/script>\n')])])])],2),t._m(2),t._v(" "),a("demo-block",[a("div",[a("p",[t._v("由用户自己点击触发加载更多")])]),t._v(" "),a("template",{slot:"source"},[a("element-demo1")],1),t._v(" "),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div class="waterfall-wrap">\n    <hi-waterfall\n      :data="data"\n      :col="col"\n      :col-width="colWidth"\n      :margin-bottom="20"\n      :total="total"\n      :page-size="pageSize"\n      :page-num="pageNum"\n      :loading="loading"\n      :trigger-by-click="true"\n      @getMore="fetchData"\n      >\n      <template #default="{data}">\n        <div\n          class="card"\n          :style="{\n            height: data.height + \'px\'\n          }"\n        >\n        <span>{{data.id}}</span> \n        </div>\n      </template>\n      <template #getMore>\n        <div style="text-align:center;"><button>{{loading ? \'加载中\' : \'下一页\'}}</button></div>\n      </template>\n    </hi-waterfall>\n  </div>\n</template>\n<script>\n  let id = 1;\n  export default {\n    data() {\n      return {\n        data: [],\n        col: 4,\n        colWidth: 190,\n        pageSize: 20,\n        pageNum: 0,\n        total: 60,\n        loading: false,\n      };\n    },\n    methods: {\n      fetchData() {\n        if (this.loading) return;\n        this.loading = true;\n        this.pageNum++;\n        const r = [];\n        for (let i = 0; i < 20; i++) {\n          r.push({\n            id: id++,\n            width: this.colWidth,\n            height: parseInt(Math.random() * (9 - 5) + 5,10) * 10\n          })\n        }\n        window.setTimeout(() => {\n          this.data.push(...r);\n          this.loading = false;\n        }, 1000);\n      }\n    },\n    created() {\n      this.fetchData();\n    }\n  };\n<\/script>\n')])])])],2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)],1)};n._withStripped=!0;var i=a(28),d=a.n(i),l={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("div",{staticClass:"waterfall-wrap"},[a("hi-waterfall",{attrs:{data:t.data,col:t.col,"col-width":t.colWidth,"margin-bottom":20,total:t.total,"page-size":t.pageSize,"page-num":t.pageNum,loading:t.loading},on:{getMore:t.fetchData},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return[a("div",{staticClass:"card",style:{height:n.height+"px"}},[a("span",[t._v(t._s(n.id))])])]}}])}),t._v(" "),a("div",[a("button",{on:{click:t.testNoData}},[t._v("无数据")]),t._v(" "),a("button",{on:{click:t.testChangeCol}},[t._v("变"+t._s(4===t.col?5:4)+"列数")])])],1)]],2)};t._withStripped=!0;let e=1;return{render:t,staticRenderFns:[],...{data:()=>({data:[],col:4,colWidth:190,pageSize:20,pageNum:0,total:60,loading:!1}),methods:{fetchData(){if(this.loading)return;this.loading=!0,this.pageNum++;const t=[];for(let a=0;a<20;a++)t.push({id:e++,width:this.colWidth,height:10*d()(4*Math.random()+5,10)});window.setTimeout(()=>{this.data.push(...t),this.loading=!1},1e3)},testNoData(){this.total=0},testChangeCol(){this.col=4===this.col?5:4,this.colWidth=190===this.colWidth?150:190}}}}}(),"element-demo1":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("div",{staticClass:"waterfall-wrap"},[a("hi-waterfall",{attrs:{data:t.data,col:t.col,"col-width":t.colWidth,"margin-bottom":20,total:t.total,"page-size":t.pageSize,"page-num":t.pageNum,loading:t.loading,"trigger-by-click":!0},on:{getMore:t.fetchData},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return[a("div",{staticClass:"card",style:{height:n.height+"px"}},[a("span",[t._v(t._s(n.id))])])]}},{key:"getMore",fn:function(){return[a("div",{staticStyle:{"text-align":"center"}},[a("button",[t._v(t._s(t.loading?"加载中":"下一页"))])])]},proxy:!0}])})],1)]],2)};t._withStripped=!0;let e=1;return{render:t,staticRenderFns:[],...{data:()=>({data:[],col:4,colWidth:190,pageSize:20,pageNum:0,total:60,loading:!1}),methods:{fetchData(){if(this.loading)return;this.loading=!0,this.pageNum++;const t=[];for(let a=0;a<20;a++)t.push({id:e++,width:this.colWidth,height:10*d()(4*Math.random()+5,10)});window.setTimeout(()=>{this.data.push(...t),this.loading=!1},1e3)}},created(){this.fetchData()}}}}()}},s=a(1),o=Object(s.a)(l,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"waterfall-zu-jian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#waterfall-zu-jian"}},[this._v("¶")]),this._v(" WaterFall 组件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"zi-dong-jia-zai"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zi-dong-jia-zai"}},[this._v("¶")]),this._v(" 自动加载")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"shou-dong-jia-zai"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shou-dong-jia-zai"}},[this._v("¶")]),this._v(" 手动加载")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[this._v("¶")]),this._v(" Attributes")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("瀑布流数据")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("pageNum")]),t._v(" "),a("td",[t._v("当前页数")]),t._v(" "),a("td",[t._v("numbe")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("pageSize")]),t._v(" "),a("td",[t._v("每页数量")]),t._v(" "),a("td",[t._v("numbe")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("20")])]),t._v(" "),a("tr",[a("td",[t._v("total")]),t._v(" "),a("td",[t._v("接口返回的列表总数， "),a("code",[t._v("pageNum")]),t._v(","),a("code",[t._v("pageSize")]),t._v(","),a("code",[t._v("total")]),t._v("都是为了得出 "),a("code",[t._v("isNoMore")]),t._v(" 传入的")]),t._v(" "),a("td",[t._v("numbe")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("col")]),t._v(" "),a("td",[t._v("显示几列布局")]),t._v(" "),a("td",[t._v("numbe")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("colWidth")]),t._v(" "),a("td",[t._v("每列的宽度")]),t._v(" "),a("td",[t._v("numbe")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("200")])]),t._v(" "),a("tr",[a("td",[t._v("sameHeight")]),t._v(" "),a("td",[t._v("是否统一高度，表示整齐的排列")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true/false")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("marginBottom")]),t._v(" "),a("td",[t._v("卡片之间的垂直间隔")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("20")])]),t._v(" "),a("tr",[a("td",[t._v("loading")]),t._v(" "),a("td",[t._v("页面是否进行数据加载，主要是为了得到真实的"),a("code",[t._v("isNoMore")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true/false")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("triggerByClick")]),t._v(" "),a("td",[t._v("是否通过点击触发加载，默认是通过组件内部自己判断是否滚动到底部触发加载")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true/false")]),t._v(" "),a("td",[t._v("false")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[this._v("¶")]),this._v(" Slot")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("—")]),t._v(" "),a("td",[t._v("描述")])]),t._v(" "),a("tr",[a("td",[t._v("default")]),t._v(" "),a("td",[t._v("自定义的卡片组件")])]),t._v(" "),a("tr",[a("td",[t._v("noMore")]),t._v(" "),a("td",[t._v("没有更多的提示")])]),t._v(" "),a("tr",[a("td",[t._v("noData")]),t._v(" "),a("td",[t._v("没有数据的提示")])]),t._v(" "),a("tr",[a("td",[t._v("getMore")]),t._v(" "),a("td",[t._v("自定义加载按钮，默认是3个圆点的加载组件")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[this._v("¶")]),this._v(" Events")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名称")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("getMore")]),t._v(" "),a("td",[t._v("加载下一页")]),t._v(" "),a("td",[t._v("—")])])])])}],!1,null,null,null);o.options.__file="src/components/WaterFall/index.md";e.default=o.exports}}]);