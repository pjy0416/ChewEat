<template>
    <div class = "product-container">   
        <div class = "category-main">
            <transition name = "component-fade" mode = "out-in">
                <All v-if="this.$store.state.selected == 'ALL'"></All>
                <Item1 v-else-if="this.$store.state.selected == 'item1'"></Item1>
                <Item2 v-else-if="this.$store.state.selected == 'item2'"></Item2>
                <Item3 v-else-if="this.$store.state.selected == 'item3'"></Item3>
                <Item4 v-else-if="this.$store.state.selected == 'item4'"></Item4>
            </transition>   
        </div>
        
    </div>
</template>

<script>
import All from './commodityPage/commodity_all.vue';
import Item1 from './commodityPage/commodity_item1.vue';
import Item2 from './commodityPage/commodity_item2.vue';
import Item3 from './commodityPage/commodity_item3.vue';
import Item4 from './commodityPage/commodity_item4.vue';

export default {
    data(){
        return {

        }
    },
    components : {
        All,
        Item1,
        Item2,
        Item3,
        Item4
    },
    methods : {
        computed() {

        }
    }
}
</script>

<style scoped>
    .product-container {
        margin-top : 30px;
        margin-bottom : 30px;
    }
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
    /* .routing-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    
</style>
