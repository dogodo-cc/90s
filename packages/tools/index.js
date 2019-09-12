function isPhone() {
  if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    return true;
  }

  return false;
}

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
};

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
};

var a = 1234567;

export { a, isPhone, storeLocal, storeSession };
