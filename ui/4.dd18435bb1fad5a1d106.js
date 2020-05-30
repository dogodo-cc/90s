(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./src/components/Filters/index.md?vue&type=template&id=7a041d42&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "hello-doc" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("p", [_vm._v("对数据进行筛选")]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "demo-block",
        [
          _c("div", [_c("p", [_vm._v("支持单选和多选")])]),
          _vm._v(" "),
          _c("template", { slot: "source" }, [_c("element-demo0")], 1),
          _vm._v(" "),
          _c("template", { slot: "highlight" }, [
            _c("pre", { pre: true }, [
              _c("code", { pre: true, attrs: { class: "html" } }, [
                _vm._v(
                  "<template>\n  <div class=\"filters-demo\">\n    <hi-filters title=\"单选\" :value=\"value1\" @change=\"change\" :options=\"opts\"/>\n    <hi-filters title=\"多选\" :value=\"value2\" :multiple=\"true\" @change=\"change2\" :options=\"opts2\"/>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        opts: [{label: '校园',value: 1}, {label: '科技', value: 2}, {label: '复古', value: 3}],\n        opts2: [\n          {label: '校园',value: 1},\n          {label: '科技', value: 2},\n          {label: '复古', value: 3},\n          {label: '可爱', value: 4},\n          {label: '性感', value: 5},\n          {label: '风景', value: 6},\n          {label: '城市', value: 7},\n          {label: '道路', value: 8},\n          {label: '灯光', value: 9},\n          {label: '数码', value: 10},\n        ],\n        value1: '',\n        value2: [],\n      };\n    },\n    methods: {\n      change(v) {\n        this.value1 = v;\n      },\n      change2(v) {\n        this.value2 = v;\n      }\n    }\n  };\n</script>\n"
                )
              ])
            ])
          ])
        ],
        2
      ),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _vm._m(5)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { attrs: { id: "filters-zu-jian" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#filters-zu-jian" } },
        [_vm._v("¶")]
      ),
      _vm._v(" Filters 组件")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "ji-ben-yong-fa" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#ji-ben-yong-fa" } },
        [_vm._v("¶")]
      ),
      _vm._v(" 基本用法")
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
          _c("td", [_vm._v("title")]),
          _vm._v(" "),
          _c("td", [_vm._v("筛选项标题")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("value")]),
          _vm._v(" "),
          _c("td", [_vm._v("当前选中的值")]),
          _vm._v(" "),
          _c("td", [_vm._v("Number, String, Array")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("-")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("options")]),
          _vm._v(" "),
          _c("td", [_vm._v("列表")]),
          _vm._v(" "),
          _c("td", [_vm._v("Array")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("[]")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("showAll")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否显示全部按钮")]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("true/false")]),
          _vm._v(" "),
          _c("td", [_vm._v("true")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("multiple")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否多选")]),
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
          _c("td", [_vm._v("change")]),
          _vm._v(" "),
          _c("td", [_vm._v("选中值改变的回调函数")]),
          _vm._v(" "),
          _c("td", [_vm._v("value")])
        ])
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/components/Filters/index.md?vue&type=template&id=7a041d42&

// CONCATENATED MODULE: /home/travis/build/dogodo-cc/90s/node_modules/babel-loader/lib!/home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./src/components/Filters/index.md?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Filtersvue_type_script_lang_js_ = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var render = function () {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [[_c("div", {
          staticClass: "filters-demo"
        }, [_c("hi-filters", {
          attrs: {
            title: "单选",
            value: _vm.value1,
            options: _vm.opts
          },
          on: {
            change: _vm.change
          }
        }), _vm._v(" "), _c("hi-filters", {
          attrs: {
            title: "多选",
            value: _vm.value2,
            multiple: true,
            options: _vm.opts2
          },
          on: {
            change: _vm.change2
          }
        })], 1)]], 2);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      const democomponentExport = {
        data() {
          return {
            opts: [{
              label: '校园',
              value: 1
            }, {
              label: '科技',
              value: 2
            }, {
              label: '复古',
              value: 3
            }],
            opts2: [{
              label: '校园',
              value: 1
            }, {
              label: '科技',
              value: 2
            }, {
              label: '复古',
              value: 3
            }, {
              label: '可爱',
              value: 4
            }, {
              label: '性感',
              value: 5
            }, {
              label: '风景',
              value: 6
            }, {
              label: '城市',
              value: 7
            }, {
              label: '道路',
              value: 8
            }, {
              label: '灯光',
              value: 9
            }, {
              label: '数码',
              value: 10
            }],
            value1: '',
            value2: []
          };
        },

        methods: {
          change(v) {
            this.value1 = v;
          },

          change2(v) {
            this.value2 = v;
          }

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
// CONCATENATED MODULE: ./src/components/Filters/index.md?vue&type=script&lang=js&
 /* harmony default export */ var components_Filtersvue_type_script_lang_js_ = (Filtersvue_type_script_lang_js_); 
// EXTERNAL MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Filters/index.md





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Filtersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Filters/index.md"
/* harmony default export */ var Filters = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);