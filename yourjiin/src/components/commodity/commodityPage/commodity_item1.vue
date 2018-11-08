<template>
    <div>      
        <product-card></product-card>
    </div>
</template>

<script>
import ProductCard from '../../common/ProductCard.vue';

export default {
    components : {
        ProductCard
    },
    methods : {
        fetchItem1(){
            this.$store.dispatch('FETCH_ItEM1');
        }
    },
    created(){
        this.fetchItem1();
    }
}
</script>

<style scoped>
</style>
