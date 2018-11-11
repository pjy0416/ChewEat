<template>
    <div class = "product-review-container">
        <review-list></review-list>
        <review-input></review-input>
    </div>
</template>

<script>
import ReviewInput from './review/review_input.vue';
import ReviewList from './review/review_list.vue';

export default {
    data () {
        return {
            reviews : []
        }
    },  
    methods : {
        
    },
    components : {
        ReviewList,
        ReviewInput
    }

}
</script>

<style scoped>
    .product-review-container {
        text-align : center;
        background-color: #f6f6f6;
        width : 60%;
        display : block;
        margin-left : auto;
        margin-right : auto;
        margin-bottom : 50px;
    }
    .product-review-container input {
        border-style: groove;
    }
    .product-review-container button {
        border-style: groove;
    }
</style>
