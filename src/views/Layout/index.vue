<script setup>
    import LayoutNav from './components/LayoutNav.vue';
    import LayoutHeader from './components/LayoutHeader.vue';
    import LayoutFooter from './components/LayoutFooter.vue';
    import LayoutFixed from './components/LayoutFixed.vue';
    //get category list
    import { useCategoryStore } from '@/stores/cateogry';
    import { onMounted } from 'vue';

    const categoryStore = useCategoryStore()

    onMounted(()=>{
        categoryStore.getCategory();
    })

</script>

<template>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <!-- 2nd tier router -->
    <!-- 解决router缓存方法1 -->
    <!-- <RouterView :key="$route.fullPath"/> -->
    <RouterView />
    <LayoutFooter />
</template>