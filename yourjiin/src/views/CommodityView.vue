<template>
    <div>
        <Commodity></Commodity> 
        <Product></Product>
    </div>
</template>

<script>

import Commodity from '../components/common/Commodity.vue';
import Product from '../components/commodity/product.vue';

export default {
    components : {
        Commodity,
        Product
    },  
}
</script>

<style>

</style>
