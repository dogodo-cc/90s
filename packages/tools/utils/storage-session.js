/**
 * storage
 */

const storage = {
  get(key) {
    return JSON.parse(window.sessionStorage.getItem(key));
  },

  set(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },

  delete(key) {
    key && window.sessionStorage.removeItem(key);
  }
};

// Debug
// eslint-disable-next-line
if (process.env.NODE_ENV === "development") {
  window._sessionStorage = storage;
}

export default storage;
