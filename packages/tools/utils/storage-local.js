/*eslint no-undef: 1*/

/**
 * storage
 */

const storeLocal = {
  get(key) {
    return JSON.parse(window.localStorage.getItem(key));
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  delete(key) {
    key && window.localStorage.removeItem(key);
  }
};

// Debug
if (process.env.NODE_ENV === "development") {
  window._session = storeLocal;
}

export { storeLocal };
