import { acceptHMRUpdate, defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const filterCriteria = ref('')
  const productInfo = ref({})

  function setFilterCriteria(value) {
    filterCriteria.value = value
  }

  function setProductInfo(value) {
    productInfo.value = value
  }

  return {
    setFilterCriteria,
    setProductInfo,
    filterCriteria,
    productInfo,
  }
}, {
  persist: {
    storage: persistedState.localStorage,
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
