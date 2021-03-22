<template>
  <div class="footer">
    <div class="foot-logo">
      <img
        src="/imgs/logo-footer.png"
        alt=""
      >
      <p>小米商城</p>
    </div>
    <div class="foot-link">
      <a href="" target="_blank">河畔一角主页</a><span>|</span>
      <a href="" target="_blank">Vue全栈课程</a><span>|</span>
      <a href="" target="_blank">React全家桶课程</a><span>|</span>
      <a href="" target="_blank">微信支付专项课程（H5+小程序+Node+Mongo）</a>
    </div>
    <div class="copyright">Copyright ©2020 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>
<script>
export default {
  name: 'nav-footer'
}
</script>
<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .foot-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .foot-link {
    margin-bottom: 13px;
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>