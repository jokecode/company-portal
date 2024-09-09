<script setup lang="ts">
import { ElImage } from 'element-plus'

const images = ref([
  {
    src: '/images/honor/HighTechnologyEnterprises.webp',
    style: {
      'grid-column-start': 1,
      'grid-column-end': 3,
    },
  },
  {
    src: '/images/honor/CCI08292024_0002_wm.webp',
    style: {},
  },
  {
    src: '/images/honor/20240829171247.webp',
    style: {},
  },
  {
    src: '/images/honor/CCI08292024_0003_wm.webp',
    style: {},
  },
])
</script>

<template>
  <div class="m-auto border-solid bg-[#F8F7F7]" style="width: 70vw;z-index: 52;margin-top: 45px;">
    <div class="w-full flex justify-between gap-8">
      <div style="padding: 50px 50px 40px;" class="flex-[4]">
        <h2 class="mb-[46px] font-size-[38px] color-[#1B80E3]">
          资质荣誉
        </h2>
        <div class="grid-images">
          <ElImage
            v-for="(item, index) in images"
            :key="index"
            class="img"
            :style="item.style"
            :src="item.src"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="images.map((ele) => ele.src)"
            :initial-index="index"
            fit="cover"
            :preview-teleported="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-images {
  display: grid;
  gap: 50px;
  /*grid-template-columns: calc(((100% - 100px) / 3) * 2) calc((100% - 100px) / 3) calc((100% - 100px) / 3);*/
  grid-template-columns: repeat(3, calc((100% - 100px) / 3));
}
.img {
  border-radius: 10px;
  border: 3px solid sandybrown;
}
.img:hover {
  transform: translateY(-20px) scale(1.05);
  box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);
}
</style>
