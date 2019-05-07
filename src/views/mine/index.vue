<template>
    <div id="main">
        <Header title="我的"/>
        <router-view></router-view>
        <TabBar />
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export default {
    components:{
        Header,
        TabBar
    }
}
</script>

<style lang="less" scoped>

</style>