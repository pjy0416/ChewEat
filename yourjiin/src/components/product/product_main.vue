<template>
    <div class = "item-container">
        <div class = "item-main">
            <div class = "item-align">
                <div class = "item-image-section">
                    <!-- <b-img class = "item-img" :src="this.information.url" fluid alt="image"/> -->
                    <b-img class = "item-img" src="https://i.postimg.cc/mrgQqF8W/Chew-Eat-favor1.jpg" alt="image"/>
                </div>
                <div class = "item-text-section">
                    <div class = "item-text-header">
                        {{information.productName}}
                    </div>
                    <div class = "item-text-main">
                        <div class = "item-text-main-left">
                            <div class = "left-main-nutrient">
                                <i class="fas fa-apple-alt fa-lg" style="margin-right:10px;" ></i>Nutrient Section
                                <p class = "information-p">{{information.productMatrials}}</p>
                            </div>
                            <div class = "left-main-allerginic">
                                <i class="fas fa-exclamation-circle fa-bold fa-lg" style="margin-right:10px;" ></i>Allergenic Section
                                <p class = "information-p">{{information.allergenic}}</p>
                            </div>
                        </div>
                        <div class = "item-text-main-right">
                            <div class = "right-main-information">
                                <span class = "information-like">
                                    <p @click="Count(information.like ++)" style="margin-bottom : 20px;"><i class="far fa-heart fa-bold fa-lg" style="margin-right:10px;" ></i>
                                        Like &nbsp;
                                        <span class = "information-item" >{{information.likeCount}}</span></p>
                                </span>
                                <span class = "information-review">
                                    <p style="margin-left : 2px; margin-bottom : 20px;" >
                                        <i class="far fa-user fa-bold fa-lg" style="margin-right:10px;"></i>
                                        Review &nbsp;
                                        <span class = "information-item">{{information.review}}</span></p>
                                </span>
                            </div>
                            <div class = "right-main-comment">
                                <i class="far fa-comment-dots fa-bold fa-lg" style="margin-right:10px;"></i>Comment 
                                <p class = "information-p">{{information.createdTime}}</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////// -->
        <div class = "item-chart">
            <div class = "chart-header">
                Nutrient Percent
            </div>
            <div class = "chart-main">
                <chart-module class = "item-chart"></chart-module>
            </div>
        </div>
    </div>
</template>

<script> 
import ChartModule from '../common/Chartmodule.vue';
import axios from 'axios';

export default {
   data(){
       return {
            value : {
                data1: 30, data2 : 35, data3: 40, data4: 38, data5: 45, data6 : 32
            },
            information : [],
       }
   },
   created(){
        this.information = this.$store.state.information;

        this.ProductID = this.$store.state.information.productID;
        const chartroot = 'commodity/product/information/detail';
        axios.get(`${chartroot}/${this.ProductID}`)
            .then( response => 
                (this.chartdata = response.data))
            .catch()

        this.chartdata = this.$store.state.charts;

   },
   components : {
       ChartModule
   }
}
</script>

<style scoped>
    .item-main {
        margin-top : 30px;
        width : 80%;
        display : block;
        margin-left : auto;
        margin-right : auto;
    }
    /* //////////////////////////////// */
    .item-image-section , .item-text-section {
        display : inline-block;
    }
    .item-image-section {
        width : 30%;
        background-color : white;
    }
    .item-img {
        vertical-align : bottom;
        max-width : 100%;
        height : auto;
    }

    /* //////////////////////////////////////////// */
    .item-text-section {
        width : 70%;
        vertical-align: top;
        background-color : white;
    }
    .item-text-header {
        /* width : 80%; */
        background-color : #FF3820;
        text-align : center;
        font-size : 1.6rem;
        font-weight: bold;
        color : white;
        padding : 10px 8px 10px 8px;
        border-radius : 0 15px 15px 0;
    }
    .item-text-main i {
        margin-right : 4px;
    }
    .item-text-main-left , .item-text-main-right {
        display : inline-block;
        padding : 10px 15px 10px 15px;
        font-size : 1.2rem;
    }
    .item-text-main-left {
        width : 50%;
    }
    .left-main-nutrient {
        margin-bottom : 15px;
        font-weight: bold;
    }
    .left-main-allerginic {
        font-weight: bold;
    }
    .item-text-main-right {
        width : 50%;
        vertical-align: top;
    }
    .information-like , .information-review{ 
        font-weight: bold;
    }
    
    .information-item {
        font-weight: 400;
    }
    .right-main-comment {
        font-weight: bold;
    }
    .information-p {
        margin-top : 10px; 
        font-weight : 300;
        padding : 0 0 0 32px;
    }
    .information-p:nth-last-child(1){
        margin-left : 5px;
    }
/* /////////////////////////////////////// */
    .item-chart {
        width : 60%;
        display : block;
        margin : 50px auto 70px auto;
    }
    .chart-header {
        text-align: center;
        font-size: 1.8rem;
        font-weight: 900;
        margin-bottom : 30px;
    }

/* //////////////////////////////////////// */
    @media(max-width : 1000px) {
        .item-chart {
            width : 80%;
        }
    }
    @media (max-width : 700px) {
        .item-image-section , .item-text-section {
            display : block;
        }
        .item-image-section {
            width : 40%;
        }
        .item-text-section {
            width : 100%;
        }
        .item-text-header {
            width : 60%;
            font-size : 1.3rem;
        }
        .item-chart {
            width : 100%;
        }
        .chart-main {
            width : 100%;
        }
    }
    @media (max-width : 520px) {
        .item-image-section {
            width : 100%;
        }
        .item-img {
            width : 100%;
        }
        .item-text-main-left , .item-text-main-right {
            font-size : 0.9rem;
        }
        .item-chart {
            margin : 30px auto 30px auto;
        }
        .chart-header {
            font-size : 1.3em;
        }
        
    }    
</style>

