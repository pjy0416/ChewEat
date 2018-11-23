<template>
    <div class = "noodle-category">
        <div class = "category-section">
          <b-row>
            <b-col class = "category-column"  v-for="taste in this.$store.state.noodle" :key="taste.text">
              <input class = "btn btn-default" type="submit" :value="taste.text"  @click="send_data(taste.value, $event)" >
            </b-col>
          </b-row>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data(){
        return {
        }
    },
    methods : {
       ...mapMutations({
          send_data : 'push_data'
       }),
   },
}
</script>

<style scoped>
    .noodle-category {
        width : 100%;
        margin-left : 0;
    }
    .category-section { 
        width : 70%;
        display : block;
        margin-left : auto;
        margin-right : auto;
        background-color : white;
        border-radius : 15px 15px 15px 15px;
        padding : 10px 10px 10px 10px;
    }
    .category-column {
      /* border-style : none groove none none; */
      margin : 0;
    }
    .category-column:nth-last-child(1), .category-column:nth-last-child(2), .category-column:nth-last-child(3), 
      .category-column:nth-last-child(4) {
      border-left : 1px solid rgba(0, 0, 0, 0.2);
    }
    
   
    .btn-default {
      background-color: white;
      color : black; 
      width : 100%;
      font-size : 1.2rem;
      font-weight : bold;
      border : none;
    }
    .btn-default:hover,
    .btn-default:active,
    .btn-default:visited,
    .btn-default:focus {
        background-color : white;
        color : #FF3820;
    }
    
    
/* ////////////////////////////////////////////// */
    @media (max-width : 800px) {
      .category-section {
        width : 90%;
      }
    }
    @media (max-width : 500px) {
      .category-column {
        margin : 7px 0 7px 0;
      }
      .category-column:nth-last-child(2) {
        border : none;
      }
    }
</style>
