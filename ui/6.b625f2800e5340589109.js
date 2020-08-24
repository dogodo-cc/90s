(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./src/components/Tabs/index.md?vue&type=template&id=646cede8&
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
      _c("p", [_vm._v("对多组数据进行切换显示")]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "demo-block",
        [
          _c("div", [
            _c("p", [
              _vm._v("直接使用 "),
              _c("code", [_vm._v("v-model")]),
              _vm._v(" 绑定被激活的项")
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "source" }, [_c("element-demo0")], 1),
          _vm._v(" "),
          _c("template", { slot: "highlight" }, [
            _c("pre", { pre: true }, [
              _c("code", { pre: true, attrs: { class: "html" } }, [
                _vm._v(
                  '<template>\n  <div class="tabs-demo">\n    <hi-tabs v-model="tabActive">\n      <hi-tab-panel name="first" label="选项一">\n        1234\n      </hi-tab-panel>\n      <hi-tab-panel name="second" label="选项二">\n        5678\n      </hi-tab-panel>\n      <hi-tab-panel name="third" label="选项gaoding">\n        99fs9dfasfsf\n      </hi-tab-panel>\n    </hi-tabs>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tabActive: \'first\',\n      };\n    },\n  };\n</script>\n'
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
          _c("div", [
            _c("p", [
              _vm._v("给"),
              _c("code", [_vm._v("positon")]),
              _vm._v("传入"),
              _c("code", [_vm._v("left")])
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "source" }, [_c("element-demo1")], 1),
          _vm._v(" "),
          _c("template", { slot: "highlight" }, [
            _c("pre", { pre: true }, [
              _c("code", { pre: true, attrs: { class: "html" } }, [
                _vm._v(
                  '<template>\n  <div class="tabs-demo">\n    <hi-tabs v-model="tabActive2" position="left">\n      <hi-tab-panel name="first" label="选项一">\n        1234\n      </hi-tab-panel>\n      <hi-tab-panel name="second" label="选项二">\n        5678\n      </hi-tab-panel>\n      <hi-tab-panel name="third" label="选项三">\n        99fs9dfasfsf\n      </hi-tab-panel>\n    </hi-tabs>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tabActive2: \'second\'\n      };\n    },\n  };\n</script>\n'
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
      _vm._m(6)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { attrs: { id: "tabs-zu-jian" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#tabs-zu-jian" } },
        [_vm._v("¶")]
      ),
      _vm._v(" Tabs 组件")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "shui-ping-qie-huan" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: { href: "#shui-ping-qie-huan" }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" 水平切换")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "chui-zhi-qie-huan" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#chui-zhi-qie-huan" } },
        [_vm._v("¶")]
      ),
      _vm._v(" 垂直切换")
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
          _c("td", [_vm._v("label")]),
          _vm._v(" "),
          _c("td", [_vm._v("tab标题")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("-")]),
          _vm._v(" "),
          _c("td", [_vm._v("-")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("name")]),
          _vm._v(" "),
          _c("td", [_vm._v("tab对应的值")]),
          _vm._v(" "),
          _c("td", [_vm._v("Number, String")]),
          _vm._v(" "),
          _c("td", [_vm._v("-")]),
          _vm._v(" "),
          _c("td", [_vm._v("-")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("position")]),
          _vm._v(" "),
          _c("td", [_vm._v("排列方向，用于hi-tabs")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("top/left")]),
          _vm._v(" "),
          _c("td", [_vm._v("top")])
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
          _c("td", [_vm._v("input")]),
          _vm._v(" "),
          _c("td", [_vm._v("切换tab的事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("name")])
        ])
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/components/Tabs/index.md?vue&type=template&id=646cede8&

// CONCATENATED MODULE: /home/travis/build/dogodo-cc/90s/node_modules/babel-loader/lib!/home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./src/components/Tabs/index.md?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Tabsvue_type_script_lang_js_ = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var render = function () {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [[_c("div", {
          staticClass: "tabs-demo"
        }, [_c("hi-tabs", {
          model: {
            value: _vm.tabActive,
            callback: function ($$v) {
              _vm.tabActive = $$v;
            },
            expression: "tabActive"
          }
        }, [_c("hi-tab-panel", {
          attrs: {
            name: "first",
            label: "选项一"
          }
        }, [_vm._v("\n        1234\n      ")]), _vm._v(" "), _c("hi-tab-panel", {
          attrs: {
            name: "second",
            label: "选项二"
          }
        }, [_vm._v("\n        5678\n      ")]), _vm._v(" "), _c("hi-tab-panel", {
          attrs: {
            name: "third",
            label: "选项gaoding"
          }
        }, [_vm._v("\n        99fs9dfasfsf\n      ")])], 1)], 1)]], 2);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      const democomponentExport = {
        data() {
          return {
            tabActive: 'first'
          };
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
          staticClass: "tabs-demo"
        }, [_c("hi-tabs", {
          attrs: {
            position: "left"
          },
          model: {
            value: _vm.tabActive2,
            callback: function ($$v) {
              _vm.tabActive2 = $$v;
            },
            expression: "tabActive2"
          }
        }, [_c("hi-tab-panel", {
          attrs: {
            name: "first",
            label: "选项一"
          }
        }, [_vm._v("\n        1234\n      ")]), _vm._v(" "), _c("hi-tab-panel", {
          attrs: {
            name: "second",
            label: "选项二"
          }
        }, [_vm._v("\n        5678\n      ")]), _vm._v(" "), _c("hi-tab-panel", {
          attrs: {
            name: "third",
            label: "选项三"
          }
        }, [_vm._v("\n        99fs9dfasfsf\n      ")])], 1)], 1)]], 2);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      const democomponentExport = {
        data() {
          return {
            tabActive2: 'second'
          };
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
// CONCATENATED MODULE: ./src/components/Tabs/index.md?vue&type=script&lang=js&
 /* harmony default export */ var components_Tabsvue_type_script_lang_js_ = (Tabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Tabs/index.md





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Tabs/index.md"
/* harmony default export */ var Tabs = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);