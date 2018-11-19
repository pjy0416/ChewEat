<template>
    <div>      
        <product-card></product-card>
    </div>
</template>


<script>
// param id가 있고, selected 가 있는 상태
import ProductCard from '../../common/ProductCard.vue';

export default {
    components : {
        ProductCard
    },
}
</script>

<style scoped>
</style>
