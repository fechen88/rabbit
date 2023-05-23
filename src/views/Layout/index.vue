<script setup>
    import LayoutNav from './components/LayoutNav.vue';
    import LayoutHeader from './components/LayoutHeader.vue';
    import LayoutFooter from './components/LayoutFooter.vue';

</script>

<template>
    <LayoutNav />
    <LayoutHeader />
    <!-- 2nd tier router -->
    <RouterView />
    <LayoutFooter />
</template>