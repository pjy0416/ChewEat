<template>
    <div>
        <transition-group name = "list" tag = "ul">
            <li class = "shadow" v-for="(review) in this.$store.state.reviews" :key="review.item">
                {{review.item}}
                <span class = "like-button">
                    <i class="far fa-thumbs-up" @click="Count(review.count++)"></i>
                    <span class = "like-count">{{review.count}}</span>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>

export default {
   
}
</script>

<style scoped>
    ul{
        list-style-type: none;
        padding-left: 0px;
        margin-top : 0;
        text-align: left;
    }
    li{
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin : 0.2rem 0;
        padding : 0 0.9rem;
        background: white;
        border-radius: 5px;
        align-items : center;
    }
    .like-button {
        color : blue;
        margin-left : auto;
    }
    .like-count { 
        color : black;
        margin-left : 5px;
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

