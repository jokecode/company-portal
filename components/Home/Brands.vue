<script setup>
import Glide from '@glidejs/glide'

const glideList = ref([
  {
    src: '/images/partner-logo/西门子.webp',
    w: 768,
    h: 256,
    href: '#',
  },
  {
    src: '/images/partner-logo/施耐德电气.webp',
    w: 256,
    h: 256,
    href: '#',
    scale: 0.7,
  },
  // {
  //   src: '/images/partner-logo/北方华创.webp',
  //   w: '133',
  //   h: '51',
  //   href: '#',
  //   scale: 1.3,
  // },
  // {
  //   src: '/images/partner-logo/北方华创-2.webp',
  //   w: '133',
  //   h: '51',
  //   href: '#',
  //   scale: 1.3,
  // },
  {
    src: '/images/partner-logo/北方华创-6.webp',
    w: '133',
    h: '51',
    href: '#',
    scale: 1.3,
  },
  {
    src: '/images/partner-logo/东方电气.webp',
    w: '256',
    h: '256',
    href: '#',
    scale: 0.45,
  },
  // {
  //   src: '/images/partner-logo/兰州理工大学.webp',
  //   w: '820',
  //   h: '228',
  //   href: '#',
  //   scale: 1.1,
  // },
  {
    src: '/images/partner-logo/兰州理工大学-2.webp',
    w: '1794',
    h: '468',
    href: '#',
    scale: 1,
  },
  // {
  //   src: '/images/partner-logo/时代集团.webp',
  //   w: '276',
  //   h: '105',
  //   href: '#',
  //   scale: 0.9,
  // },
  {
    src: '/images/partner-logo/时代集团-white.webp',
    w: '276',
    h: '105',
    href: '#',
    scale: 0.8,
  },
  // {
  //   src: '/images/partner-logo/国家电网.webp',
  //   w: '455',
  //   h: '256',
  //   href: '#',
  //   scale: 0.6,
  // },
  {
    src: '/images/partner-logo/国家电网-white.webp',
    w: '771',
    h: '256',
    href: '#',
    scale: 0.8,
  },
  {
    src: '/images/partner-logo/紫金山实验室.webp',
    w: '256',
    h: '256',
    href: '#',
  },
])

const glide = new Glide('#owl-carousel', {
  type: 'carousel',
  startAt: 0,
  perView: 4,
  focusAt: 'center',
  gap: 20,
  autoplay: 3000,
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
            <!-- style="border-radius: 0.4em;" -->
            <img :src="item.src" :width="item.w" :height="item.h" alt="" :style="{ transform: `scale(${item.scale || 1})` }" />
          </li>
        </ul>
      </div>
      <!-- ---------------  Controls  ---------------- -->
      <div class="glide__arrows" data-glide-el="controls">
        <div class="control-btn" data-glide-dir="<">
          <div class="glide__arrow i-carbon-chevron-left" />
        </div>
        <div class="control-btn" data-glide-dir=">">
          <div class="glide__arrow i-carbon-chevron-right" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  background-image: url('/images/home/parallax-1.jpg');
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
  justify-content: center;
}
.glide .glide__slide {
  border-radius: 0.4em;
  /*flex: none;
  color: #263238;
  text-align: center;
  list-style-type: none;*/
  height: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
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
