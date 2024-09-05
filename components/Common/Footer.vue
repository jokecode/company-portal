<script setup>
import { ElBacktop } from 'element-plus'
</script>

<template>
  <footer>
    <ElBacktop target="#__nuxt" :right="100" :bottom="100" class="back-top" style="padding: 8px;width: 80px;height: 40px;">
      <div class="back-top-icon">
        <img class="back-top-icon-1" src="/images/icons/go-top.svg" alt="">
        <img class="back-top-icon-2" src="/images/icons/gush.svg" alt="">
      </div>
    </ElBacktop>
    <div class="footer-menus">
      <div class="contact-us">
        <p class="menu-title">联系我们</p>
        <p>地址：四川省成都市双流区新通大道777号<br>时尚大厦607</p>
        <p>电话：186 2823 2011</p>
        <!-- <p>传真</p> -->
        <p>电子邮件：peng.zhang@gdi-tech.net</p>
      </div>
      <div class="service-menu footer-menu">
        <p class="menu-title">服务概览</p>
        <ul class="menu-items">
          <li><a href="#">XXXX</a></li>
          <li><a href="#">XXXX</a></li>
          <li><a href="#">XXXX</a></li>
          <li><a href="#">XXXX</a></li>
        </ul>
      </div>
      <div class="service-menu footer-menu">
        <p class="menu-title">成功案例</p>
        <ul class="menu-items">
          <li><a href="#">XXXX</a></li>
          <li><a href="#">XXXX</a></li>
          <li><a href="#">XXXX</a></li>
          <li><a href="#">XXXX</a></li>
        </ul>
      </div>
      <div class="service-menu footer-menu">
        <p class="menu-title">公司动态</p>
        <ul class="menu-items">
          <li><a href="#">信息公开</a></li>
          <!-- <li><a href="#">最近新闻</a></li> -->
          <!-- <li><a href="#">最新博客</a></li> -->
        </ul>
      </div>
      <div class="service-menu footer-menu">
        <p class="menu-title">帮助与支持</p>
        <ul class="menu-items">
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">联系客服</a></li>
          <!-- <li><a href="#">文档资源</a></li> -->
        </ul>
      </div>
      <p class="icp-info">蜀ICP备XXXXX号-1</p>
      <p class="rights">&copy; 2024 成都工鼎科技有限公司</p>
      <div class="scroll-to-top">
        <a href="#"><i class="fas fa-chevron-up"></i></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* 底部信息 */
footer {
  margin-top: 124px;
  background-color: #181818;
  display: grid;
  justify-items: center;
  padding-top: 72px;
  padding-bottom: 24px;
}

.footer-menus {
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  padding: 0 80px;
  position: relative;
}

.menu-title {
  font-size: 16px;
  color: white;
  font-weight: 500;
  margin-bottom: 20px;
}

.contact-us {
  justify-self: start;
  color: var(--text-color-lightest);
}

.contact-us p:not(:first-child) {
  padding-bottom: 16px;
}

.menu-items li {
  list-style: none;
  padding-bottom: 8px;
}

.menu-items li a {
  text-decoration: none;
  font-weight: 300;
  color: var(--text-color-lightest);
}

.icp-info {
  margin-top: 24px;
  margin-bottom: 16px;
}

.icp-info,
.rights {
  grid-column: 1 / -1;
  justify-self: center;
  color: white;
}

.scroll-to-top {
  display: none;
  position: relative;
  z-index: 300;
}
.scroll-to-top a {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  position: fixed;
  bottom: 60px;
  right: 30px;
}

.back-top:active,
.back-top:focus {
}

.back-top-icon:focus,
.back-top-icon:active {
  .back-top-icon-1 {
    margin-top: 0;
    transition: -0.4s;
  }
  .back-top-icon-2 {
    display: unset;
    margin-top: -15px;
  }
}
.back-top-icon-1 {
  margin-top: -46px;
}
.back-top-icon-2 {
  display: none;
  transform: scale(0.6);
}
</style>
