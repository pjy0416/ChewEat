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
            reviews : [],
            reviewRoot : [],
        }
    },  
    components : {
        ReviewList,
        ReviewInput,
        ReviewHeader
    },
    
    //DB에 있는 리뷰 정보를 가져오는 부분
    created() {

        this.reviewRoot = sessionStorage.getItem(sessionStorage.key(sessionStorage.length-1));
        axios.get(`./information/review/${this.reviewRoot}`)
            .then(response =>
                // (console.log(response.data.review)))
                (this.$store.state.reviewTest = response.data.review))
            .catch()
    },


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
