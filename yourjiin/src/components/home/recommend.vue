<template>
    <div class = "recommend-section">
        <b-carousel id = "carouse2" :interval="1500" v-model="slide2" 
            @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

            <b-carousel-slide 
                img-src = 'https://i.postimg.cc/k5RYRKCv/Kakao-Talk-20181118-231404910.jpg'>
            </b-carousel-slide>
            <b-carousel-slide
                img-src = 'https://i.postimg.cc/k5RYRKCv/Kakao-Talk-20181118-231404910.jpg'>
            </b-carousel-slide>
            <b-carousel-slide 
                img-src = 'https://i.postimg.cc/k5RYRKCv/Kakao-Talk-20181118-231404910.jpg'>
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
