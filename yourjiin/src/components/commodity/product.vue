<template>
    <div class = "product-container">
        <div class = "category-section-header">
            <h2>SEARCH</h2>
        </div>
        <div class = "category-main">
            <All v-if="this.$store.state.selected == 'ALL'"></All>
            <Item1 v-else-if="this.$store.state.selected == 'item1'"></Item1>
            <Item2 v-else-if="this.$store.state.selected == 'item2'"></Item2>
            <Item3 v-else-if="this.$store.state.selected == 'item3'"></Item3>
            <Item4 v-else-if="this.$store.state.selected == 'item4'"></Item4>
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
    }
}
</script>

<style scoped>
    .product-container {
        margin-top : 30px;
    }
    .category-section-header {
        text-align : center;
        margin-bottom : 30px;
    }
    .category-section-header h2 {
        font-size : 2.2rem;
        font-weight: 600;
    }
</style>
