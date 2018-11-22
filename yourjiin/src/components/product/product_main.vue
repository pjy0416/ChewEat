<template>
    <div class = "product-container">
        <div class = "information-container">
            <div class = "product-header-section">
                <div class = "product-header">
                    {{this.$store.state.checkedproduct.productName}}
                    title
                </div>
            </div>
            <div class = "product-body-section">
                <div class = "product-body-section-left">
                    <div class = "image-section">
                        <!-- <b-img class = "item-img" :src="this.$store.state.checkedproduct.url" fluid alt="image"/> -->
                        <b-img class = "item-img" src="https://i.postimg.cc/FsGJ5tZM/example.jpg" fluid alt="image"/>
                    </div>
                </div>
                <div class = "product-body-section-right">
                    <div class = "text-section">
                        <div class = "text-top">
                            <div class = "text-top-left">
                                <div class = "text-top-left-header">
                                    <i class="fas fa-apple-alt fa-lg" style="margin-right:10px;" ></i>Nutrient
                                </div>
                                <div class = "text-top-left-body">
                                    {{this.$store.state.checkedproduct.productMatrials}}Nutrient
                                </div>
                            </div>
                            <div class = "text-top-right">
                                <div class = "text-top-right-header">
                                    <i class="far fa-comment-dots fa-bold fa-lg" style="margin-right:10px;"></i>Information
                                </div>
                                <div class = "text-top-right-body">
                                    <p class = "information-p">{{this.$store.state.checkedproduct.overWeight}}overWeight</p>
                                    <p class = "information-p">{{this.$store.state.checkedproduct.perWeight}}perWeight</p>
                                    <p class = "information-p">{{this.$store.state.checkedproduct.kcal}}kcal</p>
                                </div>
                            </div>
                        </div>
                        <div class = "text-bottom">
                            <div class = "text-bottom-left">
                                <div class = "text-bottom-left-header">
                                    <i class="fas fa-exclamation-circle fa-bold fa-lg" style="margin-right:10px;" ></i>Allergenic
                                </div>
                                <div class = "text-bottom-left-body">
                                    {{this.$store.state.checkedproduct.allergenic}}Allergenic
                                </div>
                            </div>
                            <div class = "text-bottom-right">
                                <div class = "text-like">
                                    <div class = "text-like-header">
                                        <i class="far fa-heart fa-bold fa-lg" style= "margin-right:10px;"></i>Like &nbsp;
                                    </div>
                                    <div class = "text-like-body">
                                        {{ this.$store.state.checkedproduct.likeCount }}10
                                    </div>
                                </div>
                                <div class = "text-review">
                                    <div class = "text-review-header" style = "margin-left : 2px;">
                                        <i class="far fa-user fa-bold fa-lg" style="margin-right:10px;"></i>Review &nbsp;
                                    </div>
                                    <div class = "text-review-body">
                                        {{this.$store.state.checkedproduct.review}}10
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class = "item-chart">
            <div class = "chart-header">
                Nutrient Percent
            </div>
            <div class = "chart-main">
                <chart-module class = "item-chart"></chart-module>
            </div>
        </div>
        <div class = "like-button">
            <b-img class = "like-img" :src="unlikeimage" @click="SendLike" alt="iamge" v-if="this.imageChange == true"/>
            <b-img class = "like-img" :src="likeimage" @click="SendLike" alt="iamge" v-else/>
        </div>
    </div>

</template>

<script>
import ChartModule from '../common/Chartmodule.vue';
import axios from 'axios';

export default {
   data(){
       return {
            likeimage : "https://i.postimg.cc/bJ171W1N/thumb.png",
            unlikeimage : "https://i.postimg.cc/5NwyxMCw/thumb-gray.png",
            imageChange : true,

            information : [],
            like : false,
            model : [],

            productNameRoot : [],
            productIDRoot : [],
       }
   },
   
   created() {

        this.productNameRoot = sessionStorage.getItem(sessionStorage.key(sessionStorage.length-1));
        this.productIDRoot = sessionStorage.getItem(sessionStorage.key(sessionStorage.length-2));

        axios.post(`./information/review/${this.productNameRoot}/${this.productIDRoot}`, {
            productID : this.productIDRoot
        })
            .then( response => {
                this.$store.state.checkedproduct = response.data.product;
            })
            .catch( error => {
                console.log(error);
            });
        
        axios.get(`./information/review/${this.productNameRoot}`)
            .then(response =>
                (this.$store.state.charts = response.data.nutrition))
            .catch();

        
   },
   
   methods : {
        SendLike() {
            this.imageChange = !this.imageChange;

            if(this.like === false)
                this.like = true;
            else
               this.like = false;


               axios.post(`./information/review/likeCount/product/${this.productIDRoot}`, {
                    productID : this.productIDRoot,
                    likeCount : this.like
                })
           
       }
   },
   components : {
       ChartModule,
   }
}
</script>

<style scoped>
    .product-container {
        width : 70%;
        display : block;
        margin : 0 auto;
    }
    .information-container {
        background-color : white;
    }
    .product-header {
        width : 60%;
        color : white;
        background-color: #FF3820;
        border-radius : 0 15px 15px 0;
        padding : 20px 10px 20px 10px;
        text-align : center;
        font-size : 2rem;
        font-weight: bold;
    }
    /* ///////////////header//////////////////// */
    .product-body-section {
        display : flex;
    }
    .product-body-section-left {
        width : 35%;
        margin : 0;
        align-items : center;
        padding : 20px;
    }
    .product-body-section-right {
        width : 65%;
        margin : 0;
        font-size : 1rem;
    }
    .image-section {
        /* width : 350px; */
        margin : 0 auto;
    }
    .item-img {
        vertical-align: top;
    }
    /* ///////////////image///////////////////////// */

    .text-section {
        padding : 20px;
        vertical-align: middle;
    }
    .text-top { 
        margin-bottom : 20px;
    }
    .text-top-left, .text-bottom-left {
        display : inline-block;
        width : 45%;
        margin-right : 5%;
        vertical-align: top;
    }
    .text-top-right, .text-bottom-right {
        display : inline-block;
        width : 45%;
        vertical-align: top;
    }
    .text-top-left-header, .text-top-right-header , .text-bottom-left-header , .text-bottom-right-header{
        font-size : 1.2rem;
        font-weight: bold;
    }
    .text-top-left-body, .text-bottom-left-body {
        font-size : 1rem;
        font-weight: 500;
        margin-left : 35px;
    }
    .text-top-right-body {
        font-size : 1rem;
        font-weight: 500;
        margin-left : 35px;
    }
    .text-like {
        margin-bottom : 10px;
    }
    .text-like-header , .text-review-header {
        display : inline-block;
        margin-right : 3px;
        font-size : 1.2rem;
        font-weight: bold;
    }
    .text-like-body , .text-review-body {
        display : inline-block;
        margin-right : 3px;
        font-size : 1rem;
    }
    .information-p {
        margin-bottom : 2px;
    }
    /* /////////////////////text//////////////// */

    .item-chart {
        width : 60%;
        display : block;
        margin : 50px auto 40px auto;
    }
    .chart-header {
        text-align: center;
        font-size: 1.8rem;
        font-weight: 900;
        margin-bottom : 30px;
    }
    /* ///////////////////////chart/////////////// */
    .like-button {
        display : block;
        width : 50%;
        margin-left : auto;
        margin-right : auto;
    }
    .like-img {
        max-width : 7rem;
        display : block;
        margin : 0 auto 30px auto;
    }
    /* /////////////////////////button/////////////// */
    @media(max-width : 900px) {
        
        .product-body-section {
            display : block;
        }
        .product-body-section-right {
            width : 80%;
            display : block;
            margin : 0 auto;
        }
        .product-body-section-left {
            width : 260px;
            display : block;
            margin : 10px auto 0 auto;
        }
        .product-header {
            width : 100%;
            border-radius : 0 0 0 0;
            padding : 10px 5px 10px 5px;
    }
        .item-chart {
            width : 90%;
        }
    }
    @media (max-width : 700px) {
        .item-chart {
            width : 100%;
        }
        .chart-main {
            width : 100%;
        }
    }
    @media (max-width : 520px) {
        .product-container {
            width : 90%;
        }
        .product-body-section-right {
            width : 90%;
        }
        .text-section {
            padding : 0;
            margin-bottom : 20px;
        }
        .item-chart {
            margin : 30px auto 30px auto;
        }
        .chart-header {
            font-size : 1.3em;
        }
        
    }
</style>
