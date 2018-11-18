<template>
    <div class = "page-descriptione">
        <div class = "img-section">
            <div class = "logo-container">
                <b-img src='http://drive.google.com/uc?export=view&id=18bQhp3wslCjsCawTKnS4sXxSc4iFhO1C' fluid class = "logo" />
            </div>
            <b-carousel id = "carousel1" :interval="2000" v-model="slide"
                @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

                <b-carousel-slide 
                    img-src = 'http://drive.google.com/uc?export=view&id=17wMDyk578OauZXcksElbIA_4QGgPbdGd'>
                </b-carousel-slide>
                <b-carousel-slide
                    img-src = 'http://drive.google.com/uc?export=view&id=17wMDyk578OauZXcksElbIA_4QGgPbdGd'>
                </b-carousel-slide>
                <b-carousel-slide 
                    img-src = 'http://drive.google.com/uc?export=view&id=17wMDyk578OauZXcksElbIA_4QGgPbdGd'>
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