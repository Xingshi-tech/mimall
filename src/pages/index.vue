<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" v-bind:key="i">
                  <li v-for="(sub,j) in item" v-bind:key="j">
                    <a v-bind:href="sub?'/#/product/'+sub.id:''">
                      <img v-lazy="sub?sub.img:'/imgs/item-box-1.png'">
                      <span>{{sub?sub.name:'小米9'}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <!-- 轮播图 -->
        <swiper v-bind:options="swiperOption">
          <!-- v-for:循环 -->
          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/+item.id'">
              <img v-bind:src="item.img">
            </a>
          </swiper-slide>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a class="ads-imgs" :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img v-lazy="item.img">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,i) in phoneList" :key="i">
              <div class="item" v-for="(sub,j) in arr" :key="j">
                <span :class="{'new-pro':j%2==0}">新品</span>
                <div class="item-img">
                  <img v-lazy="sub.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{sub.name}}</h3>
                  <p>{{sub.subtitle}}</p><!-- 一般用p标签来包裹描述信息 -->
                  <p class="price" @click="addCart(sub.id)">{{sub.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal title="提示" sureText="查看购物车" btnType="1" modalType="middle" v-bind:showModal="showModal" v-on:submit="goToCart" v-on:cancel="showModal=false">
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>
<script>
//导入弹窗组件 
import Modal from './../components/Modal'
import ServiceBar from './../components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper' //用于轮播图
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  },

  data() {
    return {
      swiperOption: {
        autoplay: true,//轮播图自动播放
        loop: true,//循环播放
        effect: "cube",//切换效果为方块
        cubeEffect: {//方块切换效果的一些具体参数值
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {//分页器
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',

        },
      },
      slideList: [//轮播图循环遍历的列表
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        }, {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        }, {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        }, {
          id: '45',
          img: '/imgs/slider/slide-4.jpg'
        }, {
          id: '45',
          img: '/imgs/slider/slide-5.jpg'
        }
      ],
      menuList: [//二维数组
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '4G+ 移动4G专区',
          },
        ], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        }, {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        }, {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        }, {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        },
      ],
      phoneList: [
        [1, 1, 1, 1], [1, 1, 1, 1]
      ],
      showModal: false
    }
  },
  mounted() {//初始化商品
    this.init();//初始化
  },
  methods: {
    init() {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then((res) => {
        res.list = res.list.slice(6, 14)
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
      })
    },
    addCart() {
      this.showModal = true;
      // this.axios.post('/carts', {
      //   productId: id,
      //   selected: true
      // }).then(() => {

      // }).catch(() => {
      //   this.showModal = false;
      // })
    },
    goToCart() {
      this.$router.push('/cart');
    }
  }
}
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.index {
  .container {
    .swiper-box {
      .nav-menu {
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        box-sizing: border-box;
        background-color: rgba($color: #55585a, $alpha: 0.48);
        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;
            position: relative;
            a {
              display: block;
              font-size: 16px;
              color: #ffffff;
              margin-left: 30px;
              position: relative;
              &::after {
                content: " "; //需要占位，不然显示不出来
                @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
                position: absolute;
                right: 30px;
                top: 17.5px;
              }
            }
            &:hover {
              background-color: $colorA;
              .children {
                display: block;
              }
            }
            .children {
              display: none;
              width: 962px;
              height: 451px;
              background-color: $colorG;
              position: absolute;
              top: -26px;
              left: 264px;
              border: 1px solid $colorH;
              ul {
                display: flex;
                justify-content: space-between; //两边对齐
                height: 75px;
                li {
                  height: 75px;
                  line-height: 75px;
                  flex: 1; //和width:25%效果一样
                  padding-left: 23px;
                }
                a {
                  color: $colorB;
                  font-size: 14px;
                  span {
                    vertical-align: middle;
                    margin-left: 15px;
                  }
                }
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        .swiper-button-prev {
          left: 274px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .ads-box {
      @include flex();
      margin: 14px 0 31px 0;
      height: 167px;
      a {
        width: 296px;
        height: 167px;
      }
    }
    .banner {
      margin-bottom: 50px;
      a {
        width: 1226px;
        height: 130px;
      }
    }
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
    }
    .wrapper {
      margin-top: 20px;
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .item {
          width: 236px;
          height: 302px;
          background-color: $colorG;
          text-align: center;
          span {
            display: inline-block;
            width: 67px;
            height: 24px;
            font-size: 14px;
            line-height: 24px;
            color: $colorG;
            &.new-pro {
              //新品颜色
              background-color: #7ecf68;
            }
            &.kill-pro {
              //秒杀
              background-color: #e82626;
            }
          }
          .item-img {
            img {
              width: 100%;
              height: 195px;
            }
          }
          .item-info {
            h3 {
              font-size: $fontJ;
              color: $colorB;
              line-height: $fontJ;
              font-weight: bold;
            }
            p {
              color: $colorD;
              line-height: 13px;
              margin: 6px auto 13px;
            }
            .price {
              color: #f20a0a;
              font-size: $fontJ;
              font-weight: bold;
              cursor: pointer;
              &::after {
                //用于添加购物车
                content: " ";
                @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                margin-left: 5px;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
}
</style>