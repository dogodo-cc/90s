/**
 * session
 */

export const storeSession = {
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
