<script setup lang="ts">

</script>

<template>
  <!-- Our Projects -->
  <section class="section">
    <div class="container-fullwidth">
      <h2>项目</h2>
      <!-- Owl Carousel -->
      <div class="owl-carousel fadeIn">
        <div class="thumb-janez">
          <figure class="thumb-janez__image-wrap">
            <img src="/gd/home/project-1-481x383.jpg" alt="" width="481" height="383" />
          </figure>
          <div class="thumb-janez__content bg-gray-dark">
            <div class="thumb-janez__content-inner">
              <h5><a href="#">金属加工</a></h5>
              <p>我们经常为客户提供可靠的金属加工解决方案，包括定制产品。</p>
              <!-- <a class="button" href="#">read more</a> -->
            </div>
          </div>
        </div>
        <div class="thumb-janez">
          <figure class="thumb-janez__image-wrap">
            <img src="/gd/home/project-2-481x383.jpg" alt="" width="481" height="383" />
          </figure>
          <div class="thumb-janez__content bg-gray-dark">
            <div class="thumb-janez__content-inner">
              <h5><a href="#">建筑</a></h5>
              <p>最近的这个项目标志着我们与建筑行业合作的十周年。</p>
              <!-- <a class="button" href="#">read more</a> -->
            </div>
          </div>
        </div>
        <div class="thumb-janez">
          <figure class="thumb-janez__image-wrap">
            <img src="/gd/home/project-3-481x383.jpg" alt="" width="481" height="383"/>
          </figure>
          <div class="thumb-janez__content bg-gray-dark">
            <div class="thumb-janez__content-inner">
              <h5><a href="#">运输</a></h5>
              <p>运输公司使用我们的解决方案来提供不中断的集装箱运输。</p>
              <!-- <a class="button" href="#">read more</a> -->
            </div>
          </div>
        </div>
        <div class="thumb-janez">
          <figure class="thumb-janez__image-wrap">
            <img src="/gd/home/project-4-480x383.jpg" alt="" width="480" height="383"/>
          </figure>
          <div class="thumb-janez__content bg-gray-dark">
            <div class="thumb-janez__content-inner">
              <h5><a href="#">定制解决方案</a></h5>
              <p>我们为全球客户提供定制的重工业产品和服务。</p>
              <!-- <a class="button" href="#">read more</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 90px 0;
  text-align: center;
}
.container-fullwidth h2 {
  font-size: 48px;
  line-height: 1.16667;
  font-weight: 500;
  color: #151515;
  margin-bottom: 50px;
}
.owl-carousel {
  /*transform: translate3d(-1886px, 0px, 0px);
  transition: all;
  width: 5658px;*/
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;
  overflow: hidden;
}
.thumb-janez {
  display: flex;
  position: relative;
  width: 100%;
}
.thumb-janez:hover {
  .thumb-janez__content {
    transform: rotateY(0deg);
    transition: 0.4s;
  }
  figure.thumb-janez__image-wrap {
    transform: translateX(120px);
    transition: 0.4s;
  }
}
.thumb-janez a {
  color: white;
  font-size: 18px;
  font-weight: 400;
}
.bg-gray-dark {
  background-color: #2a2a2a;
}
.thumb-janez__content-inner {
  text-align: left;
  color: #9b9b9b;
  padding: 25px;
  p {
    font-size: 12px;
  }
}
.thumb-janez__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 380px;
  transform-origin: 0 0;
  transform: rotateY(-90deg);
  width: 50%;
  min-width: 240px;
  transition: 0.4s;
}
.thumb-janez__image-wrap > img {
  transition: transform 0.4s;
  min-height: 100%;
  min-width: 100%;
  max-width: none;
  flex-shrink: 0;
}
.thumb-janez__image-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
/**
  鼠标移开恢复特效
 */
.thumb-janez .thumb-janez__image-wrap {
  transition: all 0.4s ease 0s;
}

.thumb-janez .thumb-janez__content {
  transition: all 0.4s ease 0s;
}

</style>
