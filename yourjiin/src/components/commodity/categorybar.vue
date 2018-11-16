<template>
    <div class = "category-container">
        <div class = "category-main">
            <Snack v-if="this.$route.params.id == 'snack'"></Snack>
            <Drink v-else-if="this.$route.params.id == 'drink'"></Drink>
            <Noodle v-else-if="this.$route.params.id == 'noodle'"></Noodle>
            <Dairy v-else-if="this.$route.params.id == 'dairy'"></Dairy>
            <Instant v-else-if="this.$route.params.id == 'instant'"></Instant>
        </div>
    </div>
</template>

<script>
import Snack from './categoryMains/Snack.vue';
import Drink from './categoryMains/Drink.vue';
import Noodle from './categoryMains/Noodle.vue';
import Dairy from './categoryMains/Dairy.vue';
import Instant from './categoryMains/Instant.vue';

export default {
   
   components : {
       Snack, Drink, Noodle, Dairy, Instant
   }
   
}
</script>

<style scoped>
    .category-container {
        text-align : center;
    }
    .category {
        width : 100%;
    }
    .category-main {
        /* display : flex; */
        /* align-items : center; */
        margin-bottom : 50px;
        /* font-size : 2rem; */
        /* font-weight: bold; */
    }
    

    /* //////////////////////////////////////// */
    @media (max-width : 700px){
        .category {
            margin-left : 3%;
        }
        .category-main {
            font-size : 1.1rem;
        }
    }
    @media (max-width : 500px) {
        .category { 
            margin-left : 3%;
        }
        .category-main {
            margin-left : 0;
            font-size : 1rem;
        }
    }
</style>
