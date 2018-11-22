<template>
    <div>
        <!-- {{this.$store.state.reviewTest}} -->
        <transition-group name = "list" tag = "ul">
            <!-- DB에서 가져온 정보를 바로 뿌려주는 부분 -->
            <li class = "shadow" v-for="(review) in this.$store.state.reviewTest" :key="review.reviewID" @click="review.likeCount++">
                {{review.contents}}
                <div class = "like-button">
                    <span class = "like-count" @click="review.likeCount++" >{{review.likeCount}}</span>
                    <span class = "like-btn" @click="SendLike(review.reviewID)">
                        <i class="fas fa-heart fa-bold fa-lg"></i>
                        <!-- <i class="fas fa-heart fa-bold fa-lg" ></i> -->
                    </span>
                </div>
            </li>
        </transition-group>
        <transition-group name = "list2" tag = "ul">
            <li class = "shadow" v-for="(putreview) in this.putreviews" :key="putreview.reviewID" @click="putreview.likeCount++">
                {{putreview.review}} 
                <div class = "like-button">
                    <span class = "like-count">{{putreview.likeCount}}</span>
                    <span class = "like-btn" @click="Backtopage()">
                        <i class="fas fa-heart fa-bold fa-lg" v-bind:class="{checkbutton:putreview.completed}"></i>
                        <!-- <i class="fas fa-heart fa-bold fa-lg"></i> -->
                    </span>
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
            reviewRoot : [],
            like : [],
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
        SendLike(reviewID, reviewCompleted) {

            if(reviewCompleted == false)
                this.like = false;

            else
               this.like = true;
               
               axios.post(`./information/review/likeCount/review/${reviewID}`, {
                    reviewID : reviewID,
                    likeCount : this.like
                })

            

       },
       Backtopage(reviewID, reviewCompleted){
            reviewCompleted = !reviewCompleted;

            if(reviewCompleted == false)
                this.like = false;

            else
               this.like = true;
               
               axios.post(`./information/review/likeCount/review/${reviewID}`, {
                    reviewID : reviewID,
                    likeCount : this.like
            })
           alert('Thank you for your Like');
       }
        
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
        color : rgba(255, 56, 32, 1);
        margin-left : auto;
        margin-right : 10px;
    }
    .like-btn {
        width : 2rem;
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

