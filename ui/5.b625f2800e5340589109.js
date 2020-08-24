(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./src/components/Loading/index.md?vue&type=template&id=3acfe584&
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
      _c("p", [_vm._v("加载数据时显示动效。")]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("p", [_vm._v("在表格等容器中加载数据时显示。")]),
      _vm._v(" "),
      _c(
        "demo-block",
        [
          _c("div", [
            _c("p", [
              _vm._v(
                "HelloUI 提供了两种调用 Loading 的方法：指令和服务。对于自定义指令"
              ),
              _c("code", [_vm._v("v-hi-loading")]),
              _vm._v("，只需要绑定"),
              _c("code", [_vm._v("Boolean")]),
              _vm._v(
                "即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加"
              ),
              _c("code", [_vm._v("body")]),
              _vm._v("修饰符，可以使遮罩插入至 DOM 中的 body 上。")
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "source" }, [_c("element-demo0")], 1),
          _vm._v(" "),
          _c("template", { slot: "highlight" }, [
            _c("pre", { pre: true }, [
              _c("code", { pre: true, attrs: { class: "html" } }, [
                _vm._v(
                  '<template>\n  <div class="demo-box" v-hi-loading="loading"></div> \n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        loading: true\n      };\n    }\n  };\n</script>\n'
                )
              ])
            ])
          ])
        ],
        2
      ),
      _vm._m(2),
      _vm._v(" "),
      _c("p", [_vm._v("可自定义加载文案、圆点和背景色。")]),
      _vm._v(" "),
      _c(
        "demo-block",
        [
          _c("div", [
            _c("p", [
              _vm._v("在绑定了"),
              _c("code", [_vm._v("v-hi-loading")]),
              _vm._v("指令的元素上添加"),
              _c("code", [_vm._v("hi-loading-text")]),
              _vm._v(
                "属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，"
              ),
              _c("code", [_vm._v("hi-loading-color")]),
              _vm._v("和"),
              _c("code", [_vm._v("hi-loading-background")]),
              _vm._v("属性分别用来设定圆点颜色和背景色值。")
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "source" }, [_c("element-demo1")], 1),
          _vm._v(" "),
          _c("template", { slot: "highlight" }, [
            _c("pre", { pre: true }, [
              _c("code", { pre: true, attrs: { class: "html" } }, [
                _vm._v(
                  '<template>\n  <div class="demo-box"\n    v-hi-loading="loading"\n    hi-loading-text="拼命加载中"\n    hi-loading-color="#fff"\n    hi-loading-background="rgba(0, 0, 0, 0.8)"\n    style="width: 100%">\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        loading: true\n      };\n    }\n  };\n</script>\n'
                )
              ])
            ])
          ])
        ],
        2
      ),
      _vm._m(3),
      _vm._v(" "),
      _c("p", [_vm._v("页面数据加载时显示。")]),
      _vm._v(" "),
      _c(
        "demo-block",
        [
          _c("div", [
            _c("p", [
              _vm._v("当使用指令方式时，全屏遮罩需要添加"),
              _c("code", [_vm._v("fullscreen")]),
              _vm._v(
                "修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用"
              ),
              _c("code", [_vm._v("lock")]),
              _vm._v(
                "修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。"
              )
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "source" }, [_c("element-demo2")], 1),
          _vm._v(" "),
          _c("template", { slot: "highlight" }, [
            _c("pre", { pre: true }, [
              _c("code", { pre: true, attrs: { class: "html" } }, [
                _vm._v(
                  "<template>\n  <button\n    @click=\"openFullScreen1\"\n    v-hi-loading.fullscreen.lock=\"fullscreenLoading\">\n    指令方式\n  </button>\n  <button\n    @click=\"openFullScreen2\">\n    服务方式\n  </button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fullscreenLoading: false\n      }\n    },\n    methods: {\n      openFullScreen1() {\n        this.fullscreenLoading = true;\n        setTimeout(() => {\n          this.fullscreenLoading = false;\n        }, 2000);\n      },\n      openFullScreen2() {\n        const loading = this.$hiLoading({\n          lock: true,\n          text: 'Loading',\n          color: '#fff',\n          background: 'rgba(0, 0, 0, 0.7)'\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      }\n    }\n  }\n</script>\n"
                )
              ])
            ])
          ])
        ],
        2
      ),
      _vm._m(4),
      _vm._v(" "),
      _c("p", [_vm._v("Loading 还可以以服务的方式调用。引入 Loading 服务：")]),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _c("p", [_vm._v("在需要调用时：")]),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _vm._m(8),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例："
        )
      ]),
      _vm._v(" "),
      _vm._m(9),
      _vm._v(" "),
      _vm._m(10),
      _vm._v(" "),
      _vm._m(11),
      _vm._v(" "),
      _vm._m(12),
      _vm._v(" "),
      _vm._m(13)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { attrs: { id: "loading-jia-zai" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#loading-jia-zai" } },
        [_vm._v("¶")]
      ),
      _vm._v(" Loading 加载")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "qu-yu-jia-zai" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#qu-yu-jia-zai" } },
        [_vm._v("¶")]
      ),
      _vm._v(" 区域加载")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "zi-ding-yi" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#zi-ding-yi" } },
        [_vm._v("¶")]
      ),
      _vm._v(" 自定义")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "zheng-ye-jia-zai" } }, [
      _c(
        "a",
        { staticClass: "header-anchor", attrs: { href: "#zheng-ye-jia-zai" } },
        [_vm._v("¶")]
      ),
      _vm._v(" 整页加载")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "fu-wu" } }, [
      _c("a", { staticClass: "header-anchor", attrs: { href: "#fu-wu" } }, [
        _vm._v("¶")
      ]),
      _vm._v(" 服务")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("pre", [
      _c("code", { staticClass: "language-javascript" }, [
        _vm._v("import { Loading } from 'hello-ui';\n")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("pre", [
      _c("code", { staticClass: "language-javascript" }, [
        _vm._v("Loading.service(options);\n")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("其中 "),
      _c("code", [_vm._v("options")]),
      _vm._v(" 参数为 Loading 的配置项，具体见下表。"),
      _c("code", [_vm._v("LoadingService")]),
      _vm._v(" 会返回一个 Loading 实例，可通过调用该实例的 "),
      _c("code", [_vm._v("close")]),
      _vm._v(" 方法来关闭它：")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("pre", [
      _c("code", { staticClass: "language-javascript" }, [
        _vm._v(
          "let loadingInstance = Loading.service(options);\nthis.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭\n  loadingInstance.close();\n});\n"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("pre", [
      _c("code", { staticClass: "language-javascript" }, [
        _vm._v(
          "let loadingInstance1 = Loading.service({ fullscreen: true });\nlet loadingInstance2 = Loading.service({ fullscreen: true });\nconsole.log(loadingInstance1 === loadingInstance2); // true\n"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("此时调用它们中任意一个的 "),
      _c("code", [_vm._v("close")]),
      _vm._v(" 方法都能关闭这个全屏 Loading。")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("如果完整引入了 HelloUI，那么 Vue.prototype 上会有一个全局方法 "),
      _c("code", [_vm._v("$hiLoading")]),
      _vm._v("，它的调用方式为："),
      _c("code", [_vm._v("this.$hiloading(options)")]),
      _vm._v("，同样会返回一个 Loading 实例。")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "options" } }, [
      _c("a", { staticClass: "header-anchor", attrs: { href: "#options" } }, [
        _vm._v("¶")
      ]),
      _vm._v(" Options")
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
          _c("td", [_vm._v("target")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 "
            ),
            _c("code", [_vm._v("document.querySelector")]),
            _vm._v("以获取到对应 DOM 节点")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("object/string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("document.body")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("body")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("同 "),
            _c("code", [_vm._v("v-hi-loading")]),
            _vm._v(" 指令中的 "),
            _c("code", [_vm._v("body")]),
            _vm._v(" 修饰符")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("fullscreen")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("同 "),
            _c("code", [_vm._v("v-hi-loading")]),
            _vm._v(" 指令中的 "),
            _c("code", [_vm._v("fullscreen")]),
            _vm._v(" 修饰符")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("true")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("lock")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("同 "),
            _c("code", [_vm._v("v-hi-loading")]),
            _vm._v(" 指令中的 "),
            _c("code", [_vm._v("lock")]),
            _vm._v(" 修饰符")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("text")]),
          _vm._v(" "),
          _c("td", [_vm._v("显示在加载图标下方的加载文案")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("color")]),
          _vm._v(" "),
          _c("td", [_vm._v("自定义圆点的颜色")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("background")]),
          _vm._v(" "),
          _c("td", [_vm._v("遮罩背景色")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("customClass")]),
          _vm._v(" "),
          _c("td", [_vm._v("Loading 的自定义类名")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ])
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/components/Loading/index.md?vue&type=template&id=3acfe584&

// CONCATENATED MODULE: /home/travis/build/dogodo-cc/90s/node_modules/babel-loader/lib!/home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./src/components/Loading/index.md?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var render = function () {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [[_c("div", {
          directives: [{
            name: "hi-loading",
            rawName: "v-hi-loading",
            value: _vm.loading,
            expression: "loading"
          }],
          staticClass: "demo-box"
        })]], 2);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      const democomponentExport = {
        data() {
          return {
            loading: true
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
          directives: [{
            name: "hi-loading",
            rawName: "v-hi-loading",
            value: _vm.loading,
            expression: "loading"
          }],
          staticClass: "demo-box",
          staticStyle: {
            width: "100%"
          },
          attrs: {
            "hi-loading-text": "拼命加载中",
            "hi-loading-color": "#fff",
            "hi-loading-background": "rgba(0, 0, 0, 0.8)"
          }
        })]], 2);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      const democomponentExport = {
        data() {
          return {
            loading: true
          };
        }

      };
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      var render = function () {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [[_c("button", {
          directives: [{
            name: "hi-loading",
            rawName: "v-hi-loading.fullscreen.lock",
            value: _vm.fullscreenLoading,
            expression: "fullscreenLoading",
            modifiers: {
              fullscreen: true,
              lock: true
            }
          }],
          on: {
            click: _vm.openFullScreen1
          }
        }, [_vm._v("\n    指令方式\n  ")]), _vm._v(" "), _c("button", {
          on: {
            click: _vm.openFullScreen2
          }
        }, [_vm._v("\n    服务方式\n  ")])]], 2);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      const democomponentExport = {
        data() {
          return {
            fullscreenLoading: false
          };
        },

        methods: {
          openFullScreen1() {
            this.fullscreenLoading = true;
            setTimeout(() => {
              this.fullscreenLoading = false;
            }, 2000);
          },

          openFullScreen2() {
            const loading = this.$hiLoading({
              lock: true,
              text: 'Loading',
              color: '#fff',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
              loading.close();
            }, 2000);
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
// CONCATENATED MODULE: ./src/components/Loading/index.md?vue&type=script&lang=js&
 /* harmony default export */ var components_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: /home/travis/build/dogodo-cc/90s/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Loading/index.md





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Loading/index.md"
/* harmony default export */ var Loading = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);