<template>
    <div class = "page-descriptione">
        <div class = "img-section">
            <div class = "logo-container">
                <router-link :to="{name : home , path : '/home'}">
                <b-img class = "logo" src = 'https://i.postimg.cc/mrz0sK6j/Chew-Eat-logo-white.png' fluid alt="Responsive image" /></router-link>
            </div>
            <b-carousel id = "carousel1" :interval="3000" v-model="slide"
                @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

                <b-carousel-slide 
                    img-src = 'https://i.postimg.cc/qBn1jHgX/pageslide.jpg'>
                </b-carousel-slide>
                <b-carousel-slide
<<<<<<< HEAD
                    img-src = 'https://i.postimg.cc/brVcmy6t/image-1.jpg'>
=======
                    img-src = 'https://i.postimg.cc/Zq263KSp/image-1.jpg'>
>>>>>>> 6bec7af0f68e5d30aedc817fdfedf0198f3bc4c6
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
        width : 20%;
    }

    /* ////////////////////////////////*/
    @media (max-width : 500px) {
        .logo {
            width : 30%;
        }
    }
</style>