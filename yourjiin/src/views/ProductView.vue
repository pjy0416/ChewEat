<template>
    <div class = "product-container">
        <product-header></product-header>
        <product-main id="product-main" v-if="this.$store.state.information != [] "></product-main>
        <product-review v-if="this.$store.state.information != [] "></product-review>
    </div>
</template>

<script>
import ProductHeader from '../components/product/product_header.vue';
import ProductMain from '../components/product/product_main.vue';
import ProductReview from '../components/product/product_review.vue';
import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
    components : {
        ProductHeader,
        ProductMain,
        ProductReview
    },
    methods : {
        removeAll(){
            localStorage.clear();
            this.$store.state.reviews = [];
        }
    }
}
</script>

<style scoped>
    #product-main {
        margin-top : 200px;
    }
</style>
