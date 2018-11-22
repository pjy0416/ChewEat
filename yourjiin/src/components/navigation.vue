<template>
    <div class = "sidebar" v-bind:class = "{ sidebar_active : this.active}">
        <div class = "toggle-btn" @click="toggleComplete()">
            <div v-if="this.$route.name == 'home'">
                <i class="fas fa-bars fa-2x open-btn" v-if="this.open == false" style="color : white;"></i>
                <i class="fas fa-times fa-2x close-btn" v-else style="color : white;"></i>
            </div>
            <div v-else>
                <i class="fas fa-bars fa-2x open-btn" v-if="this.open == false" style="color : #FF3820;"></i>
                <i class="fas fa-times fa-2x close-btn" v-else style="color : #FF3820;"></i>
            </div>
        </div>
        <ul class = "category-section">
            <li class = "logo"><b-img src= 'https://i.postimg.cc/tTPQh83J/Chew-Eat-logo-spoon.png' fluid/></li>
            
            <router-link :to="{name : home , path : '/home'}" class = "routes"><li class = "category"><b-img src = 'https://i.postimg.cc/zGWCYjFW/Chew-Eat-home-icon.png' fluid alt="Responsive image" /></li></router-link>

            <li class = "category" v-for="category in this.$store.state.categories" :key="category.id" @click="PageRefresh()">
                <router-link :to ="{ name: 'commodity', params: { id : category.id }}" class = "routes">
                    <b-img :src="category.url" fluid alt="Responsive image" />
                </router-link>
            </li>

            <!-- <router-link :to="{name : community , path : '/community' }" class = "routes"><li class = "category">Community</li></router-link> -->
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data () {
        return {
            active : true,
            open : true,
        }
    },
    methods : {
        toggleComplete(){
            this.active = ! this.active; 
            this.open = !this.open;
        },
        ...mapMutations({
           PageRefresh : 'remove_data'
       }),
    }
}
</script>

<style scoped>
    .sidebar {
        position : fixed;
        width : 100px;
        height : 100%;
        background : #FF3820;
        top : 0;
        left : -100px;
        transition: all 300ms linear;
        z-index : 1;
    }
    .sidebar_active {
        left : 0px;
    }
    .category-section { 
        margin-top : 40px;
        padding : 0;
        text-align : center;
    }
    .logo {
        width : 30%;
        display : block;
        margin : 0 auto 10px auto;
        list-style: none;
    }
    .category {
        list-style: none;
        width : 80%;
        margin : 10px auto 10px auto;
    }
    .category:nth-child(1) {
        margin-top : 40px;
    }
    .routes{
        color : rgba(230,230,230,0.9);
        text-decoration: none;
    }
    
    .category:visited {
        background-color : white;
        opacity : .8;
    }
    .toggle-btn {
        position : absolute;
        left : 130px;
        top : 30px;
    }
    
</style>
