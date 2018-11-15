<template>
    <div class = "inputBox shadow">
        <input type="text" v-model="review" v-on:keyup.enter="addTodo">
        <span class = "addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"></i>
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
        border-style: none;
        font-size : 1rem;
    }
    .addContainer {
        float : right;
        background : linear-gradient(to right, #6478FB, #8763FB);
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
</style>

