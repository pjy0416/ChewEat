<template>
  <div id="app">
    <Navigation></Navigation>

    <transition name="fade" mode="out-in" :key="$route.params.id">
      <router-view></router-view>  
    </transition>  
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/navigation.vue';
import Footer from './components/footer.vue';
export default {
  name: 'app',
  components: {
    Navigation,
    Footer
  },
  

}
</script>

<style>
  /* 라우터 트랜지션 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave-to
  /* .routing-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  #app {
    font-family: 'Noto Sans', sans-serif;
    background-color: #EEEEEF;
  }
</style>