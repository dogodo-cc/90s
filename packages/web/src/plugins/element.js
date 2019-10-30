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
  Tooltip,
  Slider
} from 'element-ui'

if (window.innerWidth < 780) {
  Vue.prototype.$ELEMENT = { size: 'mini'};
} else {
  Vue.prototype.$ELEMENT = { size: 'small'};
}
Vue.use(Button)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Slider)
