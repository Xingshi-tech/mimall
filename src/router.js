import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'// ./表示当前目录
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'

// Vue.use()加载插件的固定语法
Vue.use(Router);//加载Router插件
// Vue.use(Home);

// export导出
export default new Router({
    // 写配置
    routers: [//配置路由列表
        {
            path: '/',//设置路由路径
            name: 'home',//首先添加home主件
            component: Home,//添加主件
            children: [
                {
                    path: '/index',//首页
                    name: 'index',//首先添加home主件
                    component: Index,//添加主件
                }, {
                    path: '/product/:id',//需要一定参数才能访问
                    name: 'product',
                    component: Product
                }, {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: '/confirm',
                    name: 'order-confirm',
                    component: OrderConfirm
                },
                {
                    path: '/list',
                    name: 'order-list',
                    component: OrderList
                },
                {
                    path: '/pay',
                    name: 'order-pay',
                    component: OrderPay
                }
            ]
        }
    ]
});