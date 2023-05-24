//code for banner and carousel
import { ref, onMounted } from "vue"
import { getBannerAPI } from "@/apis/home"

export function useBanner(){
    //get banner
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite:'2'
        })
        bannerList.value = res.result
    }
    onMounted(() => getBanner())

    return { 
        bannerList 
    }
}