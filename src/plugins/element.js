import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import {
  Button,
  Input,
  Radio,
  Checkbox,
  Popover,
  Tooltip
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small'};
Vue.use(Button)
Vue.use(Input)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Popover)
Vue.use(Tooltip)
