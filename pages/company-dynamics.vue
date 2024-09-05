<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div style="display: flex; flex-direction: column;">
    <Suspense>
      <ClientOnly>
        <CompanyNews />
      </ClientOnly>
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
