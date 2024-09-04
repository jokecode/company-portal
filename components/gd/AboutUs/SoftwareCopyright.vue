<script setup lang="ts">
import {ElImage} from "element-plus";

const images = ref([
  {
    url: '/gd/software-copyright-wm/2024-09-03_1639.png',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0003.jpg',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0004.jpg',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0005.jpg',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0006.jpg',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0007.jpg',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0008.jpg',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0009.jpg',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0010.jpg',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0011.jpg',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0012.jpg',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0013.jpg',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0014.jpg',
  },
  {
    url: '/gd/software-copyright-wm/CCI20190823_0015.jpg',
  },
])
</script>

<template>
  <div class="m-auto border-solid bg-[#F8F7F7]" style="width: 70vw;z-index: 52;margin-top: 45px;">
    <div class="w-full flex justify-between gap-8">
      <div style="padding: 50px 50px 40px;" class="flex-[4]">
        <h2 class="mb-[46px] font-size-[38px] color-[#1B80E3]">
          专利/软著
        </h2>
        <div class="grid-imgs">
          <!-- <img v-for="(item, index) in images" :key="index" :src="item.url" class="img" alt=""> -->
          <el-image
              v-for="(item, index) in images"
              :key="index"
              class="img"
              :style="item.style"
              :src="item.url"
              :zoom-rate="1.2"
              :max-scale="7"
              :min-scale="0.2"
              :preview-src-list="images.map((ele) => ele.url)"
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
.grid-imgs {
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(3, calc((100% - 100px) / 3));
  /*grid-template-rows: repeat(2, 1fr);*/
  /*grid-template-columns: calc((100% - 100px) / 3) calc((100% - 100px) / 3) calc((100% - 100px) / 3);*/
  /*grid-template-rows: calc(33.33% - 50px) calc(33.33% - 50px) calc(33.33% - 50px);*/
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
