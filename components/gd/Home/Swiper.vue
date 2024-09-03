<script setup lang="ts">
import Glide from '@glidejs/glide'
import { onMounted } from 'vue'

// 当前glide轮播图序号
const nowActive = ref(0)

// glide-数据列表
const glideList = ref([
  {
    h1_1: 'Turning',
    h1_2: 'Big Ideas',
    h4: 'into Great Products',
    src: '/gd/home/slider-1-slide-1-1920x749.jpg',
    type: 'img',
    alt: 'Image 1',
    color: '#3e4041',
  },
  {
    h1_1: 'Innovative',
    h1_2: 'Technologies',
    h4: 'for Your Company',
    src: '/gd/home/slider-1-slide-2-1920x749.jpg',
    type: 'img',
    alt: 'Image 2',
    color: '#fff',
  },
  {
    h1_1: 'Reliable',
    h1_2: 'Solutions',
    h4: 'for Industrial Environment',
    src: '/gd/home/slider-1-slide-3-1920x749.jpg',
    type: 'img',
    alt: 'Image 3',
    color: '#fff',
  },
])

const glide = ref()

onMounted(() => {
  glide.value = new Glide('.home-glide', {
    /* type: 'carousel', */
    autoplay: false,
    perView: 1,
  })
  // 及时更新底部bullet的选中状态
  glide.value.on('move', () => {
    nowActive.value = glide.value.index
  })
  glide.value.mount()
})
</script>

<template>
  <div class="home-glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides" style="min-height: 34.4271vw;">
        <li class="glide__slide" v-for="(item, index) in glideList" :key="index" style="position: relative;">
          <div style="width: 100%;height: 100%;position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;">
            <div class="container"
                 style="text-align: left; font-family: 'Roboto Mono', Monaco, Consolas, 'Courier New', monospace;"
                 :style="{ color: item.color }">
              <h1 class="fadeInUpSmall animated">{{ item.h1_1 }} <br> {{ item.h1_2 }}</h1>
              <div style="display: inline-flex;flex-wrap: nowrap;align-items: center;">
                <span class="fadeInRightSmall animated" style="background: #f5a63f;height: 6px;width: 69px;"></span>
                <h4 class="fadeInRightSmall animated"
                    style="letter-spacing: 0.05em;font-size: 24px;font-weight: 500;margin: 0 10px;">{{ item.h4 }}</h4>
              </div>
            </div>
          </div>
          <img :src="item.src" :alt="item.alt" />
        </li>
        <!--<li class="glide__slide">-->
        <!--  <div style="position: absolute;left:0;right: 0;margin: 0 auto;width: 100%;height: 100%;">-->
        <!--    <div class="container"-->
        <!--         style="color: #3e4041; text-align: left; font-family: 'Roboto Mono', Monaco, Consolas, 'Courier New', monospace;">-->
        <!--      <h1 class="fadeInUpSmall animated">Turning <br> Big Ideas</h1>-->
        <!--      <div style="display: inline-flex;flex-wrap: nowrap;align-items: center;">-->
        <!--        <span class="fadeInRightSmall animated" style="background: #f5a63f;height: 6px;width: 69px;"></span>-->
        <!--        <h4 class="fadeInRightSmall animated"-->
        <!--            style="letter-spacing: 0.05em;font-size: 24px;font-weight: 500;margin: 0 10px;">into Great-->
        <!--          Products</h4>-->
        <!--      </div>-->
        <!--    </div>-->
        <!--  </div>-->
        <!--  <img src="/gd/home/slider-1-slide-1-1920x749.jpg" alt="Image 1" />-->
        <!--</li>-->
        <!--<li class="glide__slide">
          <div style="display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;position: absolute;margin: 0 auto;width: 100%;height: 100%;">
            <div class="container"
                 style="color: #fff; text-align: left; font-family: 'Roboto Mono', Monaco, Consolas, 'Courier New', monospace;">
              <h1 class="fadeInUpSmall animated">Innovative <br> Technologies</h1>
              <div style="display: inline-flex;flex-wrap: nowrap;align-items: center;">
                <span class="fadeInRightSmall animated" style="background: #f5a63f;height: 6px;width: 69px;"></span>
                <h4 class="fadeInRightSmall animated"
                    style="letter-spacing: 0.05em;font-size: 24px;font-weight: 500;margin: 0 10px;">for Your
                  Company</h4>
              </div>
            </div>
          </div>
          <img src="/gd/home/slider-1-slide-2-1920x749.jpg" alt="Image 2" />
        </li>
        <li class="glide__slide">
          <div style="display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;position: absolute;margin: 0 auto;width: 100%;height: 100%;">
            <div class="container"
                 style="color: #fff; text-align: left; font-family: 'Roboto Mono', Monaco, Consolas, 'Courier New', monospace;">
              <h1 class="fadeInUpSmall animated">Reliable <br> Solutions</h1>
              <div style="display: inline-flex;flex-wrap: nowrap;align-items: center;">
                <span class="fadeInRightSmall animated" style="background: #f5a63f;height: 6px;width: 69px;"></span>
                <h4 class="fadeInRightSmall animated"
                    style="letter-spacing: 0.05em;font-size: 24px;font-weight: 500;margin: 0 10px;">for Industrial
                  Environment</h4>
              </div>
            </div>
          </div>
          <img src="/gd/home/slider-1-slide-3-1920x749.jpg" alt="Image 3" />
        </li>-->
      </ul>
    </div>

    <div class="glide__arrows" data-glide-el="controls">
      <i class="glide__arrow glide__arrow--left i-carbon-chevron-left hover-text-[#1B80E3] w-[32px] h-[32px] p-5"
         data-glide-dir="<"/>
      <div class="w-[1px] h-[50px] bg-[#ebebeb]"></div>
      <i class="glide__arrow glide__arrow--right i-carbon-chevron-right hover-text-[#1B80E3] w-[32px] h-[32px] p-5"
         data-glide-dir=">"/>
    </div>

    <!-- 底部切换控件 -->
    <div class="glide__bullets" data-glide-el="controls[nav]">
      <button v-for="(item, index) in glideList" class="glide__bullet" :class="{ active: nowActive === index }" :data-glide-dir="`=${index}`" />
    </div>
  </div>
</template>

<style scoped>
.home-glide {
  position: relative;
  top: 56px;
}

.glide__slide {
  /*position: absolute;*/
  /*z-index: 70;*/
  text-align: center;
  /*max-width: 60vw;*/
}

.glide__slide img {
  width: 100%;
  height: auto;
}

.glide__arrows {
  position: absolute;
  right: 0;
  z-index: 2;
  bottom: 0;
  background: #fff;

  width: 235px;
  height: 107px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.glide__arrow {
  border: none;
  cursor: pointer;
}

.glide__bullets {
  position: absolute;
  bottom: 15px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 40;
}

.glide__bullet {
  width: 35px;
  height: 5px;
  margin: 0 5px;

  border: none;
}

.glide__bullet {
  background-color: #2a2a2a;
}

.glide__bullet.active {
  background-color: darkorange;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  opacity: 1;
}

.fadeInUpSmall {
  animation-name: fadeInUpSmall;
  transform-origin: 50% 100%;
}

.fadeInRightSmall {
  animation-name: fadeInRightSmall;
}

@keyframes fadeInRightSmall {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInLeftSmall {
  animation-name: fadeInLeftSmall;
}

@keyframes fadeInLeftSmall {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInUpSmall {
  animation-name: fadeInUpSmall;
  transform-origin: 50% 100%;
}

@keyframes fadeInUpSmall {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slideInUpSmall {
  animation-name: slideInUpSmall;
  transform-origin: 50% 100%;
}

@keyframes slideInUpSmall {
  0% {
    transform: translateY(60px);
  }

  100% {
    transform: translateY(0);
  }
}

h1,
.heading-1 {
  font-size: 32px;
  line-height: 1.2;
}

@media (min-width: 768px) {
  h1,
  .heading-1 {
    font-size: 56px;
    line-height: 1.4;
  }
}

@media (min-width: 992px) {
  h1,
  .heading-1 {
    font-size: 62px;
    line-height: 1.2;
  }
}

@media (min-width: 1200px) {
  h1,
  .heading-1 {
    font-size: 70px;
  }
}

h2,
.heading-2 {
  font-size: 26px;
  line-height: 1.3;
  letter-spacing: 0;
}

@media (min-width: 768px) {
  h2,
  .heading-2 {
    font-size: 38px;
    line-height: 1.3;
  }
}

@media (min-width: 992px) {
  h2,
  .heading-2 {
    font-size: 48px;
    line-height: 1.16667;
  }
}

</style>
