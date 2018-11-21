<template>
    <div>
        <!-- {{this.$store.state.reviewTest}} -->
        <transition-group name = "list" tag = "ul">
            <!-- DB에서 가져온 정보를 바로 뿌려주는 부분 -->
            <li class = "shadow" v-for="(review) in this.$store.state.reviewTest" :key="review.reviewID">
                {{review.contents}}
                <span class = "like-button">
                    <span class = "like-count" >{{review.likeCount}}</span>
                    <i class="fas fa-heart fa-bold fa-lg" @click="Count(review)"></i>
                </span>
            </li>
        </transition-group>
        <transition-group name = "list2" tag = "ul">
            <li class = "shadow" v-for="(putreview) in this.putreviews" :key="putreview.reviewID">
                {{putreview.review}}
                <span class = "like-button">
                    <span class = "like-count" >{{putreview.likeCount}}</span>
                    <i class="fas fa-heart fa-bold fa-lg" @click="Count(putreview)"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapMutations, mapGetters  } from 'vuex';

export default {
    data() {
        return {
        }
    },
    methods : {
        ...mapMutations ({
            Count  : 'ClickOneItem',
            Count2 : 'ReturnOneItem'
        }), 
        removeAll(){
            localStorage.clear();
            this.$store.state.reviews = [];
        }
        
    },
    created(){
        this.removeAll();
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
</style>

