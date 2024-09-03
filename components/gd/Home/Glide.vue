<script setup lang="ts">
import Glide from '@glidejs/glide'

import glide1 from '/gd/home/slider-1-slide-1-1920x749.jpg'
import glide2 from '/gd/home/slider-1-slide-2-1920x749.jpg'
import glide3 from '/gd/home/slider-1-slide-3-1920x749.jpg'

// vue组件实例对象
const glide = ref('')
// 当前glide轮播图序号
const nowActive = ref(0)
// glide配置参数
const glideConfig = ref({
  startAt: 0, // 一开始显示哪一张幻灯片
  autoplay: 4000, // 自动播放时间间隔
  hoverpause: false, // 鼠标停留幻灯片上时，停止自动播放
})
// glide-数据列表
const glideList = ref([
  {
    h1: '科技推动人类进步，研发引领实业发展。',
    h3: '自力更生是中华民族自立于世界民族之林的奋斗基点，自主创新是我们攀登世界科技高峰的必由之路。',
    src: glide1,
    type: 'img',
  },
  {
    h1: '科技推动人类进步，研发引领实业发展。',
    h3: '自力更生是中华民族自立于世界民族之林的奋斗基点，自主创新是我们攀登世界科技高峰的必由之路。',
    src: glide2,
    type: 'img',
  },
  {
    h1: '科技推动人类进步，研发引领实业发展。',
    h3: '自力更生是中华民族自立于世界民族之林的奋斗基点，自主创新是我们攀登世界科技高峰的必由之路。',
    src: glide3,
    type: 'img',
  },
])

/**
 * 初始化
 */
function init() {
  initGlide()
}

/**
 * 初始化glide
 */
function initGlide() {
  glide.value = new Glide('.glide', glideConfig.value)

  // 及时更新底部bullet的选中状态
  glide.value.on('move', () => {
    nowActive.value = glide.value.index
  })

  glide.value.mount()
}

onMounted(() => {
  init()
})
</script>

<template>
  <body>
    <!-- glide轮播图 -->
    <div class="glide">

      <div class="glide__track" data-glide-el="track">
        <!-- 轮播图集合 -->
        <div class="glide__slides">
          <!-- 轮播图item -->
          <div :key="index" class="glide__slide" v-for="(item, index) in glideList" style="height: 800px;">
            <!-- 中心动态展示文字及按钮 -->
            <div class="slide-caption">
              <h1>{{ item.h1 }}</h1>
              <h3>{{ item.h3 }}</h3>
              <button class="explore-btn">探索更多</button>
            </div>
            <!-- 虚化背景 -->
            <div class="backdrop"></div>
            <!-- 图片 -->
            <img :src="item.src" alt="" />
          </div>
        </div>
      </div>

      <!-- 左右切换控件 -->
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">{{ '<' }}</button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">{{ '>' }}</button>
      </div>

      <!-- 底部切换控件 -->
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" :class="{ active: nowActive === index }" :data-glide-dir="'=' + index" v-for="(item, index) in glideList"></button>
      </div>
    </div>
  </body>
</template>

<style scoped>
@import '@glidejs/glide/dist/css/glide.core.min.css';

/* 轮播图样式 */
.glide {
  position: relative;
  z-index: 50;
}

.glide__slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.glide__slide img {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  object-fit: cover; /* 等比例缩放 */
}

/* 轮播图背景虚化遮罩 */
.backdrop {
  background: rgba(42, 42, 42, 0.69);
  z-index: 60;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 0.3;
}

.glide__arrows {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 40;
}

.glide__arrow {
  width: 40px;
  height: 40px;
  margin: 0px 20px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px white;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.glide__arrow:hover {
  background: rgba(255, 255, 255, 0.5);
}

.glide__arrow:active {
  background: rgba(255, 255, 255, 0.7);
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

/* 这部分是内部其他组件的样式 */
.slide-caption {
  position: absolute;
  z-index: 70;
  color: #e7e9ec;
  text-align: center;
  max-width: 60vw;

  pointer-events: auto;
}

.slide-caption > * {
  opacity: 0;
}

.slide-caption h1 {
  font-size: 54px;
  font-weight: 600;
}

.slide-caption h3 {
  font-size: 24px;
  margin: 48px 0;
}

.explore-btn {
  padding: 14px 32px;
  background-color: #fb6354;
  border: 0;
  border-radius: 4px;
  color: #e7e9ec;
  font-size: 18px;
  cursor: pointer;
  outline: none;
}
</style>
