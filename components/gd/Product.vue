<script setup lang="ts">
import { productData } from '~/config/product'
import { useProductStore } from '~/composables/product'

const product = useProductStore()
const allProductData = ref(productData)
const filterCriteria = ref('All')

const disabled = ref(false)

const filterProduct = computed(() => {
  // 触发页面动画
  warnDisabled()
  return allProductData.value.filter((item) => {
    return (item.type === filterCriteria.value || filterCriteria.value === 'All')
  })
})

function showDetail(value) {
  filterCriteria.value = value
  product.setFilterCriteria(filterCriteria.value)
}

function warnDisabled() {
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
  }, 1500)
}

function setCurrentProduct(info) {
  product.setProductInfo(info)
}
</script>

<template>
  <div style="width: 70vw;margin: 0 auto;">
    <section class="company-activities">
      <h2 class="title1">产品中心</h2>
      <section id="showcases" class="showcases section-bg">
        <div class="filter-btns">
          <button class="filter-btn" :class="filterCriteria === 'All' ? 'active' : ''" @click="showDetail('All')">
            全部
          </button>
          <button class="filter-btn" :class="filterCriteria === 'Profinet' ? 'active' : ''" @click="showDetail('Profinet')">
            PROFINET网关产品
          </button>
          <button class="filter-btn" :class="filterCriteria === 'DistributedIO' ? 'active' : ''" @click="showDetail('DistributedIO')">
            分布式IO
          </button>
          <button class="filter-btn" :class="filterCriteria === 'PLC' ? 'active' : ''" @click="showDetail('PLC')">
            PLC
          </button>
          <button class="filter-btn" :class="filterCriteria === 'ChipSoftware' ? 'active' : ''" @click="showDetail('ChipSoftware')">
            PROFINET芯片/软件
          </button>
          <button class="filter-btn" :class="filterCriteria === 'Other' ? 'active' : ''" @click="showDetail('Other')">
            其他
          </button>
        </div>
      </section>
      <p class="intro" />
      <div class="activities" :class="{ shake: disabled }">
        <div v-for="(item, index) in filterProduct" :key="index" class="activity">
          <div class="act-image-wrapper">
            <img :src="item.url" alt="">
          </div>
          <div class="meta">
            <!-- <p class="data-published">
              <i class="far fa-calendar"/>
              2020年4月22日
            </p>
            <p class="comments">
              <i class="far fa-comments"/>
              <span>阅读(1536)</span>
            </p> -->
          </div>
          <h2 class="act-title">
            {{ item.title }}
          </h2>
          <article
            style="
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;"
          >
            {{ item.desc }}
          </article>
          <button class="read-more-btn">
            <nuxt-link to="/gd/product-details" @click="setCurrentProduct(item)">
              产品详情
            </nuxt-link>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
:root {
  --text-color-light-gray: #c6c6c6;
  --text-color-dark: #494949;
  --text-color-gray: #8b8b8b;
  --primary-color: #ff434f;
  --text-color-darker: #2e2e2e;
  --text-color-dark-gray: #727272;
  --secondary-color: #e3e3e3;
}
</style>

<style lang="scss" scoped>
section {
  /* 二维 */
  display: grid;
  /* 每个列的对齐方式 */
  justify-items: center;
  /*max-width: 1280px;*/
  max-width: 1344px;
  padding: 0 80px;
}

.section-bg {
  position: relative;
}

.section-bg::before {
  content: '';
  display: block;
  position: absolute;
  /*background-color: #f9fbfb;*/
  width: 100vw;
  height: 100%;
  z-index: -1;
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

.intro {
  margin: 28px 0 60px 0;
  /* text-indent: 2em; */
  font-size: 18px;
  color: var(--text-color-dark-gray);
}

.company-activities {
  margin-top: 80px;
}

.activities {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
}

.activity {
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: 0.4s;
  margin-bottom: 56px;
}

.act-image-wrapper {
  /*height: 255px;*/
  overflow: hidden;
  margin: -24px;
  margin-bottom: 0;
}

.act-image-wrapper img {
  min-height: 300px;
  object-fit: cover;
  height: 100%;
  margin: 0 auto;
}

.activity .meta {
  margin-top: 20px;
  margin-bottom: 12px;
  color: var(--text-color-light-gray);
  font-size: 12px;
  display: flex;
}

.activity .meta > p:last-child {
  margin-left: 36px;
}

.act-title {
  color: var(--text-color-dark);
  font-size: 18px;
  margin-bottom: 16px;
  height: 54px;
}

.activity article {
  color: var(--text-color-gray);
  letter-spacing: 0.54px;
  line-height: 24px;
}

.read-more-btn {
  border: 0;
  color: white;
  background-color: var(--primary-color);
  padding: 6px 14px;
  margin-top: 24px;
  border-radius: 4px;
}

.activity:hover {
  transform: translateY(-20px) scale(1.05);
  box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
}

.filter-btns {
  margin-top: 54px;
  margin-bottom: 38px;
}

.filter-btn {
  margin: 0 7px;
  background-color: var(--secondary-color);
  border: 0;
  color: var(--text-color-dark-gray);
  padding: 8px 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.4s;
}

.filter-btn:focus,
.filter-btn:active {
  outline: none;
}

.filter-btn.active,
.filter-btn:hover {
  background-color: var(--primary-color);
  color: white;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
