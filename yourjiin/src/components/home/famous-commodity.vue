<template>
    <div class = "famous-commodity">
        <div class = "section-name">
            <h2>FAMOUS COMMODITY</h2>
        </div>
        <b-carousel id = "carousel1" controls indicators :interval="3000"
            img-width="1024" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54"></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return {
            slide : 0,
            sliding : null
        }
    },
    methods : {
        onSlideStart(){
            this.sliding = true
        },
        onSlideEnd(){
            this.sliding = false
        }
    },
}
</script>

<style scoped>
    .famous-commodity {
        padding : 35px 35px 35px 35px;
        margin-top : 50px;
        margin-bottom : 20px;
    }
    .section-name {
        margin : 0 0 20px 0;
    }
    #carousel1 {
        text-shadow : 1px 1px 2px #333;
        background : "#ababab";
    }
</style>
