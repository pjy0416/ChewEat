<template>
    <div>      
        <product-card></product-card>
        <!-- <product-card2 v-else></product-card2> -->
    </div>
</template>

<script>
import ProductCard from '../../common/ProductCard.vue';

export default {
    data() {

    },
    components : {
        ProductCard,
    }
}
</script>

<style scoped>
</style>
