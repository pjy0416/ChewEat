<template>
    <div class = "product-container">
        <div class = "product-item" >
            <div class = "product-align" v-for="item in this.$store.state.products" :key="item.id" >
                <div class = "item first">
                    <img class = "item-img" :src="item.src" img-alt="image">
                    <span class = "item-text">
                        <p>{{item.title}}</p>
                        <p>{{item.text}}</p>
                        <router-link :to="{ name: 'item', params: { item : item.item }}">
                            <b-button class = "w-75 p-2 mb-1 bg-success link-btn">Link</b-button>
                        </router-link>
                    </span>
                </div>  
            </div> 
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .product-item {
        /* margin : 30px 50px 30px 0; */
        width : 80%;
        display : block;
        margin-left : auto;
        margin-right : auto;
    }
    .product-align { 
        display : inline-block;
        width : 50%;
        padding : 10px 15px 10px 15px;
    }
    
    /* //////////////////////////////// */
    
    .item {
        display : flex;
        margin-bottom : 30px;
    }
    .item-img {
        vertical-align : top;
        max-width : 20rem;
    }
    .item-text {
        width : 80%;
        padding : 10px 5px 10px 5px;
        margin : 15px 10px 15px 10px;
        border : 1px solid gray;
    }
    .link-btn {

        display : block;
        margin-left : auto;
        margin-right : auto;
    }
/* /////////////////////////////////////// */
    @media (max-width : 700px) {
        .product-align {
            display : block;
            width : 90%;
            margin-left : auto;
            margin-right : auto;
        }
    }
    
</style>
