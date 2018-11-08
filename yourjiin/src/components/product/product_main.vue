<template>
    <div class = "product-main">
        <div class = "product-item">
            <div class = "product-align">
                <div class = "item">
                    <img class = "item-img" :src="this.items.src" alt="image">
                    <span class = "item-text">
                        <p>{{items.title}}</p>
                        <p>{{items.text}}</p>
                    </span>
                </div>
            </div>
        </div>
        <div class = "product-chart">
            <chart-vue class = "product-chart" v-bind:chartdata="value"></chart-vue>
        </div>
    </div>
</template>

<script>
import ChartVue from '../common/chart.vue'; 

export default {
   data(){
       return {
            items : {
                id : 0, src : 'https://picsum.photos/150/150/?image=25', 
                title : 'title0', text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', item : 'item0'
            },
            value : {
                data1: 30, data2 : 35, data3: 40, data4: 38, data5: 45
            }
       }
   },
   components : {
       ChartVue
   }
}
</script>

<style scoped>
    .product-item {
        margin-top : 30px;
    }
    .product-align { 
        width : 50%;
        display : block;
        margin-left : auto;
        margin-right : auto;
        padding : 10px 15px 10px 15px;
    }
    
    /* //////////////////////////////// */
    
    .item {
        display : flex;
        margin-bottom : 30px;
    }
    .item-img {
        vertical-align : top;
        max-width : 20rem;
    }
    .item-text {
        width : 80%;
        padding : 10px 5px 10px 5px;
        margin : 15px 10px 15px 10px;
        border : 1px solid gray;
    }
    .link-btn {

        display : block;
        margin-left : auto;
        margin-right : auto;
    }
/* /////////////////////////////////////// */
    .product-chart {
        display : block;
        width : 70%;
        margin-left : auto;
        margin-right : auto;
        margin-top : 20px;
        margin-bottom : 30px;
    }

/* //////////////////////////////////////// */

    @media (max-width : 700px) {
        .product-align {
            display : block;
            width : 100%;
            margin-left : auto;
            margin-right : auto;
        }
        .product-chart {
            width : 100%;
        }
    }
    
</style>

