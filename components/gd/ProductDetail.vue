<script setup>
import Glide from '@glidejs/glide'
import { ElPageHeader } from 'element-plus'
import { useProductStore } from '~/composables/product'

const product = useProductStore()

const glide = new Glide('#Product-Img', {
  type: 'slider',
  startAt: 0,
  perView: 3,
  focusAt: 'center',
  gap: 20,
  // autoplay: false,
  autoplay: 3000,
  hoverpause: true,
  bound: false,
  breakpoints: {
    800: {
      perView: 3,
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
function openImageTab(item) {
  window.open(`${item}`, '_blank')
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
        <div>
          <el-page-header title="返 回" @back="goBack">
            <template #content>
              <span class="text-large font-600 mr-3"> 产品详情 </span>
            </template>
          </el-page-header>
        </div>
        <div style="font-size: 14px;">
          <span class="hover-cursor-pointer hover-underline hover-underline-offset-3" @click="goBack">产品中心</span>
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
                  <img :src="item" alt="" style="border-radius: 0.4em;" @click="openImageTab(item)" class="cursor-pointer">
                  <!-- <el-image
                      :key="index"
                      :src="item"
                      :zoom-rate="1.2"
                      :max-scale="7"
                      :min-scale="0.2"
                      :preview-src-list="product.productInfo.detail.images"
                      :initial-index="index"
                      fit="cover"
                      :preview-teleported="true"
                      style="border-radius: 0.4em;aspect-ratio: 4/5;"
                  /> -->
                </li>
              </ul>
            </div>
            <!-- ---------------  Controls  ---------------- -->
            <div class="glide__arrows" data-glide-el="controls" style="position: absolute;top: 0;bottom: 0;align-items: center;width: 100%;">
              <div data-glide-dir="<" class="controls-btn"><i class="glide__arrow i-carbon-chevron-left" /></div>
              <div data-glide-dir=">" class="controls-btn"><i class="glide__arrow i-carbon-chevron-right" /></div>
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
.glide__track {
  margin: 12px 50px;
}
.glide {
  /*width: 600px;*/
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
.glide .glide__slides {
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  z-index: 5;
  padding: 12px 0;
}
.glide .glide__slide {
  flex: none;
  border-radius: 0.4em;
  color: #263238;
  /*background-color: #ccc;*/
  background-color: transparent;
  text-align: center;
  line-height: 100px;
  list-style-type: none;
  /*width: 300px !important;*/
  height: 100% !important;
  box-shadow: 0.2em 0.2em 0.6em rgba(0, 0, 0, 0.4);
}
.glide__arrows {
  display: flex;
  justify-content: space-between;
  padding: 1em 2px;
  z-index: 3;
}
.controls-btn {
  padding: 12px 4px;
  background: #89878736;
  border-radius: 0.4em;
}
.controls-btn:hover,
.controls-btn:focus {
  background: #f5a63f;
  transform: scale(1.1);
  transition: 0.3s;
}
.controls-btn:active {
  transform: scale(0.88);
}
.glide__arrow {
  padding: 1em;
  font-size: 1.1em;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid #1b80e3 !important;
  color: #1b80e3 !important;
}
</style>
