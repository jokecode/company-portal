<script setup lang="ts">
import { ElCarousel, ElCarouselItem, ElImage } from 'element-plus'
import { useNewsStore } from '~/composables/news'

const news = useNewsStore()

// const news = ref([
//   {
//     date: '2024年8月18日',
//     year: '2024',
//     title: '工鼎科技 受邀参加西门子2024年第四届工业边缘生态大会',
//     picUrl: '/images/siemens-edge/2024/11.webp',
//     picUrls: [
//       '/images/siemens-edge/2024/00.webp',
//       '/images/siemens-edge/2024/11.webp',
//       '/images/siemens-edge/2024/12.webp',
//       '/images/siemens-edge/2024/13.webp',
//       '/images/siemens-edge/2024/14.webp',
//       '/images/siemens-edge/2024/15.webp',
//       '/images/siemens-edge/2024/16.webp',
//       '/images/siemens-edge/2024/17.webp',
//       '/images/siemens-edge/2024/21.webp',
//       '/images/siemens-edge/2024/22.webp',
//       '/images/siemens-edge/2024/23.webp',
//     ],
//     description: '工鼎科技 受邀参加西门子2024年第四届工业边缘生态大会\n当下，生成式 AI 正在加速新一轮产业变革，而西门子持续推动以人工智能、边缘计算、工业 5G 等前沿技术与产业场景的“双向奔赴”。为更好地以科技创新带动产业创新，第四届西门子工业边缘生态大会将于 2024 年 8 月 16 日，在深圳前海嘉里中心 T2 举办。当下，生成式 AI 正在加速新一轮产业变革，而西门子持续推动以人工智能、边缘计算、工业 5G 等前沿技术与产业场景的“双向奔赴”。为更好地以科技创新带动产业创新，第四届西门子工业边缘生态大会将于 2024 年 8 月 16 日，在深圳前海嘉里中心 T2 举办。',
//   },
//   {
//     date: '2024年8月16日',
//     year: '2024',
//     title: '《2024年西门子杯》',
//     picUrl: '/images/siemenscup-cimc/2024/1.webp',
//     picUrls: [
//       '/images/siemenscup-cimc/2024/1.webp',
//       '/images/siemenscup-cimc/2024/2.webp',
//       '/images/siemenscup-cimc/2024/3.webp',
//       '/images/siemenscup-cimc/2024/4.webp',
//       '/images/siemenscup-cimc/2024/5.webp',
//       '/images/siemenscup-cimc/2024/6.webp',
//       '/images/siemenscup-cimc/2024/7.webp',
//       '/images/siemenscup-cimc/2024/8.webp',
//     ],
//     description: '当下，生成式 AI 正在加速新一轮产业变革，而西门子持续推动以人工智能、边缘计算、工业 5G 等前沿技术与产业场景的“双向奔赴”。为更好地以科技创新带动产业创新，第四届西门子工业边缘生态大会将于 2024 年 8 月 16 日，在深圳前海嘉里中心 T2 举办。当下，生成式 AI 正在加速新一轮产业变革，而西门子持续推动以人工智能、边缘计算、工业 5G 等前沿技术与产业场景的“双向奔赴”。为更好地以科技创新带动产业创新，第四届西门子工业边缘生态大会将于 2024 年 8 月 16 日，在深圳前海嘉里中心 T2 举办。',
//   },
//   {
//     date: '2023年8月16日',
//     year: '2023',
//     title: '《2023年西门子杯》',
//     picUrl: '/images/siemenscup-cimc/2023/1.webp',
//     picUrls: [
//       '/images/siemenscup-cimc/2023/1.webp',
//       '/images/siemenscup-cimc/2023/2.webp',
//       '/images/siemenscup-cimc/2023/3.webp',
//       '/images/siemenscup-cimc/2023/4.webp',
//       '/images/siemenscup-cimc/2023/5.webp',
//       '/images/siemenscup-cimc/2023/6.webp',
//       '/images/siemenscup-cimc/2023/7.webp',
//       '/images/siemenscup-cimc/2023/8.webp',
//       '/images/siemenscup-cimc/2023/9.webp',
//     ],
//     description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
//   },
//   {
//     date: '2023年7月26日',
//     year: '2023',
//     title: '工鼎科技 亮相西门子2023年第三届工业边缘生态大会',
//     picUrl: '/images/siemens-edge/2023/00.webp',
//     picUrls: [
//       '/images/siemens-edge/2023/0.webp',
//       '/images/siemens-edge/2023/00.webp',
//       '/images/siemens-edge/2023/1.webp',
//       '/images/siemens-edge/2023/2.webp',
//       '/images/siemens-edge/2023/3.webp',
//       '/images/siemens-edge/2023/4.webp',
//       '/images/siemens-edge/2023/10.webp',
//       '/images/siemens-edge/2023/12.webp',
//       '/images/siemens-edge/2023/13.webp',
//       '/images/siemens-edge/2023/14.webp',
//       '/images/siemens-edge/2023/15.webp',
//       '/images/siemens-edge/2023/16.webp',
//       '/images/siemens-edge/2023/17.webp',
//       '/images/siemens-edge/2023/20.webp',
//       '/images/siemens-edge/2023/21.webp',
//       '/images/siemens-edge/2023/22.webp',
//       '/images/siemens-edge/2023/23.webp',
//       '/images/siemens-edge/2023/24.webp',
//       '/images/siemens-edge/2023/25.webp',
//     ],
//     description: '工鼎科技亮相西门子2023年第三届工业边缘生态大会',
//   },
//   {
//     date: '2023年7月21日',
//     year: '2023',
//     title: '《2023年西门子嘉年华》',
//     picUrl: '/images/siemens-tia/2023/2023-Siemens-TIA-festival1.webp',
//     picUrls: [
//       '/images/siemens-tia/2023/2023-Siemens-TIA-festival1.webp',
//       '/images/siemens-tia/2023/2023-Siemens-TIA-festival2.webp',
//       '/images/siemens-tia/2023/2023-Siemens-TIA-festival3.webp',
//       '/images/siemens-tia/2023/2023-Siemens-TIA-festival4.webp',
//       '/images/siemens-tia/2023/2023-Siemens-TIA-festival5.webp',
//       '/images/siemens-tia/2023/2023-Siemens-TIA-festival_11.webp',
//       '/images/siemens-tia/2023/2023-Siemens-TIA-festival_13.webp',
//     ],
//     description: '工鼎科技 受邀参加西门子2023年嘉年华',
//   },
//   {
//     date: '2022年8月16日',
//     year: '2022',
//     title: '《2022年西门子杯》',
//     picUrl: '/images/siemenscup-cimc/2022/cimc-2022_05.webp',
//     picUrls: [
//       '/images/siemenscup-cimc/2022/cimc-2022_01.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_02.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_03.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_04.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_05.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_06.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_07.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_08.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_09.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_10.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_11.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_12.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_13.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_14.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_15.webp',
//       '/images/siemenscup-cimc/2022/cimc-2022_16.webp',
//     ],
//     description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//   },
// ])

const filterCriteria = ref('All')

// const font = reactive({
//   color: 'rgba(0, 0, 0, .15)',
// })

const filterNews = computed(() => {
  return news.newsList.filter((item) => {
    return (item.year === filterCriteria.value || filterCriteria.value === 'All')
  })
})

function showDetail(value) {
  filterCriteria.value = value
}

onMounted(() => {
  document.getElementById('__nuxt').scrollTo(0, 20)
})
</script>

<template>
  <section class="company-activities">
    <h2 class="title1">
      公司动态
    </h2>
    <section id="showcases" class="showcases section-bg">
      <div class="filter-btns">
        <button class="filter-btn" :class="filterCriteria === 'All' ? 'active' : ''" @click="showDetail('All')">
          全部
        </button>
        <button class="filter-btn" :class="filterCriteria === '2024' ? 'active' : ''" @click="showDetail('2024')">
          2024年
        </button>
        <button class="filter-btn" :class="filterCriteria === '2023' ? 'active' : ''" @click="showDetail('2023')">
          2023年
        </button>
        <button class="filter-btn" :class="filterCriteria === '2022' ? 'active' : ''" @click="showDetail('2022')">
          2022年
        </button>
      </div>
    </section>
    <p class="intro" />
    <div class="activities">
      <div v-for="(item, index) in filterNews" :key="index" class="activity">
        <div class="act-image-wrapper">
          <ElCarousel height="300px" :autoplay="true">
            <ElCarouselItem v-for="(img, imgIdx) in item.picUrls" :key="imgIdx">
              <ElImage
                style="height: 270px;width: 100%;"
                :src="img"
                :preview-teleported="true"
                :zoom-rate="1.2"
                :max-scale="7"
                :min-scale="0.2"
                :preview-src-list="item.picUrls"
                :initial-index="item.picUrls.findIndex(ele => img === ele)"
                fit="cover"
              />
            </ElCarouselItem>
          </ElCarousel>
          <!-- <ElWatermark :font="font" content="工鼎科技">
            <ElImage
              :src="item.picUrl"
              :preview-teleported="true"
              :zoom-rate="1.2"
              :max-scale="7"
              :min-scale="0.2"
              :preview-src-list="item.picUrls"
              :initial-index="item.picUrls.findIndex(ele => item.picUrl === ele)"
              fit="cover"
            />
          </ElWatermark> -->
        </div>
        <div class="act-content">
          <div class="meta">
            <div class="flex gap-2">
              <div class="i-carbon-calendar-heat-map font-size-[18px] color-[#1e80ff]" />
              <div>{{ item.date }}</div>
            </div>
            <p class="comments">
              <!-- <i class="far fa-comments"></i>
              33
              <span>条评论</span> -->
            </p>
          </div>
          <h2 class="act-title">
            {{ item.title }}
          </h2>
          <article>
            {{ item.description }}
          </article>
          <div style="text-align: right;width: 100%;">
            <button class="read-more-btn">
              阅读更多
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* 走马灯 指示器样式 */
.el-carousel {
  /*width: 500px;*/
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  :deep(.el-carousel__indicators) {
    left: unset;
    transform: unset;
    right: 2%;
  }
  :deep(.el-carousel__button) {
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
  }
  :deep(.is-active .el-carousel__button) {
    background: #1e80ff;
  }

  :deep(.el-carousel__container) {
    height: 100%;
  }
}
</style>

<style scoped>
.title1 {
  font-size: 34px;
  color: var(--text-color-darker);
}

.intro {
  margin-bottom: 40px;
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
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  display: grid;
  justify-items: center;
  /*padding: 0 80px;*/
}

.activities {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 24px;
  gap: 30px;
  width: 1200px;
}

.activity {
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
  padding: 12px;
  transition: 0.4s;
  display: flex;
  gap: 30px;
}
.act-image-wrapper {
  flex: 2;
  flex-shrink: 0;
}
.act-content {
  display: flex;
  flex: 3;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px;
}
.act-image-wrapper {
  height: 274px;
  overflow: hidden;
  border-radius: 15px;
}

.activity .meta {
  /*margin-top: 20px;*/
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
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
}

.activity article {
  color: var(--text-color-gray);
  letter-spacing: 0.54px;
  line-height: 24px;
  /*text-indent: 2em;*/
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  /*padding: 0 20px 0 12px;*/
  flex-basis: 120px;
}

.read-more-btn {
  border: 0;
  color: white;
  background-color: var(--primary-color);
  padding: 6px 14px;
  margin-top: 12px;
  border-radius: 4px;
  visibility: hidden;
  display: none;
}

.activity:hover {
  transform: translateY(-20px) scale(1.05);
  box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);
}

.filter-btns {
  margin-top: 54px;
  margin-bottom: 38px;
}

.filter-btn {
  margin: 0 7px;
  background-color: var(--secondary-color);
  border: 0;
  color: var(--text-color-dark-gray);
  padding: 8px 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.4s;
}

.filter-btn:focus,
.filter-btn:active {
  outline: none;
}

.filter-btn.active,
.filter-btn:hover {
  background-color: var(--primary-color);
  color: white;
}
</style>
