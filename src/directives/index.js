//config lazy image loading
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app){
        //lazying loading directives
        app.directive('img-lazy',{
            mounted(el,binding){
                //el: element to bind
                //binding: binding.value which is the value berhind =
                // console.log(el,binding.value)
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        //console.log(isIntersecting)
                        if (isIntersecting){
                            //entering window
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}