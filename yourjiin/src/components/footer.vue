<template>
    <div class = "footer-section">
        <div class = "footer-header">
            <p>이용약관 | 개인정보 처리방침 | 법적고지 및 주의사항 | 고객센터 |</p>
        </div>
        <div class = "footer-main">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem similique dignissimos. <br> Alias blanditiis labore inventore quisquam, magni molestiae quidem unde nam aliquid, <br> 
            error dicta facilis sunt est animi ratione!</p>
        </div>
        <div class = "footer-footer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer-section {
        width : 95%;
        text-align : right;
        padding : 10px 10px 100px 10px;
    }
    .footer-header {
        font-size : 1.3rem;
        color : grey;
    }
    .footer-main {
        font-size : 1rem;
        color : black;
    }
    .footer-footer {
        font-size : 1rem;
        color : black;
    }

    /* ////////////////////////////// */
    @media (max-width : 500px) {
        .footer-header {
            font-size : 0.7rem;
        }
        .footer-main {
            font-size: 0.5rem;
        }
        .footer-footer {
            font-size: 0.5rem;
        }
    }
</style>
