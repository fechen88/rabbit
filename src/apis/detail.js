import httpInstance from '@/utils/http'

export function getItemDetailAPI(id){
    return httpInstance({
        url:'/goods',
        params: {
            id
        }
    })
}

export function getHotItemsAPI({id, type, limit=3}){
    return httpInstance({
        url:'/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}