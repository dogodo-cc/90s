// components/m-input/m-input.js
Component({
  behaviors: ['wx://form-field'],
  properties: {
    placeholder: {
      type: String,
      value: ''
    },
    maxlength: {
      type: Number,
      value: 1000
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showClear: false,
    value: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    focus() {
      this.setData({
        showClear: true
      })
    },
    blur() {
      this.setData({
        showClear: false
      })
    },
    clear() {
      this.setData({
        value: ''
      })
    }
  }
})
