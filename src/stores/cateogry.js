import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';

export const useCategoryStore = defineStore('category', () => {
    //state category list
    const categoryList = ref([])

    //action fetch category list from API
    const getCategory = async () => {
      const res = await getCategoryAPI()
      categoryList.value = res.result
    }
    return {categoryList, getCategory}
})