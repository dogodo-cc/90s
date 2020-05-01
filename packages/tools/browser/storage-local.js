
export const local = {
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
