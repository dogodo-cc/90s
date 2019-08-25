function hi() {
  return '我来自 @90s/tool 模块,当你看到我当时候，说明 lerna 和 travis 的工作模式终于走通！！！！';
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
