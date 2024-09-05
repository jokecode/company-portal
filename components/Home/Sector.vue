<script setup lang="ts">

</script>

<template>
  <section class="section">
    <div class="container fadeInUpSmall" data-wow-offset="150">
      <!-- Owl Carousel -->
      <div class="owl-carousel" data-items="1" data-md-items="2" data-lg-items="3" data-xl-items="4" data-stage-padding="15" data-loop="true" data-margin="30" data-owl='{"dots":true,"nav":true}'>
        <div class="item">
          <a class="thumb-corporate" href="production.html">
            <div class="thumb-corporate__inner">
              <img src="/images/home/production-preview-1-370x303.jpg" alt="" width="370" height="303" />
            </div>
            <p class="thumb-corporate__title">Building Technologies</p>
          </a>
        </div>
        <div class="item">
          <a class="thumb-corporate" href="production.html">
            <div class="thumb-corporate__inner">
              <img src="/images/home/production-preview-2-370x303.jpg" alt="" width="370" height="303" />
            </div>
            <p class="thumb-corporate__title">Power and Energy</p>
          </a>
        </div>
        <div class="item">
          <a class="thumb-corporate" href="production.html">
            <div class="thumb-corporate__inner">
              <img src="/images/home/production-preview-3-370x303.jpg" alt="" width="370" height="303" />
            </div>
            <p class="thumb-corporate__title">Heavy Industry</p>
          </a>
        </div>
        <div class="item">
          <a class="thumb-corporate" href="production.html">
            <div class="thumb-corporate__inner">
              <img src="/images/home/production-preview-4-370x303.jpg" alt="" width="370" height="303" />
            </div>
            <p class="thumb-corporate__title">Healthcare Technology</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  position: relative;
  top: 56px;
  /*margin: 90px 100px;*/
  margin: 90px 0;
}
.owl-carousel {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  /*gap: 35px;*/
}

.thumb-corporate__title {
  font-size: 24px;
}
.thumb-corporate__inner {
  position: relative;
  padding: 0 15px 0 35px;
}

.thumb-corporate__inner::before {
  content: '';
  position: absolute;
  top: 51px;
  left: 17px;
  bottom: -30px;
  width: 65px;
  border: 3px solid #f5a63f;
  border-top: 0;
  border-right: 0;
  transition: 0.33s ease-out;
}

.thumb-corporate:hover .thumb-corporate__inner::before {
  top: 0;
}

.thumb-corporate__title {
  padding-left: 95px;
  margin-top: 12px;
}
.thumb-corporate:hover,
.thumb-corporate:focus {
  color: #f5a63f;
  text-decoration: none;
  outline: 0;
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
</style>
