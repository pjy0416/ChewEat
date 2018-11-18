<template>
    <div class = "famous-commodity">
        <div class = "section-name">
            <p>FAMOUS COMMODITY</p>
        </div>
        <div class = "section-image">
            <b-carousel id = "carousel" controls :interval="false"
                    v-model="slide">
                <b-carousel-slide img-src='https://i.postimg.cc/HL3D3bRD/Kakao-Talk-20181118-231344455.png'></b-carousel-slide>
                <b-carousel-slide img-src='https://i.postimg.cc/HL3D3bRD/Kakao-Talk-20181118-231344455.png'></b-carousel-slide>
                <b-carousel-slide img-src='https://i.postimg.cc/HL3D3bRD/Kakao-Talk-20181118-231344455.png'></b-carousel-slide>
            </b-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            slide : 0,
        }
    },
    methods : {

    },
}
</script>

<style scoped>
    .section-name {
        margin : 0 0 25px 0;
        display : block;
        text-align : center;
    }
    .section-name p{
        font-size : 2rem;
        font-weight : 900;
    }
    .section-image {
        display : block;
        margin : 0 auto 0 auto;
        width : 70%;
    }

    /* ///////////////////////////// */

    @media (max-width : 500px) {
        .section-name p {
            font-size : 1.5rem;
        }
        .section-image {
            width : 90%;
        }
    }
</style>
