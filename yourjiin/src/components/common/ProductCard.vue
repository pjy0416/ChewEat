<template>
    <div class = "item-container">
        <div class = "product-item" >
            <div class = "product-align" v-for="item in this.$store.state.products" :key="item.id" >
                <div class = "item">
                    <div class = "item-left-section">
                        <img class = "item-img" :src="item.src" fluid-grow />
                    </div>
                    <div class = "item-right-section">
                        <span class = "item-text">
                            <div class = "text-header">
                                <router-link :to="{ name: 'item', params: { item : item.item }}">
                                    <p>{{item.title}}</p>
                                </router-link>  
                            </div>
                            <div class = "text-main">
                                <p> <i class="far fa-heart fa-bold fa-lg"></i> LIKE &nbsp; {{item.like}}</p>
                                <p> <i class="far fa-user fa-bold fa-lg"></i> REVIEW &nbsp; {{item.like}}</p>
                                <p> DESCRIPT</p>
                                <p>{{item.dec}}</p>
                            </div>
                            
                        </span>
                    </div>
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
        width : 100%;
        min-height : 200px;
        /* background-color: white; */
        
    }
    .item-left-section , .item-right-section{ 
        width : 50%;
        /* min-height : inherit; */
    }
    .item-right-section {
        background-color: white;
        border-radius : 0 15px 0 0;
    }
    .item-img {
        vertical-align : top;
        width : 100%;
        height : 100%;
        object-fit : contain;
    }
    .text-header {
        background-color : #FF3820;
        text-align : center;
        font-size : 1.6rem;
        font-weight: bold;
        padding : 10px 8px 10px 8px;
        color : white;
        border-radius : 0 15px 15px 0; 
    }
    .text-header p , .text-main p{
        margin : 0;
    }
    .text-main p {
        margin-bottom : 10px;
    }
    .text-main p:nth-last-child(1), .text-main p:nth-last-child(2) , .text-main p:nth-last-child(2) {
        margin-left : 2px;
    }
    .text-main p:nth-last-child(2) {
        font-weight : bold;
    }
    .text-main {
        /* background-color: white; */
        font-size : 1.3rem;
        padding : 20px 10px 20px 10px;
    }
/* /////////////////////////////////////// */
    
    @media (max-width : 700px) {
        .product-item {
            width : 90%;
        }
        .product-align {
            display : block;
            width : 100%;
            margin-left : auto;
            margin-right : auto;
        }
        .item-img {
            width : 100%;
            height : 100%;
            object-fit : contain;  
        } 
        .text-header {
            font-size : 1.2rem;
        }
        .text-main {
            font-size : 1rem;
        }
    }
    
</style>
