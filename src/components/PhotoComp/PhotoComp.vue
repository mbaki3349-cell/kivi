<script setup>
import {GetAll} from '../../Servic/Servic.js'
import {our} from '../FetchAll.js'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom.vue'
import FooterTop from '../../components/FooterTop/FooterTop.vue'
GetAll()
</script>

<template>
    <HeaderBottom />
    <section class="photo__header">
        <div class="container">
            <div class="photo__wrapper">
                <div class="photo__header-top">
                    <h2 class="photo__header-top-header">
                        Здравствуйте Зухриддин Темиров
                    </h2>
                    <div class="photo__header-topbtn-wrapper">
                        <p class="photo__header-top-text">Ваш счет: 2 3000 сум</p>
                        <button class="photo__header-top-btn">
                            <p class="photo__header-top-btn-text">
                                +
                            </p>
                            Пополнить
                        </button>
                    </div>
                </div>
                <div class="photo__header-bottom">
                    <router-link to="/profile" class="photo__header-bottom-link">
                        <h2 class="photo__header-bottom-header">
                            Объявления                                                                           
                        </h2>
                    </router-link>
                    <router-link to="/message" class="photo__header-bottom-link">
                        <h2 class="photo__header-bottom-header">
                            Сообщения
                        </h2>
                    </router-link>
                    <router-link to="/payments" class="photo__header-bottom-link">
                        <h2 class="photo__header-bottom-header">
                            Платежи и счёт
                        </h2>
                    </router-link>
                    <router-link to="/settings" class="photo__header-bottom-link">
                        <h2 class="photo__header-bottom-header">
                            Настройки
                        </h2>
                    </router-link>
                    <router-link to="/business" class="photo__header-bottom-link">
                        <h2 class="photo__header-bottom-header">
                            Мой бизнес
                        </h2>
                    </router-link>
                </div>
            </div>
            
        </div>
    </section>
    
    <section class="photo__section">
        <div class="container">
            <div class="photo__section-wrapper">
                <div class="photo__section-text">
                    <p class="photo__section-text-text">
                        Фото
                    </p>         
                    <p class="photo__section-text-text">
                        Название
                    </p>         
                    <p class="photo__section-text-text">
                        Цена
                    </p>         
                    <p class="photo__section-text-text">
                        Дата
                    </p>         
                    <p class="photo__section-text-text">
                        Действие
                    </p>         
                </div>
                <RouterView></RouterView>
            </div>
        </div>
    </section>
    <FooterTop />
</template>

<style>
.photo__header{
    background-color: #fff;
}
.photo__section{
    background: rgba(0, 0, 0, 0.05);
}
.container {
}
.photo__wrapper {
}
.photo__header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #979797;
    padding-bottom: 8px;
}
.photo__header-top-header {
    color: #414D6A;
    text-align: center;
    font-family: glory;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.photo__header-top-text {
    color: #304FFF;
    text-align: center;
    font-family: glory;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 26px;
}
.photo__header-topbtn-wrapper{
    display: flex; 
    align-items: center;
}
.photo__header-top-btn {
    border-radius: 100px 5px 5px 100px;
    border: 1px solid #41D481;
    background: #FFF;
    display: flex;
    padding: 8px 22px 10px 0px; 
    align-items: center;
    height: 35px;
}
.photo__header-top-btn-text {
    color: #000;
    font-family: glory;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: #41D481;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 14px;
}

.photo__section-text{
    width: 719px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding-top: 15px;
    
}
.photo__section-FetchAll {
}
.photo__section-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 21px;
}
.photo__section-item {
    background: #FFFFFF;
    margin-bottom: 21px;
    border-radius: 8px;
}
.photo__section-item-header {
    color: #000;
    font-family: glory;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 254px;
}
.photo__section-item-text {
    color: #000;
    font-family: glory;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.photo__header-bottom {
    display: flex;
}
.photo__header-bottom-link {
    margin-right: 60px;
    margin-top: 15px;
}
.photo__header-bottom-header {
    color: #304FFF;
    text-align: center;
    font-family: glory;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>