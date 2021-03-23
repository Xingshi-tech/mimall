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
                      <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'">
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
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper' //用于轮播图
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
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
      ]
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
  }
}
</style>