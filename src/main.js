import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// import env from './env'//只有插件才可以不加./
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import router from './router'//引入router
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'

//mock开关
const mock = false;
if (mock) {//不要使用import导入mock
  require('./mock/api')
}
export default {
  components: { Swiper, SwiperSlide }
}
//设置发请求的时候的基础值
//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;//设置超时时间默认为8秒

//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function (response) {//处理返回值
  let res = response.data;//获取返回的数据data
  let path = location.hash;
  if (res.status == 0) {//状态码为0表示成功 
    return res.data;
  } else if (res.status == 10) {//约定如果未登录的状态码异常值为10
    if (path != "#/index") {//如果用户所在页面是首页的话则不需要跳转
      window.location.href = '/#/login';//带井号的是哈希路由，如果未登录，跳转到登录页面
    }
  } else {//其它错误信息
    alert(res.msg);
    return Promise.reject(res);
  }
})
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'//加载动画
})
Vue.prototype.axios = axios;
Vue.config.productionTip = false//生产环境的提示，默认为false

new Vue({
  // 加载路由
  //当key和value一致时，写一个就行
  //如果导入写的是import routers from './router'
  //底下则需谢router：routers
  store,
  router,
  render: h => h(App),
}).$mount('#app')

