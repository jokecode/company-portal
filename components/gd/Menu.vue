<script setup>
const route = useRoute()
</script>

<template>
  <div class="flex justify-around gap-10 color-white cursor-pointer">
    <div class="menu-item menu-hover" :class="{ 'menu-active': ['/gd/', '/'].includes(route.path) }">
      <nuxt-link to="/gd/">
        <div class="bar-icon">
          <img src="/gd/bars/home.svg" alt="" class="svg-icon">
          <div>首页</div>
        </div>
      </nuxt-link>
    </div>
    <div class="menu-item menu-hover" :class="{ 'menu-active': ['/gd/showcases', '/showcases'].includes(route.path) }">
      <nuxt-link to="/gd/showcases">
        <div class="bar-icon">
          <img src="/gd/bars/showcases.svg" alt="" class="svg-icon">
          <div>成功案例</div>
        </div>
      </nuxt-link>
    </div>
    <div class="menu-item menu-hover" :class="{ 'menu-active': ['/gd/product', '/product'].includes(route.path) }">
      <nuxt-link to="/gd/product">
        <div class="bar-icon">
          <img src="/gd/bars/product.svg" alt="" class="svg-icon">
          <div>产品中心</div>
        </div>
      </nuxt-link>
    </div>
    <div class="menu-item menu-hover" :class="{ 'menu-active': ['/gd/company-dynamics', '/company-dynamics'].includes(route.path) }">
      <nuxt-link to="/gd/company-dynamics">
        <div class="bar-icon">
          <img src="/gd/bars/company-dynamics.svg" alt="" class="svg-icon">
          <div>公司动态</div>
        </div>
      </nuxt-link>
    </div>
    <div class="menu-item menu-hover" :class="{ 'menu-active': ['/gd/about-us', '/about-us'].includes(route.path) }">
      <nuxt-link to="/gd/about-us">
        <div class="bar-icon">
          <img src="/gd/bars/about-us.svg" alt="" class="svg-icon">
          <div class="menu-name">关于我们</div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bar-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.svg-icon {
  width: 24px;
  height: 24px;
}
.menu-item {
  @apply tracking-[0.15em] transition-delay-300;
}
.menu-hover {
  @apply hover-text-[#1B80E3] hover-font-bold hover-border-b-[#1B80E3] hover-border-b-1;
}
.menu-active {
  @apply text-[#1B80E3] font-bold border-b-[#1B80E3] border-b-1;
}
</style>
