(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./src/views/docs/search-mixin.md?vue&type=template&id=21063e57&
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
      _c("h2", { attrs: { id: "jie-shao" } }, [
        _c(
          "a",
          { staticClass: "header-anchor", attrs: { href: "#jie-shao" } },
          [_vm._v("¶")]
        ),
        _vm._v(" 介绍")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "我们在业务场景中，经常有列表页的开发，选择特定的筛选项，然后请求接口，得到相应的结果。"
        ),
        _c("code", [_vm._v("search-mixin")]),
        _vm._v(" 就是在 VUE 开发中，对这类业务场景的一种抽象封装。")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("我们将业务场景分为3个模块")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_vm._v("导航地址：当前页面的URL地址")]),
        _vm._v(" "),
        _c("li", [_vm._v("筛选区域：（下拉、搜索、多选、单选）得到筛选参数")]),
        _vm._v(" "),
        _c("li", [_vm._v("列表区域： 可以是表格或其他列表呈现")])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "将筛选参数和URL的query关联起来，起到记录搜索参数的目的，这样在进行导航的"
        ),
        _c("code", [_vm._v("前进")]),
        _vm._v(" "),
        _c("code", [_vm._v("后退")]),
        _vm._v("时也可以保持对应的搜索结果。")
      ]),
      _vm._v(" "),
      _c("h3", { attrs: { id: "shi-yong-fang-fa" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#shi-yong-fang-fa" }
          },
          [_vm._v("¶")]
        ),
        _vm._v(" 使用方法")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("将 "),
        _c("code", [_vm._v("search-mixin")]),
        _vm._v(" 以 VUE组件的 mixins 方式引入。")
      ]),
      _vm._v(" "),
      _c("pre", [
        _c("code", { staticClass: "language-html" }, [
          _vm._v(
            "<script>\n  import SearchMixin from '../../mixins/search.js';\n  export default {\n    mixins: [SearchMixin],\n    data() {\n      return {\n        list: [],\n        pagination: null;\n        searchImmediately: false, // 初始查询参数是异步获取的\n        searchService: {\n          searchQueryDefault: {\n              order: 'published_at'\n          },\n          searchQuery: {\n              scenario: '',\n              order: '',\n          }\n        }\n      };\n    },\n    methods: {\n      async searchFetch(q) {\n        const { data, pagination } = await api.queryTaskCenter(q);\n        this.list = data;\n        this.pagination = pagination;\n      },\n      tagChange(v) {\n        this.$searchFilter({ scenario: v });\n      },\n      pageChange(v) {\n        this.$searchFilter({ page_num: v });\n      }\n    }\n  };\n</script>\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("在使用到 "),
        _c("code", [_vm._v("search-mixin")]),
        _vm._v(" 服务的页面组件里有以下的规定配置：")
      ]),
      _vm._v(" "),
      _c("table", [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("选项")]),
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
            _c("td", [_vm._v("searchImmediately")]),
            _vm._v(" "),
            _c("td", [
              _c("code", [_vm._v("data")]),
              _vm._v(
                "字段，表示是否立即搜索。有时候默认的搜索参数是通过异步获取的，需要等获取完筛选参数再进行搜索"
              )
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("boolean")]),
            _vm._v(" "),
            _c("td", [_vm._v("true、fasle")]),
            _vm._v(" "),
            _c("td", [_vm._v("true")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("searchService")]),
            _vm._v(" "),
            _c("td", [
              _c("code", [_vm._v("data")]),
              _vm._v("字段，里面包含两个字段："),
              _c("code", [_vm._v("searchQueryDefault")]),
              _vm._v(" 默认的请求参数，"),
              _c("code", [_vm._v("searchQuery")]),
              _vm._v("请求参数，它的字段将和筛选区域的各个筛选组件的"),
              _c("code", [_vm._v("value")]),
              _vm._v("一一对应。")
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("object")]),
            _vm._v(" "),
            _c("td", [_vm._v("-")]),
            _vm._v(" "),
            _c("td", [_vm._v("-")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("searchFetch")]),
            _vm._v(" "),
            _c("td", [
              _c("code", [_vm._v("methods")]),
              _vm._v("字段，发起api请求的函数")
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("function")]),
            _vm._v(" "),
            _c("td", [_vm._v("-")]),
            _vm._v(" "),
            _c("td", [_vm._v("-")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip" }, [
        _c("p", [
          _c("code", [_vm._v("this.$searchFilter()")]),
          _vm._v(" 是 "),
          _c("code", [_vm._v("search-mixin")]),
          _vm._v(
            " 内部提供的方法，在页面上进行筛选项变更的时候，需要通过此方法去修改 "
          ),
          _c("code", [_vm._v("url")]),
          _vm._v(" 上的 "),
          _c("code", [_vm._v("query")]),
          _vm._v("，且"),
          _c("code", [_vm._v("search-mixin")]),
          _vm._v("内部在 watch 到变化时，会主动执行 页面的"),
          _c("code", [_vm._v("searchFetch")]),
          _vm._v("，以完成列表数据的更新。")
        ])
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/views/docs/search-mixin.md?vue&type=template&id=21063e57&

// EXTERNAL MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/views/docs/search-mixin.md

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
component.options.__file = "src/views/docs/search-mixin.md"
/* harmony default export */ var search_mixin = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);