<template>
    <div>
        <!-- {{this.$store.state.reviewTest}} -->
        <transition-group name = "list" tag = "ul">
            <!-- DB에서 가져온 정보를 바로 뿌려주는 부분 -->
            <li class = "shadow" v-for="review in this.$store.state.reviewTest" :key="review.reviewID">
                {{review.contents}}
                <div class = "like-button">
                    <span class = "like-count" @click="review.likeCount++" >{{review.likeCount}}</span>
                    <span class = "like-btn" @click="SendLike(review.reviewID)"><i class="fas fa-heart fa-bold fa-lg" ></i></span>
                </div>
            </li>
        </transition-group>
        <transition-group name = "list2" tag = "ul">
            <li class = "shadow" v-for="(putreview) in this.putreviews" :key="putreview.reviewID">
                {{putreview.review}}
                <div class = "like-button">
                    <span class = "like-count" @click="putreview.likeCount" >{{putreview.likeCount}}</span>
                    <span class = "like-btn"  @click="SendLike(putreview.reviewID)"><i class="fas fa-heart fa-bold fa-lg" ></i></span>
                </div>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
    data() {
        return {
            like : false,
            reviewRoot : [],
        }
    },
    created(){

        this.removeAll();
    },
    methods : {
        removeAll(){
            localStorage.clear();
            this.$store.state.reviews = [];
        },
        SendLike(reviewID) {
            if(this.like == false){
                this.like = true;
                axios.post(`./information/review/likeCount/review/${reviewID}`, {
                    reviewID : reviewID,
                    likeCount : this.like,
                })
           }
           else{
               this.like = false;
               axios.post(`./information/review/likeCount/review/${reviewID}`, {
                    reviewID : reviewID,
                    likeCount : this.like
                })
           }   
       },

    },
    
    computed : {
        ...mapGetters(['putreviews'])
    }
}
</script>

<style scoped>
    ul{
        list-style-type: none;
        padding-left: 0px;
        margin-top : 0;
        text-align: left;
    }
    .shadow{
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin : 0.2rem 0;
        padding : 0 0.9rem;
        background: white;
        border-radius: 15px;
        align-items : center;
        margin-bottom : 15px;
    }
    .shadow:hover {
        background-color : #EEEEEF;
    }
    .like-button {
        color : #FF3820;
        margin-left : auto;
        margin-right : 10px;
    }
    .like-btn {
        width : 2rem;
    }
    .like-btn:hover{
        color : black;
    }
    .like-count { 
        color : black;
        margin-right : 15px;
    }

    /* list item transition */ 
    .list-enter-active, .list-leave-active{
        transition : all 1s;
    }
    .list-enter, .list-leave-to{
        opacity : 0;
        transform : translateY(30px);
    }
    /* list2 item transition */
    .list2-enter-active, .list2-leave-active{
        transition : all 1s;
    }
    .list2-enter, .list2-leave-to{
        opacity : 0;
        transform : translateY(30px);
    }
</style>

