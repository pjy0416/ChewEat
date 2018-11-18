<template>
    <div class = "item-container">
        <div class = "item-main">
            <div class = "item-align">
                <div class = "item-image-section">
                    <b-img class = "item-img" :src="this.information.src" fluid alt="image"/>
                </div>
                <div class = "item-text-section">
                    <div class = "item-text-header">
                        {{information.productName}}
                    </div>
                    <div class = "item-text-main">
                        <div class = "item-text-main-left">
                            <div class = "left-main-nutrient">
                                <i class="fas fa-apple-alt fa-lg" ></i>Nutrient Section
                                <p>{{information.productMatrials}}</p>
                            </div>
                            <div class = "left-main-allerginic">
                                <i class="fas fa-exclamation-circle fa-bold fa-lg" ></i>Allerginic Section
                                <p>{{information.allergenic}}</p>
                            </div>
                        </div>
                        <div class = "item-text-main-right">
                            <div class = "right-main-information">
                                <span class = "information-like">
                                    <p @click="Count(information.like ++)"><i class="far fa-heart fa-bold fa-lg" ></i>LIKE &nbsp;
                                        {{information.likeCount}}</p>
                                </span>
                                <span class = "information-review">
                                    <p style="margin-left : 2px;">
                                        <i class="far fa-user fa-bold fa-lg"></i>
                                        REVIEW &nbsp;
                                        {{information.review}}</p>
                                </span>
                            </div>
                            <div class = "right-main-comment">
                                <i class="far fa-comment-dots fa-bold fa-lg"></i>Comment
                                <p>{{information.createdTime}}</p>
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
                <chart-vue class = "item-chart" v-bind:chartdata="value"></chart-vue>
            </div>
        </div>
    </div>
</template>

<script>
import ChartVue from '../common/chart.vue'; 

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
   },
   components : {
       ChartVue
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
        width : 40%;
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
    }
    .item-text-main-right {
        width : 50%;
        vertical-align: top;
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
            width : 60%;
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

