/**
 * storage
 */

const storage = {
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
// eslint-disable-next-line
if (process.env.NODE_ENV === "development") {
  window._localStorage = storage;
}

export default storage;
