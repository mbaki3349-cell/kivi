<script setup>

</script>

<template>
    <section class="top">
        <div class="container">
            <div class="top__wrapper">
                <div class="top__logo">
                    <router-link to="/">
                        <img src="../../../public/footer-top__logo.svg" alt="">
                    </router-link>
                    <h2 class="top__logo-header">
                        Продай, найди, купи все что ты пожелаешь 
                    </h2>
                </div>
                <h2 class="top__center-header">
                    bez сайт бесплатных обьявлений | на базе имеется 234 944 999 шт обяления
                </h2>
                <div class="top__right">
                    <img src="../../../public/footer__top-img-1.png" alt="" style="margin-right: 4px;">
                    <img src="../../../public/footer__top-img-2.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.top {
    background: #282B30;    
    padding: 23px 0;
}
.container {
}
.top__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.top__logo {
    display: flex;
    align-items: center;
}
.top__logo-header {
    color: #FFF;
    font-size: 14px;
    font-family: Gilroy;
    font-weight: 700;
    line-height: 17px;
    margin-left: 14px;
    width: 149px;
}
.top__center-header {
    color: #98A4B7;
    font-size: 15px;
    font-family: Gilroy;
    font-weight: 500;
    width: 307px;
}
.top__right {
    display: flex;
}
</style>