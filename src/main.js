import Vue from 'vue'
import App from './App.vue'
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import axios from 'axios'
import router from './router'//引入router
export default{
  components:{Swiper,SwiperSlide}
}

Vue.config.productionTip = false

new Vue({
  // 加载路由
  //当key和value一致时，写一个就行
  //如果导入写的是import routers from './router'
  //底下则需谢router：routers
  router,
  render: h => h(App),
}).$mount('#app')

Vue.prototype.axios=axios;