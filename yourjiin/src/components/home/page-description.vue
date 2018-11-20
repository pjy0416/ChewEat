<template>
    <div class = "page-descriptione">
        <div class = "img-section">
            <div class = "logo-container">
                <b-img src='https://i.postimg.cc/mrz0sK6j/Chew-Eat-logo-white.png' fluid class = "logo" />
            </div>
            <b-carousel id = "carousel1" :interval="1500" v-model="slide"
                @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

                <b-carousel-slide 
                    img-src = 'https://i.postimg.cc/qBn1jHgX/pageslide.jpg'>
                </b-carousel-slide>
                <b-carousel-slide
                    img-src = 'https://i.postimg.cc/qBn1jHgX/pageslide.jpg'>
                </b-carousel-slide>
                <b-carousel-slide 
                    img-src = 'https://i.postimg.cc/qBn1jHgX/pageslide.jpg'>
                </b-carousel-slide>
            </b-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                slide : 0,
                sliding : null,
            }
        },
        methods : {
            onSlideStart(){
                this.sliding = true
            },
            onSlideEnd(){
                this.sliding = false
            }
        }
    }
</script>

<style scoped>
    .page-description {
        z-index : 9999;
    }
    .logo-container{
        position : absolute;
        top : 30px;
        left : 40%;
        z-index : 1;
    }
    .logo {
        width : 30%;
    }

    /* ////////////////////////////////*/
    @media (max-width : 500px) {
        .logo {
            width : 30%;
        }
    }
</style>