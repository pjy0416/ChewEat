<template>
    <transition name = "fade" mode = "out-in">
        <div :key="$route.params.id">
            <Commodity></Commodity>
            <transition name = "component-fade" mode = "out-in">  
                <Product></Product>
            </transition>
        </div>
    </transition>
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

<style scoped>
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
    /* .routing-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s ease;
    }
    .fade-enter, .fade-leave-to
    /* .routing-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
