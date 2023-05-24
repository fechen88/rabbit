//code for category
import { ref, onMounted } from "vue"
import { getCategoryAPI } from "@/apis/category"
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export function useCategory(){

    const categoryData = ref({})
    const route = useRoute()
    //未传id则用默认参数
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }

    onMounted(() => getCategory())

    onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
    })

    return {
        categoryData
    }
}