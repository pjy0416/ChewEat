<template>
  <canvas ref="myChart"></canvas>
</template>

<script>
//chart를 설치 -> plugin 폴더에 chartPlugin.js를 생성
//main.js에 선언 -> mounted로 연결 -> 화면에 렌더링
// commodity/product/information/test/1
import axios from 'axios';

export default {
    data(){
        return {
            chartdata : [],
            ProductID : []
        }
    },
    created() {
        this.ProductID = this.$store.state.information.productID;
        const chartroot = 'commodity/product/information/test';
        axios.get(`${chartroot}/${this.ProductID}`)
            .then( response => 
                (this.chartdata = response.data))
            .catch()
    },
    mounted() {
        new this.ChartJS(this.$refs.myChart, {
            // The type of chart we want to create
            type: 'pie',
            // The data for our dataset
            data: {
                datasets: [{
                    label: "Nutrient",
                    backgroundColor: [
                        'rgba(255, 56, 32, 1)', 'rgba(255, 56, 32, 0.7)', 'rgba(255, 56, 32, 0.4)', 'rgba(32, 24, 21, 0.2)',  
                        'rgba(32, 24, 21, 0.4)','rgba(32, 24, 21, 0.7)'  
                    ],
                    data: [this.chartdata.natrium, this.chartdata.carbohydrate, this.chartdata.sugars, 
                            this.chartdata.fat, this.chartdata.cholesterol, this.chartdata.protein],
                }],
                labels: ["Natrium", "Carbohydrate", "Sugars", "Fat", "Cholesterol" , "Protein"],
            },

            // Configuration options go here
            options: {
                legend : {
                    position : 'bottom',
                    labels : {
                        fontSize : 10,
                        padding : 15,
                    },
                    fullWidth : true,
                },
                animation : {
                    animateRotate : true,
                    animateScale : true
                },
                tooltips : {
                    titleFontSize : 30,
                    bodyFontSize : 14,
                    caretPadding : 10,
                    caretSize : 13,
                    xPadding : 50,
                    yPadding : 10,
                    bodySpacing : 30
                }
            }
        });
    }
}
</script>