<script setup>
import { onMounted } from 'vue'
import Glide from '@glidejs/glide'
import anime from 'animejs'

const route = useRoute()

const queryClassName = ref(`slide-caption${route.path.replaceAll('/', '_')}`)

onMounted(() => {
  const glide2 = new Glide(`#${route.path.replaceAll('/', '_')}`, {
    type: 'carousel',
    startAt: 0,
    autoplay: 3500,
  })

  // const captionsEL = document.querySelectorAll('.slide-caption')
  const captionsEL = document.querySelectorAll(`.${queryClassName.value}`)

  glide2.on(['mount.after', 'run.after'], () => {
    const caption = captionsEL[glide2.index]
    anime({
      targets: caption.children,
      opacity: [0, 1],
      duration: 400,
      easing: 'spring(1, 80, 10, 0)',
      delay: anime.stagger(400, { start: 300 }),
      translateY: [anime.stagger([40, 10]), 0],
    })
  })
  glide2.on('run.before', () => {
    document.querySelectorAll(`.${queryClassName.value} > *`).forEach((el) => {
      el.style.opacity = 0
    })
  })
  glide2.mount()
})
</script>

<template>
  <div :id="route.path.replaceAll('/', '_')" class="glide">
    <div class="glide__track" data-glide-el="track" style="height: 500px;">
      <div class="glide__slides">
        <!-- 轮播图一 -->
        <div class="glide__slide" style="height: 500px;">
          <div class="slide-caption left" :class="queryClassName">
            <h1>成都工鼎科技有限公司</h1>
            <!-- <h3>啦啦啦啦</h3> -->
            <!-- <button class="explore-btn">探索更多</button> -->
          </div>
          <div class="backdrop" />
          <img src="/images/glide-slide/people-in-couch-1024248.webp" alt="">
        </div>
        <div class="glide__slide" style="height: 500px;">
          <div class="slide-caption left" :class="queryClassName">
            <h1>成都工鼎科技有限公司</h1>
            <!-- <h3>啦啦啦啦1</h3>
            <button class="explore-btn">探索更多</button> -->
          </div>
          <div class="backdrop" />
          <video src="/images/glide-slide/working-man.mp4" muted autoplay loop />
        </div>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          <i class="fa fa-angle-left" />
          <!-- <img src="/images/fa-icon/angle-left.svg" alt=""> -->
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          <i class="fa fa-angle-right" />
        </button>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0" />
          <button class="glide__bullet" data-glide-dir="=1" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 轮播图 */
.glide {
  position: relative;
  /*top: -80px;*/
  z-index: 50;
}

.glide__slide img,
.glide__slide video {
  width: 100vw;
  height: 100vh;
  /* 自动等比例缩放 */
  object-fit: cover;
}

.slide-caption {
  position: absolute;
  z-index: 70;
  color: var(--text-color-lightest);
  text-align: center;
  max-width: 60vw;
}

.glide__slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-caption h1 {
  font-size: 54px;
  font-weight: 600;
}

.slide-caption h3 {
  font-size: 24px;
  margin: 48px 0;
}

.slide-caption.left {
  max-width: 80vw;
  text-align: left;
}

.slide-caption > * {
  opacity: 0;
}

.backdrop {
  background: var(--backdrop-color);
  z-index: 60;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0.5;
}

.explore-btn {
  padding: 14px 32px;
  background-color: var(--primary-color);
  border: 0;
  border-radius: 4px;
  color: var(--text-color-lightest);
  font-size: 18px;
  cursor: pointer;
  outline: none;
}
</style>
