<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'

export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      res: {}
    }
  },
  mounted() {
    // storage.setItem('a', { b: 1 })
    // storage.setItem('detail', { 'username': '程良飞' }, 'b')
    // storage.clear('username', 'detail')

    //本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) =>{
    //   this.res=res;
    // })
    //通过esay-mock平台实现数据mock
    //本地集成mockjs实现数据mock
  }
}
</script>

<style>
@import "./assets/scss/reset.scss";
</style>
