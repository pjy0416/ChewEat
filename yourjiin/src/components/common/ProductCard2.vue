<template>
    <div class = "product-container">
        <div class = "product-item">
            <div class  = "product-aligns" v-for="item in this.$store.state.products" :key="item.id">
                <b-card class = "product-image" no-body :img-src="item.url"
                img-alt = "Image" img-top fluid style="border-radius : 0 0 20px 20px;"> 
                    <b-card-body class = "product-body-section">
                        <div class = "product-title">
                            <router-link :to="{ name: 'item', params: { item : item.productName }}">
                                <p @click="send_data(item)">{{item.productName}}</p>
                            </router-link>
                        </div>
                        <div class = "product-body">
                            <div class = "product-descript">
                                <div class = "descript-title">
                                    <span class = "descript-icon"><i class="far fa-question-circle fa-bold fa-lg" style="margin-right : 10px;"></i></span>
                                    <span class = "descript-text">Descript</span>
                                </div>
                                <div class = "descript-section">
                                    <span>{{item.productTaste}}</span>
                                </div>
                            </div>
                            <div class = "product-information">
                                <div class = "product-left-section">
                                    <div class = "like">
                                        <span class = "like-icon"><i class="far fa-heart fa-bold fa-lg" style="margin-right : 10px;"></i></span>
                                        <span class = "like-text" style = "font-weight : bold;">Like &nbsp;</span>
                                        <span class = "like-count">{{item.likeCount}}</span>
                                    </div>
                                    <div class = "review">
                                        <span class = "review-icon"><i class="far fa-user fa-bold fa-lg" style="margin-right : 10px; margin-left : 1px;"></span>
                                        <span class = "review-text" style = "font-weight : bold;">Review &nbsp;</span>
                                        <span class = "review-count">{{item.review}}</span>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import axios from 'axios';

export default {
    methods : {
        ...mapMutations({
            send_data : 'Send_data'
        }),
    },

    data() {
        return {
            param : [],
            item : [],
      }
    },

    created(){
        this.param = this.$route.params.id;
        this.item = this.$store.state.selected;
    },
    mounted() {
        
        const root = 'product/information';
        axios.get(`${root}/${this.param}/${this.item}`)
            .then(response =>
                (this.$store.state.products = response.data))
            .catch()
    }
}
</script>

<style scoped>
    .product-item {
        width : 90%;
        display : block;
        margin-left: auto;
        margin-right : auto;
    }
    .product-aligns { 
        display : inline-block;
        width : 40%;   
        margin-left : 5%;
        margin-right : 5%;
        margin-bottom : 20px;
    }
    
    .product-body-section {
        padding : 0 0 0 0;
    }
    .product-title{
        background-color : #FF3820;
        text-align : center;
        font-size : 1.2rem;
        font-weight: bold;
        padding : 10px 8px 10px 8px;
    }
    .product-title a{
        color : white;
        text-decoration: none;   
    }
    .product-title a:hover{
        color : black;
    }
    .product-title p {
        margin : 0;
    }
    /* ////////////////////////////////////////////// */
    .product-body {
        background-color: white;
        padding : 20px 10px 20px 20px;
        border-radius: 0 0 15px 15px;
    }
    .product-descript {
        margin-bottom : 10px;
        min-height : 60px;
    }
    .descript-title{
        font-size : 1rem;
        font-weight: bold;
    }
    .product-information {
        margin-top : 5px;
    }
    .like , .review {
        font-size : 1rem;
        margin-bottom : 10px;
    }
    .like-text .review-text {
        font-weight: bold;
    }
    .like-count .review-count {
        font-weight: 300;
    }
</style>
