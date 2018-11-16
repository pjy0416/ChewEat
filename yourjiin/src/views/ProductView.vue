<template>
    <div class = "product-container">
        <product-header></product-header>
        <product-main id="product-main" v-if="this.$store.state.information != [] "></product-main>
        <product-review></product-review>
    </div>
</template>

<script>
import ProductHeader from '../components/product/product_header.vue';
import ProductMain from '../components/product/product_main.vue';
import ProductReview from '../components/product/product_review.vue';

export default {
    components : {
        ProductHeader,
        ProductMain,
        ProductReview
    }
}
</script>

<style scoped>
    #product-main {
        margin-top : 200px;
    }
</style>
