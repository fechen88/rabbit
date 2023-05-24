<template>
    <div>HomePage</div>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
    <HomePanel title="新鲜好物" subTitle="新鲜好物 好多商品">
        <div>
            好物
        </div>
    </HomePanel>
    <HomePanel title="人气推荐" subTitle="人气推荐 好多商品">
        <div>
            人气
        </div>
    </HomePanel>
</template>

<script setup>
    
    import HomeBanner from './components/HomeBanner.vue';
    import HomeCategory from './components/HomeCategory.vue';
    import HomeHot from './components/HomeHot.vue';
    import HomeNew from './components/HomeNew.vue';
    import HomeProduct from './components/HomeProduct.vue';
    import HomePanel from './components/HomePanel.vue';

</script>