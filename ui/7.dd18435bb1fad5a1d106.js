(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./src/components/WaterFall/index.md?vue&type=template&id=4aef5ff0&
var WaterFallvue_type_template_id_4aef5ff0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "hello-doc" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("p", [_vm._v("瀑布流列表经常用于图片展示，无限加载的场景中。")]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "demo-block",
        [
          _c("div", [
            _c("p", [
              _vm._v("支持动态改变列数、自动判断是否滚动到底部而触发加载。")
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "source" }, [_c("element-demo0")], 1),
          _vm._v(" "),
          _c("template", { slot: "highlight" }, [
            _c("pre", { pre: true }, [
              _c("code", { pre: true, attrs: { class: "html" } }, [
                _vm._v(
                  '<template>\n  <div class="waterfall-wrap">\n    <hi-waterfall\n      :data="data"\n      :col="col"\n      :col-width="colWidth"\n      :margin-bottom="20"\n      :total="total"\n      :page-size="pageSize"\n      :page-num="pageNum"\n      :loading="loading"\n      @getMore="fetchData"\n      >\n      <template #default="{data}">\n        <div\n          class="card"\n          :style="{\n            height: data.height + \'px\'\n          }"\n        >\n        <span>{{data.id}}</span> \n        </div>\n      </template>\n    </hi-waterfall>\n    <div>\n      <button @click="testNoData">无数据</button>\n      <button @click="testChangeCol">变{{col === 4 ? 5 : 4}}列数</button>\n    </div>\n  </div>\n</template>\n<script>\n  let id = 1;\n  export default {\n    data() {\n      return {\n        data: [],\n        col: 4,\n        colWidth: 190,\n        pageSize: 20,\n        pageNum: 0,\n        total: 60,\n        loading: false,\n      };\n    },\n    methods: {\n      fetchData() {\n        if (this.loading) return;\n        this.loading = true;\n        this.pageNum++;\n        const r = [];\n        for (let i = 0; i < 20; i++) {\n          r.push({\n            id: id++,\n            width: this.colWidth,\n            height: parseInt(Math.random() * (9 - 5) + 5,10) * 10\n          })\n        }\n        window.setTimeout(() => {\n          this.data.push(...r);\n          this.loading = false;\n        }, 600);\n      },\n      testNoData() {\n        this.total = 0;\n      },\n      testChangeCol() {\n        this.col = this.col === 4 ? 5 : 4;\n        this.colWidth = this.colWidth === 190 ? 150 : 190;\n      }\n    }\n  };\n</script>\n'
                )
              ])
            ])
          ])
        ],
        2
      ),
      _vm._m(2),
      _vm._v(" "),
      _c(
        "demo-block",
        [
          _c("div", [_c("p", [_vm._v("由用户自己点击触发加载更多")])]),
          _vm._v(" "),
          _c("template", { slot: "source" }, [_c("element-demo1")], 1),
          _vm._v(" "),
          _c("template", { slot: "highlight" }, [
            _c("pre", { pre: true }, [
              _c("code", { pre: true, attrs: { class: "html" } }, [
                _vm._v(
                  '<template>\n  <div class="waterfall-wrap">\n    <hi-waterfall\n      :data="data"\n      :col="col"\n      :col-width="colWidth"\n      :margin-bottom="20"\n      :total="total"\n      :page-size="pageSize"\n      :page-num="pageNum"\n      :loading="loading"\n      :trigger-by-click="true"\n      @getMore="fetchData"\n      >\n      <template #default="{data}">\n        <div\n          class="card"\n          :style="{\n            height: data.height + \'px\'\n          }"\n        >\n        <span>{{data.id}}</span> \n        </div>\n      </template>\n      <template #getMore>\n        <div style="text-align:center;"><button>{{loading ? \'加载中\' : \'下一页\'}}</button></div>\n      </template>\n    </hi-waterfall>\n  </div>\n</template>\n<script>\n  let id = 1;\n  export default {\n    data() {\n      return {\n        data: [],\n        col: 4,\n        colWidth: 190,\n        pageSize: 20,\n        pageNum: 0,\n        total: 60,\n        loading: false,\n      };\n    },\n    methods: {\n      fetchData() {\n        if (this.loading) return;\n        this.loading = true;\n        this.pageNum++;\n        const r = [];\n        for (let i = 0; i < 20; i++) {\n          r.push({\n            id: id++,\n            width: this.colWidth,\n            height: parseInt(Math.random() * (9 - 5) + 5,10) * 10\n          })\n        }\n        window.setTimeout(() => {\n          this.data.push(...r);\n          this.loading = false;\n        }, 600);\n      }\n    },\n    created() {\n      this.fetchData();\n    }\n  };\n</script>\n'
                )
              ])
            ])
          ])
        ],
        2
      ),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _vm._m(8)
    ],
    1
  )
}
var WaterFallvue_type_template_id_4aef5ff0_staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { attrs: { id: "waterfall-zu-jian" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#waterfall-zu-jian" } },
        [_vm._v("¶")]
      ),
      _vm._v(" WaterFall 组件")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "zi-dong-jia-zai" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#zi-dong-jia-zai" } },
        [_vm._v("¶")]
      ),
      _vm._v(" 自动加载")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "shou-dong-jia-zai" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#shou-dong-jia-zai" } },
        [_vm._v("¶")]
      ),
      _vm._v(" 手动加载")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "attributes" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#attributes" } },
        [_vm._v("¶")]
      ),
      _vm._v(" Attributes")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("参数")]),
          _vm._v(" "),
          _c("th", [_vm._v("说明")]),
          _vm._v(" "),
          _c("th", [_vm._v("类型")]),
          _vm._v(" "),
          _c("th", [_vm._v("可选值")]),
          _vm._v(" "),
          _c("th", [_vm._v("默认值")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("data")]),
          _vm._v(" "),
          _c("td", [_vm._v("瀑布流数据")]),
          _vm._v(" "),
          _c("td", [_vm._v("array")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("pageNum")]),
          _vm._v(" "),
          _c("td", [_vm._v("当前页数")]),
          _vm._v(" "),
          _c("td", [_vm._v("numbe")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("0")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("pageSize")]),
          _vm._v(" "),
          _c("td", [_vm._v("每页数量")]),
          _vm._v(" "),
          _c("td", [_vm._v("numbe")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("20")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("total")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("接口返回的列表总数， "),
            _c("code", [_vm._v("pageNum")]),
            _vm._v(","),
            _c("code", [_vm._v("pageSize")]),
            _vm._v(","),
            _c("code", [_vm._v("total")]),
            _vm._v("都是为了得出 "),
            _c("code", [_vm._v("isNoMore")]),
            _vm._v(" 传入的")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("numbe")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("1")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("col")]),
          _vm._v(" "),
          _c("td", [_vm._v("显示几列布局")]),
          _vm._v(" "),
          _c("td", [_vm._v("numbe")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("4")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("colWidth")]),
          _vm._v(" "),
          _c("td", [_vm._v("每列的宽度")]),
          _vm._v(" "),
          _c("td", [_vm._v("numbe")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("200")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("sameHeight")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否统一高度，表示整齐的排列")]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("true/false")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("marginBottom")]),
          _vm._v(" "),
          _c("td", [_vm._v("卡片之间的垂直间隔")]),
          _vm._v(" "),
          _c("td", [_vm._v("number")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("20")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("loading")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("页面是否进行数据加载，主要是为了得到真实的"),
            _c("code", [_vm._v("isNoMore")])
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("true/false")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("triggerByClick")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "是否通过点击触发加载，默认是通过组件内部自己判断是否滚动到底部触发加载"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("true/false")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "slot" } }, [
      _c("a", { staticClass: "header-anchor", attrs: { href: "#slot" } }, [
        _vm._v("¶")
      ]),
      _vm._v(" Slot")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("Name")]),
          _vm._v(" "),
          _c("th", [_vm._v("Description")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("描述")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("default")]),
          _vm._v(" "),
          _c("td", [_vm._v("自定义的卡片组件")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("noMore")]),
          _vm._v(" "),
          _c("td", [_vm._v("没有更多的提示")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("noData")]),
          _vm._v(" "),
          _c("td", [_vm._v("没有数据的提示")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("getMore")]),
          _vm._v(" "),
          _c("td", [_vm._v("自定义加载按钮，默认是3个圆点的加载组件")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "events" } }, [
      _c("a", { staticClass: "header-anchor", attrs: { href: "#events" } }, [
        _vm._v("¶")
      ]),
      _vm._v(" Events")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("事件名称")]),
          _vm._v(" "),
          _c("th", [_vm._v("说明")]),
          _vm._v(" "),
          _c("th", [_vm._v("回调参数")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("getMore")]),
          _vm._v(" "),
          _c("td", [_vm._v("加载下一页")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ])
      ])
    ])
  }
]
WaterFallvue_type_template_id_4aef5ff0_render._withStripped = true


// CONCATENATED MODULE: ./src/components/WaterFall/index.md?vue&type=template&id=4aef5ff0&

// EXTERNAL MODULE: /home/travis/build/dogodo-cc/90s/node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__(31);
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// CONCATENATED MODULE: /home/travis/build/dogodo-cc/90s/node_modules/babel-loader/lib!/home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./src/components/WaterFall/index.md?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WaterFallvue_type_script_lang_js_ = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var render = function () {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [[_c("div", {
          staticClass: "waterfall-wrap"
        }, [_c("hi-waterfall", {
          attrs: {
            data: _vm.data,
            col: _vm.col,
            "col-width": _vm.colWidth,
            "margin-bottom": 20,
            total: _vm.total,
            "page-size": _vm.pageSize,
            "page-num": _vm.pageNum,
            loading: _vm.loading
          },
          on: {
            getMore: _vm.fetchData
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function (ref) {
              var data = ref.data;
              return [_c("div", {
                staticClass: "card",
                style: {
                  height: data.height + "px"
                }
              }, [_c("span", [_vm._v(_vm._s(data.id))])])];
            }
          }])
        }), _vm._v(" "), _c("div", [_c("button", {
          on: {
            click: _vm.testNoData
          }
        }, [_vm._v("无数据")]), _vm._v(" "), _c("button", {
          on: {
            click: _vm.testChangeCol
          }
        }, [_vm._v("变" + _vm._s(_vm.col === 4 ? 5 : 4) + "列数")])])], 1)]], 2);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      let id = 1;
      const democomponentExport = {
        data() {
          return {
            data: [],
            col: 4,
            colWidth: 190,
            pageSize: 20,
            pageNum: 0,
            total: 60,
            loading: false
          };
        },

        methods: {
          fetchData() {
            if (this.loading) return;
            this.loading = true;
            this.pageNum++;
            const r = [];

            for (let i = 0; i < 20; i++) {
              r.push({
                id: id++,
                width: this.colWidth,
                height: parse_int_default()(Math.random() * (9 - 5) + 5, 10) * 10
              });
            }

            window.setTimeout(() => {
              this.data.push(...r);
              this.loading = false;
            }, 600);
          },

          testNoData() {
            this.total = 0;
          },

          testChangeCol() {
            this.col = this.col === 4 ? 5 : 4;
            this.colWidth = this.colWidth === 190 ? 150 : 190;
          }

        }
      };
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      var render = function () {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [[_c("div", {
          staticClass: "waterfall-wrap"
        }, [_c("hi-waterfall", {
          attrs: {
            data: _vm.data,
            col: _vm.col,
            "col-width": _vm.colWidth,
            "margin-bottom": 20,
            total: _vm.total,
            "page-size": _vm.pageSize,
            "page-num": _vm.pageNum,
            loading: _vm.loading,
            "trigger-by-click": true
          },
          on: {
            getMore: _vm.fetchData
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function (ref) {
              var data = ref.data;
              return [_c("div", {
                staticClass: "card",
                style: {
                  height: data.height + "px"
                }
              }, [_c("span", [_vm._v(_vm._s(data.id))])])];
            }
          }, {
            key: "getMore",
            fn: function () {
              return [_c("div", {
                staticStyle: {
                  "text-align": "center"
                }
              }, [_c("button", [_vm._v(_vm._s(_vm.loading ? "加载中" : "下一页"))])])];
            },
            proxy: true
          }])
        })], 1)]], 2);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      let id = 1;
      const democomponentExport = {
        data() {
          return {
            data: [],
            col: 4,
            colWidth: 190,
            pageSize: 20,
            pageNum: 0,
            total: 60,
            loading: false
          };
        },

        methods: {
          fetchData() {
            if (this.loading) return;
            this.loading = true;
            this.pageNum++;
            const r = [];

            for (let i = 0; i < 20; i++) {
              r.push({
                id: id++,
                width: this.colWidth,
                height: parse_int_default()(Math.random() * (9 - 5) + 5, 10) * 10
              });
            }

            window.setTimeout(() => {
              this.data.push(...r);
              this.loading = false;
            }, 600);
          }

        },

        created() {
          this.fetchData();
        }

      };
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./src/components/WaterFall/index.md?vue&type=script&lang=js&
 /* harmony default export */ var components_WaterFallvue_type_script_lang_js_ = (WaterFallvue_type_script_lang_js_); 
// EXTERNAL MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/WaterFall/index.md





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WaterFallvue_type_script_lang_js_,
  WaterFallvue_type_template_id_4aef5ff0_render,
  WaterFallvue_type_template_id_4aef5ff0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/WaterFall/index.md"
/* harmony default export */ var WaterFall = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);