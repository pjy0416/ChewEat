<template>
    <div class = "home-container">
        <div class = "header-container">
            <!-- <Logo></Logo> -->
            <page-description></page-description>
        </div>
        <!-- 이미지 가로 길이 조정 필요 -->
        <div class = "main-container">
            <famous-commodity class = "famouse-commodity"></famous-commodity>
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
        Recommend,
        // Logo,
    }
}
</script>

<style>
    .header-container {
        margin-bottom : 80px;
    }
    
    .famous-commodity {
        margin-bottom : 80px;
    }

    /* /////////////////////////////// */
    @media(max-width : 500px) {
        .header-container {
            margin-bottom: 50px;
        }
        .famous-commodity {
            margin-bottom: 50px;
        }
    }
</style>
