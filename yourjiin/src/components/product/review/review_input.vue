<template>
    <div class = "inputBox shadow">
        <input type="text" v-model="review" v-on:keyup.enter="addTodo">
        <span class = "addContainer" @click="addTodo">
            <i class="fas fa-paper-plane fa-lg addBtn" style="color : #FF3820;"></i>
        </span>
        
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">
                WARNING  
            </h3>
            
            <i slot="icon" class="closeModalBtn fas fa-times fa-2x" @click="showModal = false"></i>

            <div slot="body">
                No Text entered here!! <br>
                Please enter any Text
            </div>
        </Modal>
        <!-- <review-list id = "review-list"></review-list> -->
    </div>

</template>

<script>
import Modal from '../../common/modal.vue';
import axios from 'axios';

export default {
    data() {
        return {
            review : "",
            showModal : false,
        }
    },
    components : {
        Modal,
        // ReviewList
    },
    created(){
        
    },
    methods : {
        addTodo(){
            if(this.review !== ''){
                // this.$emit('addItem' , this.review)
                this.$store.commit('addOneItem', {
                    review : this.review, 
                    comment : this.$store.state.reviewTest[0].commentID, 
                    like :  this.$store.state.reviewTest[0].likeCount, 
                    product :  this.$store.state.reviewTest[0].productID
                });

            axios.post(`./information/review/addReview/${this.$store.state.reviewTest[0].productID}`, {
                productID : this.$store.state.reviewTest[0].productID,
                review : this.review, 
            })
               .then( response => {
                   console.log(response);
                })
                .catch( error =>  {
                    console.log(error);
                });

                this.review = '';
            }
            else {
                this.showModal = !this.showModal;
            }
        }
    }
}
</script>

<style scoped>
    input:focus{
        outline : none;
    }
    .inputBox{
        background : white;
        height: 52px;
        line-height: 50px;
        border-radius: 15px;
        margin-bottom : 50px;
    }
    .inputBox:hover {
        background-color : #EEEEEF;
    }
    .inputBox input{
        width : 90%;
        text-align : center;
        border-style: none;
        font-size : 1rem;
    }
    .inputBox input:hover {
        background-color: #EEEEEF;
    }
    .addContainer {
        float : right;
        width: 3rem;
        border-radius: 0 5px 0 5px;
        margin-right : 10px;
    }
    .addbtn{
        color : white;
        vertical-align: middle;
    }

    /* ////////////////////////////////////// */

    .closeModalBtn{
        color : #42b983;
        float : right;
        /* margin-top : 3%; */
    }

    /* #review-list {
        margin-top : 100px;
    } */

    @media(max-width : 760px) {
        .inputBox input {
            width : 80%;
        }
    }
    @media(max-width : 500px) {
        .inputBox input {
            width : 80%;
        }
    }
</style>

