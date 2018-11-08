<template>
    <div class = "category-container">
        <div class = "category">
            <div class = "category-header">
                <label>Selected <code>options</code> what you want :</label>
            </div>
            <div class = "category-main">
                <b-form-group >
                    <b-form-radio-group id = "radio" name ="taste"
                        v-model="selected" :options="this.$store.state.options">
                    </b-form-radio-group>
                </b-form-group>
            </div>
            <div class = "category-footer">
                Show it : &nbsp; <strong> {{selected}} </strong>
                <b-button class = "submitbtn" variant = "success" size = "sm" @click="send_data(selected)"><i class="fas fa-search fa-lg"></i></b-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
   data(){
       return {
           selected : [],
       }
   },
   methods : {
       ...mapMutations({
           send_data : 'push_data'
       }),
   }
   
}
</script>

<style scoped>
    .category-container {
        margin-top : 15px;
        text-align : center;
        padding : 10px 0 10px 0;
    }
    .category {
        width : 100%;
        margin-left : 17%;        
    }
    .category-header {
        text-align : left;
        font-size : 1.3rem;
    }
    .category-main {
        display : flex;
        align-items : center;
        margin-left : 20px; 
    }
    .category-footer {
        display : flex;
        align-items : center;
    }
    .submitbtn {
        margin-left : 10px;
    }

    /* //////////////////////////////////////// */
    @media (max-width : 700px){
        .category {
            margin-left : 15%;
        }
    }
    @media (max-width : 500px) {
        .category { 
            margin-left : 10%;
        }
    }
</style>
