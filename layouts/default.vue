<script setup lang="ts">
</script>

<template>
  <div>
    <CommonHeader class="fixed left-0 right-0 top-0 z-[52]" />
    <ClientOnly>
      <CommonCarousel class="top-14" />
    </ClientOnly>
    <slot />
    <CommonFooter />
  </div>
</template>
