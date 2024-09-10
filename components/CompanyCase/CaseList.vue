<script setup lang="ts">
const images = ref([
  {
    url: '/images/case/case1.webp',
    title: '基于西门子芯片与软件的PN解决方案',
    desc: '标准西门子PN解决方案代理\n支持RT/IRT，ProfiDrive/ProfiSafe等多种行规\n主从站开发，交钥匙工程，OEM生产\n标准产品和定制产品',
  },
  {
    url: '/images/case/case2.webp',
    title: '各行业定制',
    desc: '提供交钥匙工程\nODM到OEM的一条龙服务\n从研发、生产、品管到售后技术支持\n前西门子FA研发技术主管带队，提供西门子产品品质',
  },
  {
    url: '/images/case/case3.webp',
    title: 'PN定制产品在电力行业的应用',
    desc: '支持IRT等实时通信\n满足最苛刻的高端客户需求\n提供ET200SP HF的功能\n不受货期、价格波动影响',
  },
  {
    url: '/images/case/case4.webp',
    title: 'PN定制产品在半导体行业的应用',
    desc: '',
  },
  {
    url: '/images/case/case5.webp',
    title: 'PN定制化产品在汽车行业应用',
    desc: '',
  },
  {
    url: '/images/case/case6.webp',
    title: '进口替代，大幅度提高利润率深度绑定客户',
    desc: '',
  },
  {
    url: '/images/case/edge1.webp',
    title: '边缘解决方案-温箱集中监控',
    desc: '',
  },
  {
    url: '/images/case/edge2.webp',
    title: '边缘解决方案-电表监控',
    desc: '',
  },
])
</script>

<template>
  <div
    style="
    width: 70vw;
    margin: 0 auto;"
  >
    <section class="company-activities">
      <h2 class="title1">
        案例展示
      </h2>
      <p class="intro">
        <!-- product display -->
      </p>

      <div class="activities">
        <div v-for="(item, index) in images" :key="index" class="activity">
          <div class="act-image-wrapper">
            <img :src="item.url" alt="">
          </div>
          <div class="meta">
            <!-- <p class="data-published">
              <i class="far fa-calendar"/>
              2020年4月22日
            </p>
            <p class="comments">
              <i class="far fa-comments"/>
              <span>阅读(1536)</span>
            </p> -->
          </div>
          <h2 class="act-title">
            {{ item.title }}
          </h2>
          <article style="
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;"
          >
            {{ item.desc }}
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  /* 二维 */
  display: grid;
  /* 每个列的对齐方式 */
  justify-items: center;
  /*max-width: 1280px;*/
  max-width: 1344px;
  padding: 0 80px;
}

.section-bg {
  position: relative;
}

.section-bg::before {
  content: '';
  display: block;
  position: absolute;
  background-color: #f9fbfb;
  width: 100vw;
  height: 100%;
  z-index: -1;
}

.title1 {
  font-size: 34px;
  color: var(--text-color-darker);
}

.title1::after {
  content: '';
  display: block;
  width: 80%;
  height: 4px;
  background-color: var(--primary-color);
  margin-top: 14px;
  transform: translateX(10%);
}

.intro {
  margin: 28px 0 60px 0;
  /* text-indent: 2em; */
  font-size: 18px;
  color: var(--text-color-dark-gray);
}

.company-activities {
  margin-top: 80px;
}

.activities {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 45px;
}

.activity {
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: 0.4s;
  margin-bottom: 56px;
}

.act-image-wrapper {
  /*height: 255px;*/
  overflow: hidden;
  /*margin: -24px;*/
  margin-bottom: 0;
}

.act-image-wrapper img {
  /*min-height: 230px;*/
  object-fit: cover;
  height: 100%;
  margin: 0 auto;
}

.activity .meta {
  margin-top: 20px;
  margin-bottom: 12px;
  color: var(--text-color-light-gray);
  font-size: 12px;
  display: flex;
}

.activity .meta > p:last-child {
  margin-left: 36px;
}

.act-title {
  color: var(--text-color-dark);
  font-size: 18px;
  margin-bottom: 16px;
}

.activity article {
  color: var(--text-color-gray);
  letter-spacing: 0.54px;
  line-height: 24px;
}

.read-more-btn {
  border: 0;
  color: white;
  background-color: var(--primary-color);
  padding: 6px 14px;
  margin-top: 24px;
  border-radius: 4px;
}

.activity:hover {
  transform: translateY(-20px) scale(1.05);
  box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);
}
</style>
