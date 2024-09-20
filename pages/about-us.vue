<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <Suspense>
    <div class="flex flex-col">
      <!-- 公司简介、联系方式 -->
      <AboutUsCompanyProfile />

      <!-- 资质荣誉 -->
      <AboutUsHonor />

      <!-- 软著、专利 -->
      <!--<AboutUsSoftwareCopyright />-->
    </div>
    <template #fallback>
      <div italic op50>
        <span animate-pulse>Loading...</span>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>

</style>
