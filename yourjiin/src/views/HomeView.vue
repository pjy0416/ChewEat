<template>
    <div class = "home-container">
        <div class = "header-container">
            <!-- <Logo></Logo> -->
            <page-description></page-description>
        </div>
        <!-- 이미지 가로 길이 조정 필요 -->
        <div class = "main-container">
            <famous-commodity></famous-commodity>
            <Recommend></Recommend>
        </div>
    </div>
</template>

<script>
// import Logo from '../components/home/logo.vue';
import PageDescription from '../components/home/page-description.vue';
import FamousCommodity from '../components/home/famous-commodity.vue';
import Recommend from '../components/home/recommend.vue';

export default {
    
    components : {
        PageDescription,
        FamousCommodity,
        Recommend
        // Logo,
    }
}
</script>

<style>
    .home-container {
        padding : 50px 50px 50px 50px;
        margin-left : 70px;
    }
    .header-container {
        margin-top : 20px;
        margin-bottom : 20px;
    }
    .main-container {
        margin-bottom : 10px;
    }
</style>
