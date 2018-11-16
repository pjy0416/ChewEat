<template>
    <div class = "logo-container">
        <b-img src='http://drive.google.com/uc?export=view&id=1PmtzaDFsYZHZVh-zVACw9txbyj42k7jL' fluid class = "logo" />
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
