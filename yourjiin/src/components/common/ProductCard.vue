<template>
    <div class = "product-container">
        <div class = "product-item" >
            <div class = "product-align" v-for="item in this.$store.state.products" :key="item.id">
                <div class = "product">
                    <div class = "product-left-section">
                        <img class = "product-img" :src="item.url" fluid alt="image"/>
                    </div>
                    <div class = "product-right-section">
                        <span class = "product-text">
                            <div class = "text-header">
                                <router-link :to="{ name: 'item', params: { item : item.productName }}">
                                    <p @click="send_data(item)">{{item.productName}}</p>
                                </router-link>  
                            </div>
                            <div class = "text-main">
                                <p> <i class="far fa-heart fa-bold fa-lg"></i> LIKE &nbsp; {{item.likeCount}}</p>
                                <p> <i class="far fa-user fa-bold fa-lg"></i> REVIEW &nbsp; {{item.review}}</p>
                                <p> DESCRIPT</p>
                                <p>{{item.productTaste}}</p>
                            </div>
                        </span>
                    </div>
                </div>  
            </div> 
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import axios from 'axios';

export default {
   
    methods : {
        ...mapMutations({
            send_data : 'Send_data'
        }),
        fetchProduct(){
            if(this.$route.params.id == 'snack' && this.$store.state.selected == 'ALL')
                this.$store.dispatch('FETCH_SNACKALL');
            else if(this.$route.params.id == 'snack' && this.$store.state.selected == 'item1')
                this.$store.dispatch('FETCH_SNACKITEM1');
            else if(this.$route.params.id == 'snack' && this.$store.state.selected == 'item2')
                this.$store.dispatch('FETCH_SNACKITEM2');
            else if(this.$route.params.id == 'snack' && this.$store.state.selected == 'item3')
                this.$store.dispatch('FETCH_SNACKITEM3');
            else if(this.$route.params.id == 'snack' && this.$store.state.selected == 'item4')
                this.$store.dispatch('FETCH_SNACKITEM4');
        ////////////////////////////////////////////////////////////////////////////////////////////////    
            else if(this.$route.params.id == 'noodle' && this.$store.state.selected == 'ALL')
                this.$store.dispatch('FETCH_NOODLEALL');
            else if(this.$route.params.id == 'noodle' && this.$store.state.selected == 'item1')
                this.$store.dispatch('FETCH_NOODLEITEM1');
            else if(this.$route.params.id == 'noodle' && this.$store.state.selected == 'item2')
                this.$store.dispatch('FETCH_NOODLEITEM2');
            else if(this.$route.params.id == 'noodle' && this.$store.state.selected == 'item3')
                this.$store.dispatch('FETCH_NOODLEITEM3');
            else if(this.$route.params.id == 'noodle' && this.$store.state.selected == 'item4')
                this.$store.dispatch('FETCH_NOODLEITEM4');
        ////////////////////////////////////////////////////////////////////////////////////////////////    
            else if(this.$route.params.id == 'drink' && this.$store.state.selected == 'ALL')
                this.$store.dispatch('FETCH_DRINKALL');
            else if(this.$route.params.id == 'drink' && this.$store.state.selected == 'item1')
                this.$store.dispatch('FETCH_DRINKITEM1');
            else if(this.$route.params.id == 'drink' && this.$store.state.selected == 'item2')
                this.$store.dispatch('FETCH_DRINKITEM2');
            else if(this.$route.params.id == 'drink' && this.$store.state.selected == 'item3')
                this.$store.dispatch('FETCH_DRINKITEM3');
            else if(this.$route.params.id == 'drink' && this.$store.state.selected == 'item4')
                this.$store.dispatch('FETCH_DRINKITEM4');
        ////////////////////////////////////////////////////////////////////////////////////////////////
            else if(this.$route.params.id == 'dairy' && this.$store.state.selected == 'ALL')
                this.$store.dispatch('FETCH_DAIRYALL');
            else if(this.$route.params.id == 'dairy' && this.$store.state.selected == 'item1')
                this.$store.dispatch('FETCH_DAIRYITEM1');
            else if(this.$route.params.id == 'dairy' && this.$store.state.selected == 'item2')
                this.$store.dispatch('FETCH_DAIRYITEM2');
            else if(this.$route.params.id == 'dairy' && this.$store.state.selected == 'item3')
                this.$store.dispatch('FETCH_DAIRYITEM3');
            else if(this.$route.params.id == 'dairy' && this.$store.state.selected == 'item4')
                this.$store.dispatch('FETCH_DAIRYITEM4');
        ////////////////////////////////////////////////////////////////////////////////////////////////
            else if(this.$route.params.id == 'instant' && this.$store.state.selected == 'ALL')
                this.$store.dispatch('FETCH_INSTANTALL');
            else if(this.$route.params.id == 'instant' && this.$store.state.selected == 'item1')
                this.$store.dispatch('FETCH_INSTANTITEM1');
            else if(this.$route.params.id == 'instant' && this.$store.state.selected == 'item2')
                this.$store.dispatch('FETCH_INSTANTITEM2');
            else if(this.$route.params.id == 'instant' && this.$store.state.selected == 'item3')
                this.$store.dispatch('FETCH_INSTANTITEM3');
            else if(this.$route.params.id == 'instant' && this.$store.state.selected == 'item4')
                this.$store.dispatch('FETCH_INSTANTITEM4');
        },
        fetch_Root({commit}) {
            axios.get(`product/information/${this.$route.params.id}/${this.$store.state.selected}`)
                .then( response => {
                    commit('SET_ROOT', response.data);
                    return response;
                })
                .catch()
        }
    },
    //  axios.get(`${root}/${this.$route.params.id}/${this.$store.state.selected}`);
    // FETCH_ROOT({commit}){
    //     axios.get(`${root}/${this.$route.params.id}/${this.$store.state.selected}`)
    //         .then(response => {
    //             commit('SET_ROOT', response.data);
    //             return response;
    //         })
    //         .catch()
    // },
    data() {
        return {
            param : [],
            item : [],
      }
    },
    created(){
        // this.fetchProduct();
        this.fetch_Root();
        
    }
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
    
    .product {
        display : flex;
        margin-bottom : 30px;
        width : 100%;
        min-height : 200px;
        /* background-color: white; */
        
    }
    .product-left-section , .product-right-section{ 
        width : 50%;
        /* min-height : inherit; */
    }
    .product-right-section {
        background-color: white;
        border-radius : 0 15px 0 0;
    }
    .product-img {
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
        border-radius : 0 15px 15px 0; 
    }
    .text-header a{
        color : white;
        text-decoration: none;
    }
    .text-header a:hover {
        color : black;
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
        .product-img {
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
