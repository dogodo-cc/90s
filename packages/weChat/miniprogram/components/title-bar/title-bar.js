const app = getApp();
// const computedBehavior = require('miniprogram-computed')
Component({
  // behaviors: [computedBehavior],
  properties: {
    title: {
      type: String,
      value: '门店宝'
    },
    fontWeight: {
      type: Number,
      value: 400
    },
    color: {
      type: String,
      value: "#000"
    },
    showBack: {
      type: Boolean,
      value: false
    },
    backText: {
      type: String,
      value: ''
    },
    // 是否拦截返回事件
    interceptBackEvent: {
      type: Boolean,
      value: false
    },
    showScan: {
      type: Boolean,
      value: false
    }
  },
  data: {
    statusBarHeight: 20,
  },
  computed: {
    titleBarHeight(data) {
      return data.statusBarHeight + 44;
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        statusBarHeight: app.globalData.systemInfo.statusBarHeight,
      })
    }
  },
  methods: {
    goBack() {
      if (this.data.interceptBackEvent) {
        this.triggerEvent('goBack')
      } else {
        wx.navigateBack({
          delta: 1
        })
      }
    },
    scan() {
      wx.scanCode({
        onlyFromCamera: true,
        success (res) {
          console.log(res)
        }
      })
    }
  }
})
