<template>
    <div class = "logo-container">
        <!-- <b-img src='https://i.postimg.cc/MGLq0ygP/Chew-Eat-logo-red.png' fluid class = "logo" /> -->
        <router-link :to="{name : home , path : '/home'}">
        <b-img class = "logo" src = 'https://i.postimg.cc/MGLq0ygP/Chew-Eat-logo-red.png' fluid alt="Responsive image" /></router-link>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>
    .logo-container{
        position : absolute;
        top : 20px;
        left : 44%;
    }
    .logo {
        width : 20%;
    }

    /* /////////////////////////////////// */

    @media (max-width : 500px) {
        .logo-container {
            left : 34%;
        }
        .logo {
            width : 53%;
        }
    }
</style>
