<template>
    <div class = "commodity-container">
        <Header></Header>
        <CategoryBar></CategoryBar>
    </div>
</template>

<script>
import Header from '../commodity/header.vue';
import CategoryBar from '../commodity/categorybar.vue';


export default {
    components : {
        Header,
        CategoryBar,
        
    }
}
</script>

<style scoped>
    .commodity-container {
        margin-top : 200px;
    }
</style>
