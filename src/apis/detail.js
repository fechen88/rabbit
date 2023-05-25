import httpInstance from '@/utils/http'

export function getItemDetailAPI(id){
    return httpInstance({
        url:'/goods',
        params: {
            id
        }
    })
}