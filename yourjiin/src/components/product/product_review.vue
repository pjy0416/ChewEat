<template>
    <div class = "product-review-container">
        <review-header></review-header>
        <review-input></review-input>
        <review-list></review-list>
    </div>
</template>

<script>
import ReviewInput from './review/review_input.vue';
import ReviewList from './review/review_list.vue';
import ReviewHeader from './review/review_header.vue';
import axios from 'axios';

export default {
    data () {
        return {
            reviews : []
        }
    },  
    methods : {
        
    },
    created(){
        // const reviewroot = 'commodity/product/information/review';
        axios.get(`./information/review/${this.$state.information.ProductID}`)
            .then( response => 
                (this.$store.state.reviewtest = response.data))
            .catch()

        console.log(this.$store.state.reviewtest[0].contents);
        console.log(this.$store.state.reviewtest[1].contents);
        console.log(this.$store.state.reviewtest[2].contents);
        console.log(this.$store.state.reviewtest[3].contents);

    },
    components : {
        ReviewList,
        ReviewInput,
        ReviewHeader
    }


}
</script>

<style scoped>
    .product-review-container {
        text-align : center;
        background-color: #EEEEEF;
        width : 80%;
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
