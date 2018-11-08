<template>
    <div class = "commodity-name">
        <!-- <h2 class = "header">{{ header | capitalize }}</h2> -->
        <h2 class = "commodity-header">{{ $route.params.id | capitalize }}</h2>
        <!-- 후에 데이터 전역화를 통해서 바꾸기 -->
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
        text-align : center;
    }
    .commodity-header {
        width : 70%;
        display : block;
        margin-left : auto;
        margin-right : auto;
        padding : 20px 10px 10px 20px;
        font-size : 2.7rem;
        font-weight: 700;
        letter-spacing: 5px;
    }
</style>
