import { acceptHMRUpdate, defineStore } from 'pinia'

export const useNewsStore = defineStore('news', () => {
  const newsList = ref([
    {
      date: '2024年8月18日',
      year: '2024',
      title: '工鼎科技 受邀参加西门子2024年第四届工业边缘生态大会',
      picUrl: '/images/siemens-edge/2024/11.webp',
      picUrls: [
        '/images/siemens-edge/2024/00.webp',
        '/images/siemens-edge/2024/11.webp',
        '/images/siemens-edge/2024/12.webp',
        '/images/siemens-edge/2024/13.webp',
        '/images/siemens-edge/2024/14.webp',
        '/images/siemens-edge/2024/15.webp',
        '/images/siemens-edge/2024/16.webp',
        '/images/siemens-edge/2024/17.webp',
        '/images/siemens-edge/2024/21.webp',
        '/images/siemens-edge/2024/22.webp',
        '/images/siemens-edge/2024/23.webp',
      ],
      description: '工鼎科技 受邀参加西门子2024年第四届工业边缘生态大会\n当下，生成式 AI 正在加速新一轮产业变革，而西门子持续推动以人工智能、边缘计算、工业 5G 等前沿技术与产业场景的“双向奔赴”。为更好地以科技创新带动产业创新，第四届西门子工业边缘生态大会将于 2024 年 8 月 16 日，在深圳前海嘉里中心 T2 举办。当下，生成式 AI 正在加速新一轮产业变革，而西门子持续推动以人工智能、边缘计算、工业 5G 等前沿技术与产业场景的“双向奔赴”。为更好地以科技创新带动产业创新，第四届西门子工业边缘生态大会将于 2024 年 8 月 16 日，在深圳前海嘉里中心 T2 举办。',
    },
    {
      date: '2024年8月16日',
      year: '2024',
      title: '《2024年西门子杯》',
      picUrl: '/images/siemenscup-cimc/2024/1.webp',
      picUrls: [
        '/images/siemenscup-cimc/2024/1.webp',
        '/images/siemenscup-cimc/2024/2.webp',
        '/images/siemenscup-cimc/2024/3.webp',
        '/images/siemenscup-cimc/2024/4.webp',
        '/images/siemenscup-cimc/2024/5.webp',
        '/images/siemenscup-cimc/2024/6.webp',
        '/images/siemenscup-cimc/2024/7.webp',
        '/images/siemenscup-cimc/2024/8.webp',
      ],
      description: '当下，生成式 AI 正在加速新一轮产业变革，而西门子持续推动以人工智能、边缘计算、工业 5G 等前沿技术与产业场景的“双向奔赴”。为更好地以科技创新带动产业创新，第四届西门子工业边缘生态大会将于 2024 年 8 月 16 日，在深圳前海嘉里中心 T2 举办。当下，生成式 AI 正在加速新一轮产业变革，而西门子持续推动以人工智能、边缘计算、工业 5G 等前沿技术与产业场景的“双向奔赴”。为更好地以科技创新带动产业创新，第四届西门子工业边缘生态大会将于 2024 年 8 月 16 日，在深圳前海嘉里中心 T2 举办。',
    },
    {
      date: '2023年8月16日',
      year: '2023',
      title: '《2023年西门子杯》',
      picUrl: '/images/siemenscup-cimc/2023/1.webp',
      picUrls: [
        '/images/siemenscup-cimc/2023/1.webp',
        '/images/siemenscup-cimc/2023/2.webp',
        '/images/siemenscup-cimc/2023/3.webp',
        '/images/siemenscup-cimc/2023/4.webp',
        '/images/siemenscup-cimc/2023/5.webp',
        '/images/siemenscup-cimc/2023/6.webp',
        '/images/siemenscup-cimc/2023/7.webp',
        '/images/siemenscup-cimc/2023/8.webp',
        '/images/siemenscup-cimc/2023/9.webp',
      ],
      description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      date: '2023年7月26日',
      year: '2023',
      title: '工鼎科技 亮相西门子2023年第三届工业边缘生态大会',
      picUrl: '/images/siemens-edge/2023/00.webp',
      picUrls: [
        '/images/siemens-edge/2023/0.webp',
        '/images/siemens-edge/2023/00.webp',
        '/images/siemens-edge/2023/1.webp',
        '/images/siemens-edge/2023/2.webp',
        '/images/siemens-edge/2023/3.webp',
        '/images/siemens-edge/2023/4.webp',
        '/images/siemens-edge/2023/10.webp',
        '/images/siemens-edge/2023/12.webp',
        '/images/siemens-edge/2023/13.webp',
        '/images/siemens-edge/2023/14.webp',
        '/images/siemens-edge/2023/15.webp',
        '/images/siemens-edge/2023/16.webp',
        '/images/siemens-edge/2023/17.webp',
        '/images/siemens-edge/2023/20.webp',
        '/images/siemens-edge/2023/21.webp',
        '/images/siemens-edge/2023/22.webp',
        '/images/siemens-edge/2023/23.webp',
        '/images/siemens-edge/2023/24.webp',
        '/images/siemens-edge/2023/25.webp',
      ],
      description: '工鼎科技亮相西门子2023年第三届工业边缘生态大会',
    },
    {
      date: '2023年7月21日',
      year: '2023',
      title: '《2023年西门子嘉年华》',
      picUrl: '/images/siemens-tia/2023/2023-Siemens-TIA-festival1.webp',
      picUrls: [
        '/images/siemens-tia/2023/2023-Siemens-TIA-festival1.webp',
        '/images/siemens-tia/2023/2023-Siemens-TIA-festival2.webp',
        '/images/siemens-tia/2023/2023-Siemens-TIA-festival3.webp',
        '/images/siemens-tia/2023/2023-Siemens-TIA-festival4.webp',
        '/images/siemens-tia/2023/2023-Siemens-TIA-festival5.webp',
        '/images/siemens-tia/2023/2023-Siemens-TIA-festival_11.webp',
        '/images/siemens-tia/2023/2023-Siemens-TIA-festival_13.webp',
      ],
      description: '工鼎科技 受邀参加西门子2023年嘉年华',
    },
    {
      date: '2022年8月16日',
      year: '2022',
      title: '《2022年西门子杯》',
      picUrl: '/images/siemenscup-cimc/2022/cimc-2022_05.webp',
      picUrls: [
        '/images/siemenscup-cimc/2022/cimc-2022_01.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_02.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_03.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_04.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_05.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_06.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_07.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_08.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_09.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_10.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_11.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_12.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_13.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_14.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_15.webp',
        '/images/siemenscup-cimc/2022/cimc-2022_16.webp',
      ],
      description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
  ])

  function setNewsList(value) {
    newsList.value = value
  }

  return {
    setNewsList,
    newsList,
  }
}, {
  persist: {
    storage: persistedState.localStorage,
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
