<script setup lang="ts">
definePageMeta({
  layout: 'gd-layout',
})

</script>

<template>
  <div style="display: flex; flex-direction: column;">
    <Suspense>
      <ClientOnly>
        <GdHeader class="fixed left-0 right-0 top-0 z-[52]" />
        <GdHome />
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
