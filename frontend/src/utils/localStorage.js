export default {
  async getToken(key) {
    return await localStorage.getItem(key);
  },

  async setToken(key, value) {
    return await localStorage.setItem(key, value);
  },

  async clear() {
    return await localStorage.clear();
  },
};
