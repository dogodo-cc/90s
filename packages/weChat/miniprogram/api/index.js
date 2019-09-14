const baseUrl = "http://cijing-hyaf_mendian.huanleguang.cn";

const http = {
  get(url, data = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + url,
        data:data,
        method: "GET",
        dataType: "json",
        success(res) {
          if (res.statusCode === 200) {
            resolve(res.data.data);
          } else {
            reject(res.errMsg);
          }
        },
        fail(err) {
          reject(err)
        }
      })
    })
  },
  post(url, data= {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + url,
        data: data,
        method: "POST",
        header: {
          "X-Requested-With": "XMLHttpRequest"
        },
        success(res) {
          if (res.statusCode === 200) {
            resolve(res.data.data);
          } else {
            reject(res.data);
          }
        },
        fail(err) {
          reject(err)
        }
      })
    })
  },
  put(url, data={}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + url,
        data: data,
        method: "PUT",
        header: {
          "X-Requested-With": "XMLHttpRequest"
        },
        success(res) {
          if (res.statusCode === 200) {
            resolve(res.data.data);
          } else {
            reject(res.errMsg);
          }
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }
}

module.exports = {
  http,
  baseUrl
};