<template>
    <div class = "product-container">
        <div class = "product-item" >
            <div class = "product-align" v-for="item in this.$store.state.products" :key="item.id">
                <div class = "product">
                    <div class = "product-left-section">
                        <img class = "product-img" :src="item.url" fluid alt="image"/>
                    </div>
                    <div class = "product-right-section">
                        <span class = "product-text">
                            <div class = "text-header">
                                <router-link :to="{ name: 'item', params: { item : item.productName }}">
                                    <p @click="send_data(item)">{{item.productName}}</p>
                                </router-link>  
                            </div>
                            <div class = "text-main">
                                <p style="font-weight : bold;"> DESCRIPT</p>
                                <p>{{item.productTaste}}</p>
                                <p> <i class="far fa-heart fa-bold fa-lg" style="margin-right : 10px;"></i> 
                                        LIKE &nbsp; <span class = "text-item">{{item.likeCount}}</span></p>
                                <p> <i class="far fa-user fa-bold fa-lg" style="margin-right : 10px;"></i> REVIEW &nbsp; 
                                <span class = "text-item">{{item.review}}</span></p>  
                            </div>
                        </span>
                    </div>
                </div>  
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
        width : 80%;
        display : block;
        margin-left : auto;
        margin-right : auto;
    }
    .product-align { 
        display : inline-block;
        width : 100%;
        /* padding : 10px 15px 10px 15px; */
        
    }
    /* //////////////////////////////// */
    
    .product {
        display : flex;
        margin-bottom : 30px;
        width : 100%;
        min-height : 200px;
        /* background-color: white; */
        
    }
    .product-left-section { 
        width : 35%;
        /* min-height : inherit; */
    }
    .product-right-section {
        width : 65%;
        background-color: white;
        border-radius : 0 15px 0 0;
    }
    .product-img {
        vertical-align : top;
        width : 100%;
        height : 100%;
        object-fit : contain;
    }
    .text-header {
        background-color : #FF3820;
        text-align : center;
        font-size : 1.6rem;
        font-weight: bold;
        padding : 10px 8px 10px 8px;
        border-radius : 0 15px 15px 0; 
    }
    .text-header a{
        color : white;
        text-decoration: none;
    }
    .text-header a:hover {
        color : black;
    }
    .text-header p , .text-main p{
        margin : 0;
    }
    .text-main {
        /* background-color: white; */
        font-size : 1rem;
        padding : 20px 10px 20px 20px;
    }
    .text-main p:nth-child(1), .text-main p:nth-child(2) {
        margin-bottom : 2px;
        line-height: 90%;
    }
    /* .text-main p:nth-last-child(1), .text-main p:nth-last-child(2), .text-main p:nth-last-child(4) {
        font-weight : bold;
        margin-left : 2px;
    } */
    .text-main p:nth-last-child(3) {
        margin-top : 10px;
    }
    .text-main p:nth-last-child(2) {
        margin-top : 30px;
        font-weight: bold;
    }
    .text-main p:nth-last-child(1) {
        margin-top : 10px;
        margin-left : 1px;
        font-weight: bold;
    }
    .text-item {
        font-weight: 400;
    }

    


/* /////////////////////////////////////// */
    
    @media (max-width : 700px) {
        .product-item {
            width : 90%;
        }
        .product-align {
            display : block;
            width : 100%;
            margin-left : auto;
            margin-right : auto;
        }
        .product-img {
            width : 100%;
            height : 100%;
            object-fit : contain;  
        } 
        .text-header {
            font-size : 1.2rem;
        }
        .text-main {
            font-size : 1rem;
        }
    }
    
</style>
