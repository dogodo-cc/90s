function hi() {
  return '我来自 @90s/tool 模块,当你看到这句话的时候，说明使用 lerna 管理多项目和 travis CI 持续集成成功啦 ^-^';
}

/*eslint no-undef: 1*/

/**
 * storage
 */
var storeLocal = {
  get: function get(key) {
    return JSON.parse(window.localStorage.getItem(key));
  },
  set: function set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  "delete": function _delete(key) {
    key && window.localStorage.removeItem(key);
  }
}; // Debug

if (process.env.NODE_ENV === "development") {
  window._session = storeLocal;
}

/*eslint no-undef: 1*/

/**
 * session
 */
var storeSession = {
  get: function get(key) {
    return JSON.parse(window.sessionStorage.getItem(key));
  },
  set: function set(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
  "delete": function _delete(key) {
    key && window.sessionStorage.removeItem(key);
  }
}; // Debug

if (process.env.NODE_ENV === "development") {
  window._sessionStorage = storeSession;
}

export { hi, storeLocal };
