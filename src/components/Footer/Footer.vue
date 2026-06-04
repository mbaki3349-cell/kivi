<script setup>
import { ref } from 'vue';
import FooterTop from '../FooterTop/FooterTop.vue';
let open = ref(false)
let open1 = ref(false)
let open2 = ref(false)
let open3 = ref(false)
let open4 = ref(false)
let open5 = ref(false)
let open6 = ref(false)
let open7 = ref(false)
let open8 = ref(false)
function bos1() {
    open.value = !open.value
}
function bos2() {
    open1.value = !open1.value
}
function bos3() {
    open2.value = !open2.value
}
function bos4() {
    open3.value = !open3.value
}
function bos5() {
    open4.value = !open4.value
}
function bos6() {
    open5.value = !open5.value
}
function bos7() {
    open6.value = !open6.value
}
function bos8() {
    open7.value = !open7.value
}
function bos9() {
    open8.value = !open8.value
}
</script>

<template>
    <FooterTop />
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <ul class="footer__list">
                    <li class="footer__item" @click="bos1">
                        <h2 class="footer__item-header">
                            Автомобили
                        </h2>
                        <ul class="footer__item-list" v-if="open">
                            <li>
                                <router-link to="/" class="footer__item-link"  > Легковые авто</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" > Мото</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Автобусы</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Грузовые авто</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Сельхозтехника</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Запчасти и Аксессуары</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Прицепы и Спецтехника</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Водный и Другой тнcптa</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="footer__item" @click="bos2">
                        <h2 class="footer__item-header">
                            Недвижимость
                        </h2>
                        <ul class="footer__item-list" v-if="open1">
                            <li>
                                <router-link to="/" class="footer__item-link"  >Аренда квартир</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Аренда домов</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Аренда гаражей и Стоянок</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" > Продажа квартир</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Продажа земли</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Продажа гаражей/Стоянок</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Аренда помещений</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Продажа помещений</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Прочая недвижимость</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Обмен недвижимости</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Коммерческая недвижимость</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="footer__item" @click="bos3">
                        
                        <h2 class="footer__item-header">
                            Электроника
                        </h2>
                        
                        <ul class="footer__item-list" v-if="open2">
                            <li>
                                <router-link to="/" class="footer__item-link" >Телефоны</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Компьютеры</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Ноутбуки, планшеты</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Оргтехника и расходники</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Продажа земли</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >,Фото,Видео и Аудио</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Игры и Приставки</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Техника для дома и Для себя</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Аксессуары и Комплектующие</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Обмен недвижимости</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Техника для наблюдения</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Прочая электроника</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="footer__item" @click="bos4">
                        <h2 class="footer__item-header">
                            Личные вещи
                        </h2>
                        <ul class="footer__item-list" v-if="open3">
                            <li>
                                <router-link to="/" class="footer__item-link" >Одежда, обувь, аксессуары</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Детская одежда и обувь</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Детские товары и Игрушки</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Школьникам</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Часы и украшения</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Товары для красоты и здоровья</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Игры и Приставки</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Разные вещи</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="footer__item" @click="bos5">
                        <h2 class="footer__item-header">
                            Дом и Сад
                        </h2>
                        <ul class="footer__item-list" v-if="open4">
                            <li>
                                <router-link to="/" class="footer__item-link" > Товары для интерьера</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Товары для сада</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Растения</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Продукты питания</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Посуда и Кухонная утварь</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Хоз.инвентарь и Бытовая химия</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Канцтовары и Расходные</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Прочие товары для дома</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="footer__item" @click="bos6">
                        <h2 class="footer__item-header">
                            Товары стройки и ремонта
                        </h2>
                        <ul class="footer__item-list" v-if="open5">
                            <li>
                                <router-link to="/" class="footer__item-link" >Двери и окна</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Сантехника</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Стройматериалы</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Инструменты</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="footer__item" @click="bos7">
                        <h2 class="footer__item-header">
                            Хобби, Отдых и Спорт
                        </h2>
                        <ul class="footer__item-list" v-if="open6">
                            <li>
                                <router-link to="/" class="footer__item-link" > Антиквариат и Коллекции</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Музыкальные инструменты</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Велосипеды</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Товары для спорта и отдыха</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Книги/Журналы</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >CD/DVD/Пластинки/Кассеты</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Канцтовары и Расходные</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Билеты и путешествия</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Охота и рыбалка</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="footer__item" @click="bos8">
                        <h2 class="footer__item-header">
                            Хобби, Отдых и Спорт
                        </h2>
                        <ul class="footer__item-list" v-if="open7">
                            <li>
                                <router-link to="/" class="footer__item-link" >Сырьё и материалы</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Оборудование и аренда</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Производство и обработка</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Товары для спорта и отдыха</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Продажа бизнеса и партнерство</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Финансовые услуги/Бухгалтерия</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Канцтовары и Расходные</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Услуги для красоты и здоровья</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Услуги для красоты и здоровья</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Реклама, Полиграфия и Маркетинг</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Няни, Сиделки и Домработницы</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Обучение, курсы и репетиторы</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Фото, видео, искусство и дизайн</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Перевод и ferf текста</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Юридические услуги</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Прокат товаров</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Праздники и мероприятия</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Перевозки и Аренда авто</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Услуги спецтехники</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Автосервис</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Химчистка и стирка</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Пошив одежды и Обуви</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Ювелирные услуги</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Питание и доставка еды</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Уход за животными</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="footer__item-link" >Другие услуги</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p class="footer__text-cender">
                    Покозать еще
                </p>
                <div class="footer__bottom">
                    <router-link to="/" class="footer__bottom-link">Подать</router-link>
                    <router-link to="/" class="footer__bottom-link">Объявления</router-link>
                    <router-link to="/" class="footer__bottom-link">Магазины</router-link>
                    <router-link to="/" class="footer__bottom-link">Помощь</router-link>
                    <router-link to="/" class="footer__bottom-link">Безопасность</router-link>
                    <router-link to="/" class="footer__bottom-link">объявление</router-link>
                    <router-link to="/" class="footer__bottom-link">сайте на</router-link>
                    <router-link to="/" class="footer__bottom-link">o компании</router-link>
                    <router-link to="/" class="footer__bottom-link">Реклама</router-link>
                    <router-link to="/" class="footer__bottom-link">объявление</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
.footer{
    background: #33383C;
}

.container {
}
.footer__wrapper {
}
.footer__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 52px;
}

.footer__item-header{
    position: relative;
    width: 246px;
    color: #FFF;
    font-size: 14px;
    font-family: glory;
    font-weight: 700;
    margin-top: 25px;
}
.footer__item-header::after{
    position: absolute;
    content: '';
    background-image: url('/footer__icon.svg');
    top: 2px;
    left: -12px;
    height: 10px;
    width: 6px;
}
.footer__item {
    width: 246px;
}
.footer__item-list {
}
.footer__item-link{
    color: #878F99;
    font-size: 14px;
    font-family: glory;
    font-weight: 500;
    line-height: 29px;
    width: 246px;
}
.footer__text-cender{
    color: #66717A;
    font-size: 15px;
    font-family: glory;
    font-weight: 600;
    text-align: center;
    padding: 34px 0;
    border-bottom: 2px solid #4C565E;
    position: relative;   
}
.footer__text-cender::after{
    position: absolute;
    content: '';
    background-image: url('/footer__text-center-icon.svg');
    top: 41px;
    left: 629px;
    width: 13px;
    height: 5px;
}
.footer__bottom{
    display: flex;
    justify-content: space-between;
    padding: 27px 0;
}
.footer__bottom-link{
    color: #66717A;
    font-size: 15px;
    font-family: glory;
    font-weight: 600;
}
.footer__bottom-link:hover{
    color: #05F3B3;
    font-size: 15px;
    font-family: glory;
    font-weight: 600;
}
</style>