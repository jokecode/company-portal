<script setup lang="ts">
import Glide from '@glidejs/glide'

const glideList = ref([
  {
    src: '/gd/home/brand-1-156x45_inverse.png',
    w: '156',
    h: '45',
    href: '#',
  },
  {
    src: '/gd/home/brand-2-126x69_inverse.png',
    w: '126',
    h: '69',
    href: '#',
  },
  {
    src: '/gd/home/brand-3-150x36_inverse.png',
    w: '150',
    h: '36',
    href: '#',
  },
  {
    src: '/gd/home/brand-4-130x45_inverse.png',
    w: '130',
    h: '45',
    href: '#',
  },
  {
    src: '/gd/home/brand-4-130x45_inverse.png',
    w: '130',
    h: '45',
    href: '#',
  },
])

const glide = new Glide('#owl-carousel', {
  type: 'carousel',
  startAt: 0,
  perView: 4,
  focusAt: 'center',
  gap: 20,
  autoplay: 2000,
  hoverpause: true,
  bound: false,
  breakpoints: {
    800: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  },
})

onMounted(() => {
  glide.mount()
})
</script>

<template>
  <!-- Brands -->
  <section class="section">
    <div id="owl-carousel" class="glide">
      <!-- ---------------  Slider  ---------------- -->
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="(item, index) in glideList" :key="index" class="glide__slide">
            <img :src="item.src" alt="" style="border-radius: 0.4em;" :width="item.w" :height="item.h" />
          </li>
        </ul>
      </div>
      <!-- ---------------  Controls  ---------------- -->
      <div class="glide__arrows" data-glide-el="controls">
        <div class="control-btn" data-glide-dir="<">
          <div class="glide__arrow i-carbon-chevron-left" />
        </div>
        <div class="control-btn" data-glide-dir="<">
          <div class="glide__arrow i-carbon-chevron-right" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  background-image: url('/gd/home/parallax-1.jpg');
  /*width: 1920px;*/
  background-size: cover;
  background-attachment: fixed;
  background-color: #2a2a2a;
  position: relative;
  height: 200px;
}
.glide {
  display: flex;
  height: 100%;
  align-items: center;
  position: relative;
}
.glide__track {
  z-index: 10;
  width: calc(100% - 600px);
  overflow: hidden;
  margin: 0 auto;
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
  align-items: center;
}
.glide .glide__slide {
  flex: none;
  border-radius: 0.4em;
  color: #263238;
  text-align: center;
  list-style-type: none;
  height: 100% !important;
}
.glide__arrows {
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  position: absolute;
  align-items: center;
  width: 100%;
  z-index: 9;
}
.control-btn {
  padding: 1em 0.5em;
  background: #00000045;
}
.control-btn:hover {
  cursor: pointer;
  background: #f5a63f;
  .glide__arrow {
    color: #fff !important;
  }
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
  color: #fff !important;
}
.glide__arrow:focus {
  outline: none;
}
.glide__arrow:active {
  transform: scale(0.88);
}
</style>
