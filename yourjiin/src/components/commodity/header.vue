<template>
    <div class = "commodity-name">
        <p class = "commodity-header">{{ $route.params.id | capitalize }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            header : []
        }
    },
    filters: {
        capitalize (value) {
            if (!value) return ''
            value = value.toString()
            return value.toUpperCase()
        }
    }
}
</script>

<style scoped>
    .commodity-name {
        width : 40%;
        min-height : 50px;
        display : block;
        margin-left : auto;
        margin-right : auto;
        text-align: center;
        background-color : #FF3820;
        border-radius : 20px 20px 0 0;
        padding : 10px 0 0 0;
    }
    .commodity-header {
        font-size : 1.4rem;
        font-weight: 900;
        letter-spacing: 2px;
        margin : 0 0 0 0;
        color : white;

    }

    /* /////////////////////////////// */
    @media(max-width : 500px) {
        .commodity-name {
            width : 50%;
        }
        .commodity-header {
            font-size : 1.2rem;
        }
    }
</style>
