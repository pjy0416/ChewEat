<template>
    <transition name = "fade" mode = "out-in">
        <div :key="$route.params.id">
            <Logo></Logo>
            <div id = "commodity">
                <Commodity></Commodity>
            </div>
            <transition name = "component-fade" mode = "out-in">  
                <product-section></product-section>
            </transition>
        </div>
    </transition>
</template>

<script>

import Commodity from '../components/common/Commodity.vue';
import ProductSection from '../components/commodity/productsection.vue';
import Logo from '../components/common/logo.vue';

export default {
    components : {
        Commodity,
        ProductSection,
        Logo
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
    #commodity {
        margin-top : 150px;
    }
</style>
