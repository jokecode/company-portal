<script setup lang="ts">
const news = ref([
  {
    date: '2020年4月22日',
    title: '提供互联网接入的ISP公司',
    picUrl: '/gd/honor/CCI08292024_0002.jpg',
    description: 'ISP证，全称为互联网接入服务业务(ISP)，是第二类增值电信业务。根据国务院相关规定，从事增值电信业务，就需要办理相应的增值电信业务许可证，增值电信业务经营许可证是按照国务院《中华人民共和国电信条例》，由工信部、各省市通信管理局对从事增值电信业务的企业颁发的从业证明，否则就是无证经营。被查需要负法律责任。',
  },
  {
    date: '2020年4月22日',
    title: '提供互联网接入的ISP公司',
    picUrl: '/gd/honor/CCI08292024_0003.jpg',
    description: 'ISP证，全称为互联网接入服务业务(ISP)，是第二类增值电信业务。根据国务院相关规定，从事增值电信业务，就需要办理相应的增值电信业务许可证，增值电信业务经营许可证是按照国务院《中华人民共和国电信条例》，由工信部、各省市通信管理局对从事增值电信业务的企业颁发的从业证明，否则就是无证经营。被查需要负法律责任。',
  },
  {
    date: '2020年4月22日',
    title: '提供互联网接入的ISP公司',
    picUrl: '/gd/honor/CCI08292024_0002.jpg',
    description: 'ISP证，全称为互联网接入服务业务(ISP)，是第二类增值电信业务。根据国务院相关规定，从事增值电信业务，就需要办理相应的增值电信业务许可证，增值电信业务经营许可证是按照国务院《中华人民共和国电信条例》，由工信部、各省市通信管理局对从事增值电信业务的企业颁发的从业证明，否则就是无证经营。被查需要负法律责任。',
  },
  {
    date: '2020年4月22日',
    title: '《2023年西门子边缘生态大会》',
    picUrl: '/gd/honor/CCI08292024_0002.jpg',
    description: '',
  },
  {
    date: '2020年4月22日',
    title: '《2024年西门子边缘生态大会》',
    picUrl: '/gd/honor/CCI08292024_0002.jpg',
    description: '',
  },
  {
    date: '2020年4月22日',
    title: '《2023年西门子嘉年华》',
    picUrl: '/gd/honor/CCI08292024_0002.jpg',
    description: '',
  },
  {
    date: '2020年4月22日',
    title: '《2022年西门子杯》',
    picUrl: '/gd/honor/CCI08292024_0002.jpg',
    description: '',
  },
  {
    date: '2020年4月22日',
    title: '《2023年西门子杯》',
    picUrl: '/gd/honor/CCI08292024_0002.jpg',
    description: '',
  },
  {
    date: '2020年4月22日',
    title: '《2024年西门子杯》',
    picUrl: '/gd/honor/CCI08292024_0002.jpg',
    description: '',
  },
])
</script>

<template>
  <section id="company-activities" class="company-activities">
    <h2 class="title1">公司动态</h2>
    <p class="intro">关注公司动态，获取一手信息</p>
    <div class="activities">
      <div v-for="(item, index) in news" :key="index" class="activity">
        <div class="act-image-wrapper">
          <img :src="item.picUrl" alt="">
        </div>
        <div class="meta">
          <p class="data-published">
            <i class="far fa-calendar"></i>
            {{ item.date }}
          </p>
          <p class="comments">
            <!-- <i class="far fa-comments"></i>
            33
            <span>条评论</span> -->
          </p>
        </div>
        <h2 class="act-title">{{ item.title }}</h2>
        <article>
          {{ item.description }}
        </article>
        <button class="read-more-btn" @click="">阅读更多</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title1 {
  font-size: 34px;
  color: var(--text-color-darker);
}

.intro {
  margin: 28px 0 60px 0;
  /* text-indent: 2em; */
  font-size: 18px;
  color: var(--text-color-dark-gray);
  opacity: 0;
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
/* 公司动态 */
.company-activities {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  display: grid;
  justify-items: center;
  padding: 0 80px;
}

.activities {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  gap: 40px;
}

.activity {
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: 0.4s;
}

.act-image-wrapper {
  height: 255px;
  overflow: hidden;
  margin: -24px;
  margin-bottom: 0;
}

.act-image-wrapper img {
  min-height: 300px;
  object-fit: cover;
}

.activity .meta {
  margin-top: 20px;
  margin-bottom: 12px;
  color: var(--text-color-light-gray);
  font-size: 16px;
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
