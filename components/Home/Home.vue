<script setup lang="ts">

</script>

<template>
  <!-- 首页轮播图 -->
  <HomeSwiper />
  <!-- 行业、领域 -->
  <HomeSector />
  <!-- 经验 -->
  <HomeExperience />
  <!-- 项目 -->
  <HomeProjects />
  <ClientOnly>
    <!-- @glidejs/glide 组件似乎不支持服务端渲染 -->
    <!-- 合作伙伴logo轮播 -->
    <HomeBrands />
  </ClientOnly>
  <!-- 公司最新消息 -->
  <HomeLatestNews />
</template>

<style lang="scss" scoped>

</style>
