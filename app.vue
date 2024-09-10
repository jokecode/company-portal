<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --text-color-light-gray: #c6c6c6;
  --text-color-gray: #8b8b8b;
  --text-color-lightest: #e7e9ec;
  /*--primary-color: #ff434f;*/
  --primary-color: #1b80e3;
  --text-color-darker: #2e2e2e;
  --text-color-dark: #494949;
  --text-color-dark-gray: #727272;
  --secondary-color: #e3e3e3;
  --backdrop-color: rgba(42, 42, 42, 0.7);
}

html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

html.dark {
  background: #222;
  color: white;
}
</style>
