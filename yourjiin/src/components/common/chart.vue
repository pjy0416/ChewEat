<template>
  <canvas ref="myChart"></canvas>
</template>

<script>
//chart를 설치 -> plugin 폴더에 chartPlugin.js를 생성
//main.js에 선언 -> mounted로 연결 -> 화면에 렌더링

export default {
    data(){
        return {
            data : []
        }
    },
    props : ['chartdata'],
    mounted() {
        this.data = this.chartdata;

        new this.ChartJS(this.$refs.myChart, {
            // The type of chart we want to create
            type: 'polarArea',

            // The data for our dataset
            data: {
                labels: ["figure1", "figure2", "figure3", "figure4", "figure5"],
                datasets: [{
                    label: "Nutrient",
                    backgroundColor: [
                        '#f1c40f', '#e67e22', '#16a085', '#2980b9','#8e44ad'
                    ],
                    data: [this.data.data1, this.data.data2, this.data.data3, this.data.data4, this.data.data5],
                }]
            },

            // Configuration options go here
            options: {
                animation : {
                    animateRotate : true,
                    animateScale : true
                },
                responsive : true
            }
        });
    }
}
</script>