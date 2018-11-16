<template>
<!-- <label for="male">Male</label>
  <input type="radio" name="gender" id="male" value="male"> -->
  
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
    </div>
</template>

<script>
import Modal from '../../common/modal.vue';

export default {
    data() {
        return {
            review : "",
            showModal : false
        }
    },
    components : {
        Modal
    },
    methods : {
        addTodo(){
            if(this.review !== ''){
                // this.$emit('addItem' , this.review)
                this.$store.commit('addOneItem', this.review)
                this.review = ''
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
        border-radius: 5px;
    }
    .inputBox input{
        width : 80%;
        text-align : center;
        border-style: none;
        font-size : 1rem;
    }
    .addContainer {
        float : right;
        background : white;
        width: 3rem;
        border-radius: 0 5px 0 5px;
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
    @media(min-width : 700px) {

    }
</style>

