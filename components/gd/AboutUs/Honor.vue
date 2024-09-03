<script setup lang="ts">

</script>

<template>
  <div class="m-auto border-solid bg-[#F8F7F7]" style="width: 70vw;z-index: 52;margin-top: 45px;">
    <div class="w-full flex justify-between gap-8">
      <div style="padding: 50px 50px 40px;" class="flex-[4]">
        <h2 class="mb-[46px] font-size-[38px] color-[#1B80E3]">
          资质荣誉
        </h2>
        <div class="grid-imgs">
          <img class="img" src="/gd/honor/HighTechnologyEnterprises.png" alt="" style="grid-column-start: 1;grid-column-end:3;">
          <img class="img" src="/gd/honor/CCI08292024_0002_wm.jpg" alt="">
          <img class="img" src="/gd/honor/20240829171247.jpg" alt="">
          <img class="img" src="/gd/honor/CCI08292024_0003_wm.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-imgs {
  display: grid;
  gap: 50px;
  /*grid-template-columns: calc(((100% - 100px) / 3) * 2) calc((100% - 100px) / 3) calc((100% - 100px) / 3);*/
  /*grid-template-rows: calc(33.33% - 50px) calc(33.33% - 50px) calc(33.33% - 50px);*/
  grid-template-columns: repeat(3, calc((100% - 100px) / 3));
  /*grid-template-columns: repeat(3, calc((100% - 100px) / 3));
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'a a b'
    'c d e';*/
  /*grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a a b'
                       'a a c'
                       'd e f';*/
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
