<script setup>
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n({useScope: 'global'})
let token = localStorage.getItem('token')
function ru() {
    locale.value = 'ru'
}
function uz() {
    locale.value = 'uz'
}
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__logo">
                    <a href="/" style="display: flex; align-items: center;">
                        <img src="/header__logo.svg" alt="">
                        <h2 class="header__logo-title">
                            {{$t('title')}} 
                        </h2>
                    </a>
                </div>
                <div class="header__center">
                    <router-link to="/radio">
                        {{ $t('item') }}
                    </router-link>
                    <router-link to="/profile">
                        {{ $t('item-a-1') }}
                    </router-link>
                    <router-link to="">
                        {{ $t('item-a-2') }}
                    </router-link>
                    <router-link to="">
                        {{ $t('item-a-3') }}
                    </router-link>
                </div>
                <div class="header__right">
                    <p class="header__right-text" @click="uz">
                        O'z |
                    </p>
                    <p class="header__right-text1" @click="ru">
                        Рус
                    </p>
                    <div v-if="token">
                        <router-link to="/login">
                            <h2 class="header__right-title">{{ $t('exit') }}</h2>
                        </router-link>
                    </div>
                    <router-link to="/login" v-if="!token">
                        <h2 class="header__right-title">
                            {{ token ? 'Ulug`bek' :  $t('exit') }}
                        </h2>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>
<style>
.header {
    background: #FFF;
    box-shadow: 12px 4px 24px 0px rgba(0, 0, 0, 0.06);
}
.container {
}
.header__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header__logo {
    display: flex;
    align-items: center;
}
.header__logo-title {
    width: 172px;
    color: #000;
    font-size: 15px;
    font-family: Gilroy;
    font-weight: 700;
    line-height: 17px;
    margin-left: 14px;
}
.header__center {
    display: flex;
    margin-left: 79px;
}
.header__center a {
    color: #000;
    font-size: 15px;
    font-family: Gilroy;
    font-weight: 500;
    margin-right: 33px;
}
.header__right {
    display: flex;
    margin-left: 76px;
}

.header__right-text{
    color: #4A4A4A;
    font-size: 14px;
    font-family: Gilroy;
    font-weight: 500;
    margin-right: 3px;
}
.header__right-text1{
    color: #4A4A4A;
    font-size: 14px;
    font-family: Gilroy;
    font-weight: 500;
    margin-right: 66px;
    margin-left: 3px;
}
.header__right-title{
    color: #4E72CA;
    font-size: 17px;
    font-family: Gilroy;
    font-weight: 700;
}
</style>