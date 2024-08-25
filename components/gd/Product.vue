<script setup lang="ts">
const imgs = ref([
  {
    // 图片地址
    url: '/gd/product/a1.jpg',
    // 产品概述
    // 技术参数
  },
  {
    url: '/gd/product/a2.jpg',
  },
  {
    url: '/gd/product/a3.jpg',
  },
  {
    url: '/gd/product/a4.jpg',
  },
  {
    url: '/gd/product/a5.jpg',
  },
  {
    url: '/gd/product/a6.jpg',
  },
  {
    url: '/gd/product/a7.jpg',
  },
  {
    url: '/gd/product/DSC08113.jpg',
  },
  {
    url: '/gd/product/DSC08114.jpg',
  },
  {
    url: '/gd/product/DSC08115.jpg',
  },
  {
    url: '/gd/product/DSC08116.jpg',
  },
  {
    url: '/gd/product/DSC08117.jpg',
  },
  {
    url: '/gd/product/DSC08118.jpg',
  },
])
</script>

<template>
  <div
    style="
    width: 70vw;
    margin: 0 auto;"
  >
    <section id="company-activities" class="company-activities">
      <h2 class="title1">
        产品展示
      </h2>
      <p class="intro">
        <!-- product display -->
      </p>
      <div class="activities">
        <!-- <div class="activity">
          <div class="act-image-wrapper">
            <img src="/gd/product/1.png" alt="">
          </div>
          &lt;!&ndash; <div class="meta"> &ndash;&gt;
          &lt;!&ndash;  <p class="data-published"> &ndash;&gt;
          &lt;!&ndash;    <i class="far fa-calendar" /> &ndash;&gt;
          &lt;!&ndash;    2020年4月22日 &ndash;&gt;
          &lt;!&ndash;  </p> &ndash;&gt;
          &lt;!&ndash;  <p class="comments"> &ndash;&gt;
          &lt;!&ndash;    <i class="far fa-comments" /> &ndash;&gt;
          &lt;!&ndash;    33 &ndash;&gt;
          &lt;!&ndash;    <span>条评论</span> &ndash;&gt;
          &lt;!&ndash;  </p> &ndash;&gt;
          &lt;!&ndash; </div> &ndash;&gt;
          &lt;!&ndash; <h2 class="act-title">提供互联网接入的ISP公司</h2> &ndash;&gt;
          &lt;!&ndash; <article> &ndash;&gt;
          &lt;!&ndash;  ISP证，全称为互联网接入服务业务(ISP)，是第二类增值电信业务。根据国务院相关规定，从事增值电信业务，就需要办理相应的增值电信业务许可证，增值电信业务经营许可证是按照国务院《中华人民共和国电信条例》，由工信部、各省市通信管理局对从事增值电信业务的企业颁发的从业证明，否则就是无证经营。被查需要负法律责任。 &ndash;&gt;
          &lt;!&ndash; </article> &ndash;&gt;
          &lt;!&ndash; <button class="read-more-btn">阅读更多</button> &ndash;&gt;
        </div>
        <div class="activity">
          <div class="act-image-wrapper">
            <img src="/gd/product/2.jpg" alt="">
          </div>
          &lt;!&ndash; <div class="meta"> &ndash;&gt;
          &lt;!&ndash;  <p class="data-published"> &ndash;&gt;
          &lt;!&ndash;    <i class="far fa-calendar" /> &ndash;&gt;
          &lt;!&ndash;    2020年4月22日 &ndash;&gt;
          &lt;!&ndash;  </p> &ndash;&gt;
          &lt;!&ndash;  <p class="comments"> &ndash;&gt;
          &lt;!&ndash;    <i class="far fa-comments" /> &ndash;&gt;
          &lt;!&ndash;    33 &ndash;&gt;
          &lt;!&ndash;    <span>条评论</span> &ndash;&gt;
          &lt;!&ndash;  </p> &ndash;&gt;
          &lt;!&ndash; </div> &ndash;&gt;
          &lt;!&ndash; <h2 class="act-title"> &ndash;&gt;
          &lt;!&ndash;  提供互联网接入的ISP公司 &ndash;&gt;
          &lt;!&ndash; </h2> &ndash;&gt;
          &lt;!&ndash; <article> &ndash;&gt;
          &lt;!&ndash;  ISP证，全称为互联网接入服务业务(ISP)，是第二类增值电信业务。根据国务院相关规定，从事增值电信业务，就需要办理相应的增值电信业务许可证，增值电信业务经营许可证是按照国务院《中华人民共和国电信条例》，由工信部、各省市通信管理局对从事增值电信业务的企业颁发的从业证明，否则就是无证经营。被查需要负法律责任。 &ndash;&gt;
          &lt;!&ndash; </article> &ndash;&gt;
          &lt;!&ndash; <button class="read-more-btn"> &ndash;&gt;
          &lt;!&ndash;  阅读更多 &ndash;&gt;
          &lt;!&ndash; </button> &ndash;&gt;
        </div>
        <div class="activity">
          <div class="act-image-wrapper">
            <img src="/gd/product/3.png" alt="">
          </div>
          &lt;!&ndash; <div class="meta"> &ndash;&gt;
          &lt;!&ndash;  <p class="data-published"> &ndash;&gt;
          &lt;!&ndash;    <i class="far fa-calendar" /> &ndash;&gt;
          &lt;!&ndash;    2020年4月22日 &ndash;&gt;
          &lt;!&ndash;  </p> &ndash;&gt;
          &lt;!&ndash;  <p class="comments"> &ndash;&gt;
          &lt;!&ndash;    <i class="far fa-comments" /> &ndash;&gt;
          &lt;!&ndash;    33 &ndash;&gt;
          &lt;!&ndash;    <span>条评论</span> &ndash;&gt;
          &lt;!&ndash;  </p> &ndash;&gt;
          &lt;!&ndash; </div> &ndash;&gt;
          &lt;!&ndash; <h2 class="act-title"> &ndash;&gt;
          &lt;!&ndash;  提供互联网接入的ISP公司 &ndash;&gt;
          &lt;!&ndash; </h2> &ndash;&gt;
          &lt;!&ndash; <article> &ndash;&gt;
          &lt;!&ndash;  ISP证，全称为互联网接入服务业务(ISP)，是第二类增值电信业务。根据国务院相关规定，从事增值电信业务，就需要办理相应的增值电信业务许可证，增值电信业务经营许可证是按照国务院《中华人民共和国电信条例》，由工信部、各省市通信管理局对从事增值电信业务的企业颁发的从业证明，否则就是无证经营。被查需要负法律责任。 &ndash;&gt;
          &lt;!&ndash; </article> &ndash;&gt;
          &lt;!&ndash; <button class="read-more-btn"> &ndash;&gt;
          &lt;!&ndash;  阅读更多 &ndash;&gt;
          &lt;!&ndash; </button> &ndash;&gt;
        </div> -->

        <div v-for="(item, index) in imgs" :key="index" class="activity">
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
            RS485转PROFINET网关
          </h2>
          <article style="
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;">
            RS485转PROFINET网关型号是KJ-PNG-003，能够实现RS485接口仪表、变频器、综保、软启动器等设备接入到S71500、S71200、CPU315-2PN/DP、S7400等PROFINET网络系统，该网关为自由协议RS485转PROFINET网关，是串口PROFINET网关的一种。网关在PROFINET一侧是PROFINET IO 从站，在串口一侧物理接口RS485，支持基于RS485的自由协议通信。
            RS485转PROFINET网关自由协议报文内容是通过主站S71500、S71200、CPU315-2PNDP、S7400等PLC的编程实现。基于时间的周期发送控制不需编程，可在主站配置（如博图、STEP7）中选择不同周期间隔的发送；基于事件的发送需要编程控制。通过编程可灵活控制四种收发模式（发收发收、发发、收发收发、收收）。
          </article>
          <button class="read-more-btn">
            阅读更多
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
:root {
  --text-color-light-gray: #c6c6c6;
  --text-color-dark: #494949;
  --text-color-gray: #8b8b8b;
  --primary-color: #ff434f;
  --text-color-darker: #2e2e2e;
  --text-color-dark-gray: #727272;
}
</style>

<style scoped>
section {
  /* 二维 */
  display: grid;
  /* 每个列的对齐方式 */
  justify-items: center;
  max-width: 1280px;
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
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
}

.activity {
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: 0.4s;
  margin-bottom: 56px;
}

.act-image-wrapper {
  /*height: 255px;*/
  overflow: hidden;
  margin: -24px;
  margin-bottom: 0;
}

.act-image-wrapper img {
  min-height: 300px;
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
  box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
}
</style>
