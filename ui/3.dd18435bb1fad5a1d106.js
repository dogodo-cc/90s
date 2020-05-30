(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./src/components/DragSort/index.md?vue&type=template&id=6aef4e18&
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
      _c("p", [
        _vm._v("将数据进行拖动分类，是一种比较直观、符合直觉的交互效果。")
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("p", [_vm._v("对多组数据进行拖动分类")]),
      _vm._v(" "),
      _c(
        "demo-block",
        [
          _c("div", [
            _c("p", [
              _vm._v("支持使用"),
              _c("code", [_vm._v("v-model")]),
              _vm._v("将数据传入，您还可以使用鼠标左键进行"),
              _c("code", [_vm._v("框选")]),
              _vm._v("操作，或者按"),
              _c("code", [_vm._v("shift")]),
              _vm._v("键进行多选。甚至支持鼠标右键进行快速分类。")
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "source" }, [_c("element-demo0")], 1),
          _vm._v(" "),
          _c("template", { slot: "highlight" }, [
            _c("pre", { pre: true }, [
              _c("code", { pre: true, attrs: { class: "html" } }, [
                _vm._v(
                  "<template>\n  <hi-drag-sort\n    v-model=\"gaoding\"\n    :contextmenu-options=\"options\"\n    :style-config=\"styleConfig\">\n    <template #default=\"{data}\">\n        <div class=\"card\" :class=\"{selected: data.selected }\">\n          {{data.name}}\n          <span>{{data.sex === 1 ? 'boy' : 'girl'}}</span>\n        </div>\n    </template>\n  </hi-drag-sort>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        gaoding: [\n          {\n            title: 'uxms',\n            childrens: [\n              {\n                id:1,\n                name: '元帅',\n                sex: 1,\n                selected: false\n              },{\n                id:2,\n                name: '童童',\n                sex: 0,\n                selected: false\n              },{\n                id:3,\n                name: '浣熊',\n                sex: 1,\n                selected: false\n              },{\n                id:4,\n                name: '腰果',\n                sex: 0,\n                selected: false\n              },{\n                id:5,\n                name: '坐标',\n                sex: 0,\n                selected: false\n              }\n            ]\n          },\n          {\n            title: 'editor',\n            childrens: [\n              {\n                id: 6,\n                name: '小米',\n                sex: 1,\n                selected: false},\n              {\n                id: 7,\n                name: '诺亚',\n                sex: 1,\n                selected: false\n              },\n              {\n                id: 8,\n                name: '流浪人',\n                sex: 1,\n                selected: false\n              }\n            ]\n          },\n          {\n            title: 'ai',\n            childrens: [\n              {\n                id:9,\n                name: '豆丁',\n                sex: 1,\n                selected: false\n              }\n            ]\n          }\n        ],\n        styleConfig: {\n          common: {\n            width: '33.333%',\n            height: '340px',\n            \"background-color\": '#eee',\n            padding: '10px'\n          },\n          groups: {\n            1: {\n              \"background-color\": 'rgb(235, 221, 221)'\n            }\n          }\n        }\n      };\n    },\n    computed: {\n      options(){\n        return this.gaoding.map((g, i) => {\n          return {\n            name:g.title,\n            value: i\n          }\n        })\n      }\n    },\n    methods: {\n      \n    }\n  };\n</script>\n"
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
      _vm._m(5),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" "),
      _vm._m(7)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { attrs: { id: "dragsort-zu-jian" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#dragsort-zu-jian" } },
        [_vm._v("¶")]
      ),
      _vm._v(" DragSort 组件")
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
          _c("td", [_vm._v("v-model")]),
          _vm._v(" "),
          _c("td", [_vm._v("需要被分类的对象数组")]),
          _vm._v(" "),
          _c("td", [_vm._v("array")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("contextmenu-options")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("右键快捷分类的选项，需包含"),
            _c("code", [_vm._v("{name, value}")]),
            _vm._v("两个字段， "),
            _c("code", [_vm._v("name")]),
            _vm._v("为展示的名称，"),
            _c("code", [_vm._v("value")]),
            _vm._v("为分组索引，因为组件内部是通过索引来进行数据"),
            _c("code", [_vm._v("拖动")]),
            _vm._v("的")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("array")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("[ ]")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("style-config")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("每个组的样式 "),
            _c("code", [_vm._v("{common, groups}")]),
            _vm._v(" "),
            _c("code", [_vm._v("common")]),
            _vm._v("是组的公共样式, 假如你需要对第二个组进行样式定义，则传入 "),
            _c("code", [_vm._v("{groups: {1: {width: 100px, ...style}}}")]),
            _vm._v("， 比如demo里对第二组定制了独立的背景色")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("object")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
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
          _c("td", [_vm._v("自定义的拖动卡片组件")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("header")]),
          _vm._v(" "),
          _c("td", [_vm._v("每个组的头部")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("footer")]),
          _vm._v(" "),
          _c("td", [_vm._v("每个组的底部")])
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
          _c("td", [_vm._v("拖动完成")]),
          _vm._v(" "),
          _c("td", [
            _c("code", [_vm._v("orginalIndex")]),
            _vm._v(", "),
            _c("code", [_vm._v("targetIndex")]),
            _vm._v(", "),
            _c("code", [_vm._v("ids")]),
            _vm._v(" 原组的索引和目标组的索引，且把被分类的"),
            _c("code", [_vm._v("项")]),
            _vm._v("的id返回")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/components/DragSort/index.md?vue&type=template&id=6aef4e18&

// CONCATENATED MODULE: /home/travis/build/dogodo-cc/90s/node_modules/babel-loader/lib!/home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./src/components/DragSort/index.md?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DragSortvue_type_script_lang_js_ = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var render = function () {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [[_c("hi-drag-sort", {
          attrs: {
            "contextmenu-options": _vm.options,
            "style-config": _vm.styleConfig
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function (ref) {
              var data = ref.data;
              return [_c("div", {
                staticClass: "card",
                class: {
                  selected: data.selected
                }
              }, [_vm._v("\n          " + _vm._s(data.name) + "\n          "), _c("span", [_vm._v(_vm._s(data.sex === 1 ? "boy" : "girl"))])])];
            }
          }]),
          model: {
            value: _vm.gaoding,
            callback: function ($$v) {
              _vm.gaoding = $$v;
            },
            expression: "gaoding"
          }
        })]], 2);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      const democomponentExport = {
        data() {
          return {
            gaoding: [{
              title: 'uxms',
              childrens: [{
                id: 1,
                name: '元帅',
                sex: 1,
                selected: false
              }, {
                id: 2,
                name: '童童',
                sex: 0,
                selected: false
              }, {
                id: 3,
                name: '浣熊',
                sex: 1,
                selected: false
              }, {
                id: 4,
                name: '腰果',
                sex: 0,
                selected: false
              }, {
                id: 5,
                name: '坐标',
                sex: 0,
                selected: false
              }]
            }, {
              title: 'editor',
              childrens: [{
                id: 6,
                name: '小米',
                sex: 1,
                selected: false
              }, {
                id: 7,
                name: '诺亚',
                sex: 1,
                selected: false
              }, {
                id: 8,
                name: '流浪人',
                sex: 1,
                selected: false
              }]
            }, {
              title: 'ai',
              childrens: [{
                id: 9,
                name: '豆丁',
                sex: 1,
                selected: false
              }]
            }],
            styleConfig: {
              common: {
                width: '33.333%',
                height: '340px',
                "background-color": '#eee',
                padding: '10px'
              },
              groups: {
                1: {
                  "background-color": 'rgb(235, 221, 221)'
                }
              }
            }
          };
        },

        computed: {
          options() {
            return this.gaoding.map((g, i) => {
              return {
                name: g.title,
                value: i
              };
            });
          }

        },
        methods: {}
      };
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./src/components/DragSort/index.md?vue&type=script&lang=js&
 /* harmony default export */ var components_DragSortvue_type_script_lang_js_ = (DragSortvue_type_script_lang_js_); 
// EXTERNAL MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/DragSort/index.md





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DragSortvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/DragSort/index.md"
/* harmony default export */ var DragSort = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);