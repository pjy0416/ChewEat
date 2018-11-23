<template>
    <div class = "recommend-section">
        <b-carousel id = "carouse2" :interval="3000" v-model="slide2" 
            @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

            <b-carousel-slide 
                img-src = 'https://i.postimg.cc/Ls3Wy458/footerimage1.jpg'>
            </b-carousel-slide>
            <b-carousel-slide
                img-src = 'https://i.postimg.cc/s2s6ZFmd/footerimage2.jpg'>
            </b-carousel-slide>
            <b-carousel-slide 
                img-src = 'https://i.postimg.cc/3JpQXTXd/footerimage3.jpg'>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
        data(){
            return {
                slide2 : 0,
                sliding2 : null,
            }
        },
        methods : {
            onSlideStart(){
                this.sliding2 = true
            },
            onSlideEnd(){
                this.sliding2 = false
            }
        }
    }
</script>

<style scoped>
    .recommend-section {
        margin-bottom : 30px;
    }
</style>
