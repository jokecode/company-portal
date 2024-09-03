<script setup lang="ts">

</script>

<template>
  <!-- Experience -->
  <section class="section bg-[#F2F3F8]">
    <div class="container">
      <div class="row">
        <div class="col1 fadeInRight">
          <div class="block-wrap-1">
            <h2>
              <span>经验</span>
              <span class="object-decorated" style="max-width: 125px;">
                <span class="object-decorated__divider"></span>
                <span class="heading-5">自 1999 </span>
              </span>
            </h2>
            <p>自1999年以来，我们公司一直是北美加工行业专业服务的领先提供商。我们注重工作中的每一个细节。</p>
          </div>
        </div>
        <div class="col2 fadeInLeft">
          <div class="grid-layout-2x2">
            <div class="grid-item">
              <!-- Box counter -->
              <article class="box-counter-modern">
                <div class="box-counter-modern__wrap">
                  <div class="counter">17</div>
                </div>
                <p class="box-counter-modern__title">从业年数</p>
              </article>
            </div>
            <div class="grid-item">
              <!-- Box counter -->
              <article class="box-counter-modern">
                <div class="box-counter-modern__wrap">
                  <div class="counter">35</div>
                </div>
                <p class="box-counter-modern__title">全球合作伙伴</p>
              </article>
            </div>
            <div class="grid-item">
              <!-- Box counter -->
              <article class="box-counter-modern">
                <div class="box-counter-modern__wrap">
                  <span>#</span>
                  <span class="big">01</span>
                </div>
                <p class="box-counter-modern__title">欧洲供应商</p>
              </article>
            </div>
            <div class="grid-item">
              <!-- Box counter -->
              <article class="box-counter-modern">
                <div class="box-counter-modern__wrap">
                  <div class="counter">264</div>
                </div>
                <p class="box-counter-modern__title">成功的项目</p>
              </article>
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
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.row {
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
}
.grid-layout-2x2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.grid-layout-2x2 .grid-item {
  padding: 46px;
}
.box-counter-modern {
  text-align: center;
  color: #151515;
}
.box-counter-modern__wrap .counter,
.box-counter-modern__wrap .big {
  font-size: 70px;
  font-weight: 300;
}
.box-counter-modern__wrap span {
  font-size: 24px;
  position: relative;
  vertical-align: top;
  //font-size: 0;
  //line-height: 0;
}
.box-counter-modern__wrap {
  top: 20px;
}

.block-wrap-1 h2 {
  font-size: 48px;
  line-height: 1.16667;
  display: flex;
  align-items: center;
  gap: 10px;
}
.block-wrap-1 p {
  font-family: 'Roboto Mono', Monaco, Consolas, 'Courier New', monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  letter-spacing: 0.05em;
  color: #9b9b9b;
  margin-top: 32px;
}

.object-decorated {
  position: relative;
  margin-left: -5px;
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
}

.object-decorated__divider {
  height: 4px;
  width: 36px;
  background: #f5a63f;
  flex-shrink: 0;
}

.heading-5 {
  font-size: 18px;
  line-height: 1.33333;
  font-weight: 400;
  letter-spacing: 0.02em;
}
.col1 {
  margin-bottom: 50px;
  width: 42%;
}
/**
* FadeInRight Keyframes Animation
*/
@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}
</style>