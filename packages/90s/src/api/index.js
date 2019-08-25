import axios from "axios";
const CancelToken = axios.CancelToken;

const instance = axios.create({
  baseURL: "",
  timeout: 3000,
  withCredentials: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
});

// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Do something with response data
    const pagination = JSON.parse(response.headers["x-pagination"] || null);
    if (pagination) {
      response.pagination = pagination;
    }
    return response;
  },
  function(error) {
    // Do something with response error
    /* eslint-disable-next-line*/
    console.log(error.response.data, "请求error----");
    return Promise.reject(error);
  }
);

const handleError = function(err) {
  return Promise.reject(err);
};

export function createIo(instance) {
  return {
    /**
     * @param cancelFetch: function 可以取消当前的fetch 回调，cancelFetch的argument是取消fetch的钩子
     * @examples cancel => (this.cancel = cancel); 在发起新请求之前执行 this.cancel() 取消当前未返回的请求
     * @description 场景： tab切换 页面切换 模糊搜索
     * 前一个请求被挂起但是后一个请求发起，
     * 当前一个请求更慢返回的时候，页面的数据是错误的
     * 原因就是前一个请求没有取消，且顺序就算是正确的，
     * 当频繁切换的时候，页面有明显的渲染延迟
     */
    get(url, params = {}, cancelFetch) {
      if (typeof params === "function" && !cancelFetch) {
        cancelFetch = params;
        params = {};
      }

      const options = {
        cancelToken: new CancelToken(function executor(c) {
          cancelFetch && cancelFetch(c);
        })
      };

      options.params = params;

      return instance.get(url, options).catch(handleError);
    },
    post(url, data = {}, config = {}) {
      return instance.post(url, data, config).catch(handleError);
    },
    put(url, data = {}, config = {}) {
      return instance.put(url, data, config).catch(handleError);
    },
    delete(url, options = {}) {
      return instance.delete(url, options).catch(handleError);
    }
  };
}

export default createIo(instance);
