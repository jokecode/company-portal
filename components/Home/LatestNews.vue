<script setup lang="ts">
import { useNewsStore } from '~/composables/news'

const news = useNewsStore()

const filterNews = computed(() => {
  return news.newsList.filter((item, index) => {
    return index <= 2
  })
})

function goUrl(url) {
  const router = useRouter()
  router.push(url)
}
</script>

<template>
  <!-- Latest News -->
  <section class="section">
    <div class="container">
      <!-- Section Header -->
      <div class="section__header">
        <h4>最新消息</h4>
        <div class="section__header-element">
          <a class="link" @click="goUrl('/company-dynamics')">查看所有消息</a>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, index) in filterNews" :key="index" class="col fadeInRightSmall">
          <!-- Post minimal -->
          <article class="post-minimal">
            <time class="post-minimal__time">{{ item.date }}</time>
            <div class="post-minimal__divider"></div>
            <h6 class="post-minimal__title">
              <a @click="goUrl('/company-dynamics')">{{ item.title }}</a>
            </h6>
            <p class="news-content">{{ item.description }}</p>
            <a class="button" @click="goUrl('/company-dynamics')">更多动态</a>
          </article>
        </div>

        <!-- <div class="col fadeInRightSmall">
          &lt;!&ndash; Post minimal &ndash;&gt;
          <article class="post-minimal">
            <time class="post-minimal__time" datetime="2022">2022年4月13日</time>
            <div class="post-minimal__divider"></div>
            <h6 class="post-minimal__title">
              <a href="single-post.html">第四次工业革命：制造商的未来是什么？</a>
            </h6>
            <p>人类现在正处于如此规模的技术变革的边缘...</p>
            <a class="button" href="single-post.html">read more</a>
          </article>
        </div>
        <div class="col fadeInRightSmall" data-wow-delay=".1s">
          &lt;!&ndash; Post minimal &ndash;&gt;
          <article class="post-minimal">
            <time class="post-minimal__time" datetime="2022">2022年3月25日</time>
            <div class="post-minimal__divider"></div>
            <h6 class="post-minimal__title">
              <a href="single-post.html">设计与先进材料作为创新驱动力</a>
            </h6>
            <p>近年来，先进材料的出现对...产生了重大影响</p>
            <a class="button" href="single-post.html">read more</a>
          </article>
        </div>
        <div class="col fadeInRightSmall" data-wow-delay=".2s">
          &lt;!&ndash; Post minimal &ndash;&gt;
          <article class="post-minimal">
            <time class="post-minimal__time" datetime="2022">2022年2月1日</time>
            <div class="post-minimal__divider"></div>
            <h6 class="post-minimal__title">
              <a href="single-post.html">未来建筑和建筑中的多功能材料</a>
            </h6>
            <p>安装通常是建筑物中几乎看不见的部分。数英里的...</p>
            <a class="button" href="single-post.html">read more</a>
          </article>
        </div> -->
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
  margin-left: auto;
  margin-right: auto;
}
.section__header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 25px;

  position: relative;
  z-index: 10;
  margin-bottom: -20px;
  transform: translateY(-20px);
  text-align: left;
  h4 {
    font-size: 24px;
    line-height: 1.16667;
  }
}
.section__header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  border-bottom: 1px solid #dddfe7;
}
.link {
  font-size: 14px;
}
.link:hover,
.link:focus {
  color: #f5a63f;
  text-decoration: none;
  outline: none;
}
.row {
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: -50px;
  margin-top: 40px;
}
.col {
  flex-basis: 30%;
  height: 222px;
}
.post-minimal {
  text-align: left;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  justify-content: space-between;
}
.post-minimal__time {
  font-size: 14px;
  line-height: 1.35;
  font-weight: 500;
  color: #f5a63f;
}
.post-minimal__divider {
  width: 30px;
  height: 3px;
  background: #f5a63f;
  margin-top: 10px;
}
.post-minimal__title {
  margin-bottom: 0;
  font-weight: 500;
  margin-top: 30px;

  height: 48px;

  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.post-minimal__title > a {
  line-height: 1.375;
  font-size: 16px;
  transition: 0.3s all ease;
  color: #151515;
}
.post-minimal__title > a:hover {
  color: #f5a63f;
}
.post-minimal > p {
  margin-top: 14px;
  font-size: 12px;
  margin-bottom: 30px;
}

.fadeInRightSmall {
  animation-name: fadeInRightSmall;
}

@keyframes fadeInRightSmall {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.post-minimal > .button {
  padding: 9px 28px;
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  border-radius: 0;
  color: #151515;
  background-color: #ebebeb;
  /*border-color: #ebebeb;*/
  border: 0;
}

.button:hover {
  color: #fff;
  border-color: #f5a63f;
  background-color: #f5a63f;
  transition: 0.3s;
}

.news-content {
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
