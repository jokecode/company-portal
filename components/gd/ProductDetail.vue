<script setup lang="ts">
import Glide from '@glidejs/glide'
import { useProductStore } from '~/composables/product'

const product = useProductStore()

const glide = new Glide('#Product-Img', {
  type: 'slider',
  startAt: 0,
  perView: 4,
  focusAt: 'center',
  gap: 20,
  autoplay: 3000,
  hoverpause: true,
  bound: false,
  breakpoints: {
    800: {
      perView: 4,
    },
    480: {
      perView: 1,
    },
  },
})

onMounted(() => {
  glide.mount()
})

function goBack() {
  const router = useRouter()
  router.back()
}
</script>

<template>
  <div style="width: 70vw;margin: 0 auto;">
    <section class="company-activities">
      <h2 class="title1">
        {{ product.productInfo.title }}
      </h2>
    </section>
    <div style="border: 1px solid #f5f7fa;padding-bottom: 40px;">
      <div style="background-color: #F5F7FA;font-weight: bold;font-size: 20px;padding: 8px 12px;color: #1B80E3;display: flex;justify-content: space-between;align-items: center;">
        <div>产品详情</div>
        <div style="font-size: 14px;">
          <span class="hover-cursor-pointer hover-underline hover-underline-offset-3" @click="goBack()">产品中心</span>
          <span> / </span>
          <span class="">产品详情</span>
        </div>
      </div>
      <div style="padding: 20px;white-space: pre-line;">
        <div>
          <div style="font-size: 18px;font-weight: bold;margin-bottom: 20px;">
            产品外观
          </div>
          <div id="Product-Img" class="glide">
            <!-- ---------------  Slider  ---------------- -->
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li v-for="(item, index) in product.productInfo.detail.images" :key="index" class="glide__slide">
                  <img :src="item" alt="" style="border-radius: 0.4em;">
                </li>
              </ul>
            </div>
            <!-- ---------------  Controls  ---------------- -->
            <div class="glide__arrows" data-glide-el="controls" style="position: absolute;top: 0;bottom: 0;align-items: center;width: 100%;">
              <div class="glide__arrow i-carbon-chevron-left" data-glide-dir="<" />
              <div class="glide__arrow i-carbon-chevron-right" data-glide-dir="<" />
            </div>
          </div>
        </div>
      </div>
      <div style="padding: 20px;white-space: pre-line;">
        <div v-for="(item, index) in product.productInfo.detail.desc" :key="index">
          <div style="font-size: 18px;font-weight: bold;">
            {{ item.title }}
          </div>
          <div>{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --primary-color: #1b80e3;
  --text-color-darker: #2e2e2e;
}
</style>

<style scoped>
.company-activities {
  margin-top: 80px;
  margin-bottom: 50px;
  display: grid;
  justify-items: center;
  /* max-width: 1280px; */
  max-width: 1344px;
  padding: 0 80px;
}
.title1 {
  font-size: 34px;
  color: var(--text-color-darker);
}
.title1::after {
  content: '';
  display: block;
  width: 80%;
  height: 4px;
  background-color: var(--primary-color);
  margin-top: 14px;
  transform: translateX(10%);
}

.glide {
  /*width: 600px;*/
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
.glide .glide__slides {
  display: flex;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
}
.glide .glide__slide {
  flex: none;
  border-radius: 0.4em;
  color: #263238;
  background-color: #ccc;
  text-align: center;
  line-height: 100px;
  list-style-type: none;
  width: 300px !important;
  height: 100% !important;
  box-shadow: 0.2em 0.2em 0.6em rgba(0, 0, 0, 0.4);
}
.glide__arrows {
  display: flex;
  justify-content: space-between;
  padding: 1em;
}
.glide__arrow {
  padding: 1em;
  font-size: 1.1em;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid #1b80e3 !important;
  color: #1b80e3 !important;
}
.glide__arrow:hover {
  color: red;
}
.glide__arrow:focus {
  outline: none;
}
.glide__arrow:active {
  transform: scale(0.88);
}
</style>
