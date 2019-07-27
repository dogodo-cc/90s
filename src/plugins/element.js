import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import {
  Button,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  Popover,
  Tooltip
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small'};
Vue.use(Button)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(Popover)
Vue.use(Tooltip)
