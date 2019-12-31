import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './style/common.scss'
import './jsFile/rem'

import 'mint-ui/lib/style.css' // 引入mint样式

import {
  Icon,
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
Vue.use(Icon)

// 按需引入部分组件
import { Toast, Spinner } from 'mint-ui';
Vue.component(Toast.name, Toast);
Vue.component(Spinner.name, Spinner);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
