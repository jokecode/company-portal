<script setup lang="ts">
definePageMeta({
  layout: 'gd-layout',
})

</script>

<template>
  <Suspense>
    <div style="display: flex; flex-direction: column;">
      <!-- 首页 -->
      <Home />
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
