(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./src/views/introduce/quickstart.md?vue&type=template&id=630db444&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "hello-doc" }, [
      _c("h2", { attrs: { id: "kuai-su-shang-shou" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#kuai-su-shang-shou" }
          },
          [_vm._v("¶")]
        ),
        _vm._v(" 快速上手")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("本节将介绍如何在项目中使用 hello-ui。")]),
      _vm._v(" "),
      _c("h3", { attrs: { id: "yin-ru-hello-ui" } }, [
        _c(
          "a",
          { staticClass: "header-anchor", attrs: { href: "#yin-ru-hello-ui" } },
          [_vm._v("¶")]
        ),
        _vm._v(" 引入 hello-ui")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("你可以引入整个 "),
        _c("code", [_vm._v("hello-ui")]),
        _vm._v("，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 "),
        _c("code", [_vm._v("hello-ui")]),
        _vm._v("。")
      ]),
      _vm._v(" "),
      _c("h4", { attrs: { id: "wan-zheng-yin-ru" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#wan-zheng-yin-ru" }
          },
          [_vm._v("¶")]
        ),
        _vm._v(" 完整引入")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("在 main.js 中写入以下内容：")]),
      _vm._v(" "),
      _c("pre", [
        _c("code", { staticClass: "language-javascript" }, [
          _vm._v(
            "import Vue from 'vue';\nimport HelloUI from 'hello-ui';\nimport 'hello-ui/lib/theme-chalk/index.css';\nimport App from './App.vue';\n\nVue.use(HelloUI);\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("以上代码便完成了 "),
        _c("code", [_vm._v("hello-ui")]),
        _vm._v(" 的引入。需要注意的是，样式文件需要单独引入。")
      ]),
      _vm._v(" "),
      _c("h3", { attrs: { id: "an-xu-yin-ru" } }, [
        _c(
          "a",
          { staticClass: "header-anchor", attrs: { href: "#an-xu-yin-ru" } },
          [_vm._v("¶")]
        ),
        _vm._v(" 按需引入")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("抱歉，还没提供这种方式，后期会完善")]),
      _vm._v(" "),
      _c("h3", { attrs: { id: "kai-shi-shi-yong" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#kai-shi-shi-yong" }
          },
          [_vm._v("¶")]
        ),
        _vm._v(" 开始使用")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("至此，一个基于 "),
        _c("code", [_vm._v("Vue")]),
        _vm._v(" 和 "),
        _c("code", [_vm._v("hello-ui")]),
        _vm._v(
          " 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。"
        )
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/views/introduce/quickstart.md?vue&type=template&id=630db444&

// EXTERNAL MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/views/introduce/quickstart.md

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/introduce/quickstart.md"
/* harmony default export */ var quickstart = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);