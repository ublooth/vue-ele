import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './style/common.scss'
import './jsFile/rem'
import {
  Button,
  Select,
  Option,
  Row,
  DatePicker,
} from 'element-ui'; // 按需引入

// 完整引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 按需引入
// Vue.component(Button.name, Button);
/* 或写为
 * Vue.use(Button)
 */
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Row)
Vue.use(DatePicker)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
