<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="flex flex-col">
    <Suspense>
      <ClientOnly>
        <AboutUsCompanyProfile />
        <AboutUsHonor />
        <AboutUsSoftwareCopyright />
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
