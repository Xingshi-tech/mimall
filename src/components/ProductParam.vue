<template>
  <div class="nav-bar">
    <div class="container">
      <div class="pro-title">
        小米8
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-bar"
}
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.nav-bar {
  height: 69px;
  line-height: 69px;
  border-top: 1px solid $colorH;
  .container {
    @include flex();
    .pro-title {
      color: $colorB;
      font-size: $fontH;
      font-weight: bold;
    }
    .pro-param {
      a {
        color: $colorC;
        font-size: $fontJ;
      }
      span {
        color: $colorC;
        margin: 0 10px;
      }
    }
  }
}
</style>
