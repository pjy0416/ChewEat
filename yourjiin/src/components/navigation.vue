<template>
    <div class = "sidebar" v-bind:class = "{ sidebar_active : this.active}">
        <div class = "toggle-btn" @click="toggleComplete()">
            <i class="fas fa-bars fa-2x open-btn" v-if="this.open == false"></i>
            <i class="fas fa-times fa-2x close-btn" v-else></i>
        </div>
        <ul class = "category-section">
            <li class = "logo"><b-img center src="https://picsum.photos/125/125/?image=58" alt="center image" /></li>
            
            <a href="/home" class = "routes"><li class = "category">Home</li></a>

            <li class = "category" v-for="category in this.$store.state.categories" :key="category.id">
                <router-link :to ="{ name: 'commodity', params: { id : category.id }}" class = "routes">{{category.value}}</router-link>
            </li>

            <a href="/community" class = "routes"><li class = "category">Community</li></a>
        </ul>
    </div>
</template>

<script>

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
    }
}
</script>

<style scoped>
    .sidebar {
        position : fixed;
        width : 130px;
        height : 100%;
        background : #151719;
        left : -130px;
        transition: all 300ms linear;
    }
    .sidebar_active {
        left : 0px;
    }
    .category-section { 
        margin : 0;
        padding : 0;
        text-align : center;
    }
    .logo {
        margin : 20px 0 20px 0;
        padding : 5px 0 5px 0;
        color : rgba(230,230,230,0.9);
        list-style: none;
    }
    .category {
        list-style: none;
        padding : 15px 10px 15px 10px;
        border-bottom : 1px solid rgba(100,100,100,0.3);
    }
    .routes{
        color : rgba(230,230,230,0.9);
        text-decoration: none;
    }
    .category:hover {
        background-color : green;
        opacity : .8;
        transition : all 200ms linear;
    }
    .category:visited {
        background-color : green;
        opacity : .8;
    }
    .toggle-btn {
        position : absolute;
        left : 135px;
        top : 5px;
    }
    .toggle-btn span {
        display : block;
        width : 30px;
        height : 5px;
        background : #151719;
        margin : 5px 0px;
    }
    
</style>
