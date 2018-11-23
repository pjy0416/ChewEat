<template>
    <div class = "recommend-section">
        <b-carousel id = "carouse2" :interval="3000" v-model="slide2" 
            @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

            <b-carousel-slide 
<<<<<<< HEAD
                img-src = 'https://i.postimg.cc/Ls3Wy458/footerimage1.jpg'>
            </b-carousel-slide>
            <b-carousel-slide
                img-src = 'https://i.postimg.cc/s2s6ZFmd/footerimage2.jpg'>
            </b-carousel-slide>
            <b-carousel-slide 
                img-src = 'https://i.postimg.cc/3JpQXTXd/footerimage3.jpg'>
=======
                img-src = 'https://i.postimg.cc/VspGWmYf/footerimage1.jpg'>
            </b-carousel-slide>
            <b-carousel-slide
                img-src = 'https://i.postimg.cc/6Q38Ms0c/footerimage2.jpg'>
            </b-carousel-slide>
            <b-carousel-slide 
                img-src = 'https://i.postimg.cc/ZqCqr8bD/footerimage3.jpg'>
>>>>>>> 6bec7af0f68e5d30aedc817fdfedf0198f3bc4c6
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
