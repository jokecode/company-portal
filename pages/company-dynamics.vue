<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div style="display: flex; flex-direction: column;">
    <Suspense>
      <!-- 公司动态、新闻 -->
      <CompanyNews />
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>

</style>
