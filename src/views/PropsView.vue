<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router";
import HeaderBottom from "../components/HeaderBottom/HeaderBottom.vue";
import Footer from "../components/Footer/Footer.vue";
import ShowCompOur from "../components/ShowComp/ShowCompOur.vue";
let route = useRoute()
let obj = ref([])
async function GetById() {
    await fetch('https://fakestoreapi.com/products/' + route.params.id)
    .then(res => res.json())
    .then(data => obj.value = data)
}
GetById()
let open = ref(false)
function bos() {
    open.value = !open.value
}
let openn = ref(false)
function boss() {
    openn.value = !openn.value
}
</script>

<template>
    <HeaderBottom />
    <section class="props">
        <div class="container">
            <div class="props__wrapper">
                <div class="props__top">
                    <p class="props__top-text">
                        Объявления / Ташкент Недвижимость / Ташкент Квартиры / Ташкент Продажа / Новостройки
                    </p>
                    <h2 class="props__top-header">
                        {{ obj.description }}
                    </h2>
                </div>
                <div class="props__bottom">
                    <div class="props__left">
                        <div class="props__left-smoll-img">
                            <img class="props__left-smoll-img-img" :src="obj.image" alt="image" width="85" height="85">
                            <img class="props__left-smoll-img-img" :src="obj.image" alt="image" width="85" height="85">
                            <img class="props__left-smoll-img-img" :src="obj.image" alt="image" width="85" height="85">
                            <img class="props__left-smoll-img-img" :src="obj.image" alt="image" width="85" height="85">
                            <img class="props__left-smoll-img-img" :src="obj.image" alt="image" width="85" height="85">
                        </div>
                        <img class="props__left-big-img" :src="obj.image" alt="image" width="456" height="475">
                    </div>
                    <div class="props__right">
                        <div class="props__right-text-wrap">
                            <p class="props__right-wrap-text">
                                Артикул: 4418970
                            </p>
                            <p class="props__right-wrap-text">
                                обновлено: 28.04.17 добавлено: 28.04.17
                            </p>
                        </div>
                        <h2 class="props__right-header">
                            {{ obj.price }} $
                        </h2>
                        <p class="props__right-text">
                            Ташкент, Ташкентская область, Юнусабадский район
                        </p>
                        <div class="props__right-phone">
                            <p class="props__right-phone-text">
                                99893 193
                            </p>
                            <p class="props__right-phone-text1" v-if="open">
                                ****
                            </p>
                            <p class="props__right-phone-text1" v-if="!open">
                                3324
                            </p>
                            <h2 class="props__right-phone-header" @click="bos">
                                Покозать польностю
                            </h2>
                        </div>
                        <div class="props__right-phone1">
                            <p class="props__right-phone-text">
                                99893 193
                            </p>
                            <p class="props__right-phone-text1" v-if="openn">
                                ****
                            </p>
                            <p class="props__right-phone-text1" v-if="!openn">
                                3324
                            </p>
                            <h2 class="props__right-phone-header" @click="boss">
                                Покозать польностю
                            </h2>
                        </div>
                        <p class="props__right-polo-text">
                            Автор обьявлении: <span class="props__right-polo-span">Зухриддин Темиров</span>
                        </p>
                        <div class="props__right-card-button">
                            <button class="props__right-card-button-btn">Написать автору</button>
                            <button class="props__right-card-button-btn2">Предложить свою цену</button>
                        </div>
                        <div class="props__right-inner">
                            <div class="props__right-inner-card">
                                <h3 class="props__right-inner-card-header">
                                    Количество комнат:
                                </h3>
                                <p class="props__right-inner-card-text">
                                    6
                                </p>
                            </div>
                            <div class="props__right-inner-card">
                                <h3 class="props__right-inner-card-header">
                                    Количество комнат:
                                </h3>
                                <p class="props__right-inner-card-text">
                                    40 м2
                                </p>
                            </div>
                            <div class="props__right-inner-card">
                                <h3 class="props__right-inner-card-header">
                                    Количество комнат:
                                </h3>
                                <p class="props__right-inner-card-text">
                                    32
                                </p>
                            </div>
                            <div class="props__right-inner-card">
                                <h3 class="props__right-inner-card-header">
                                    Количество комнат:
                                </h3>
                                <p class="props__right-inner-card-text">
                                    6
                                </p>
                            </div>
                            <div class="props__right-inner-card">
                                <h3 class="props__right-inner-card-header">
                                    Количество комнат:
                                </h3>
                                <p class="props__right-inner-card-text">
                                    Первая сдача 
                                </p>
                            </div>
                            <div class="props__right-inner-card">
                                <h3 class="props__right-inner-card-header">
                                    Количество комнат:
                                </h3>
                                <p class="props__right-inner-card-text">
                                    32
                                </p>
                            </div>
                            <div class="props__right-inner-card">
                                <h3 class="props__right-inner-card-header">
                                    Количество комнат:
                                </h3>
                                <p class="props__right-inner-card-link" >
                                    Раздельная
                                </p>
                            </div>
                            <div class="props__right-inner-card">
                                <h3 class="props__right-inner-card-header">
                                    Количество комнат:
                                </h3>
                                <p class="props__right-inner-card-link" >
                                    Раздельная
                                </p>
                            </div>
                            <div class="props__right-inner-card">
                                <h3 class="props__right-inner-card-header">
                                    Количество комнат:
                                </h3>
                                <p class="props__right-inner-card-link" >
                                    Раздельная
                                </p>
                            </div>
                            <div class="props__right-inner-card">
                                <h3 class="props__right-inner-card-header">
                                    Количество комнат:
                                </h3>
                                <p class="props__right-inner-card-link" >
                                    Раздельная
                                </p>
                            </div>
                            <div class="props__right-inner-card">
                                <h3 class="props__right-inner-card-header">
                                    Количество комнат:
                                </h3>
                                <p class="props__right-inner-card-link" >
                                    Раздельная
                                </p>
                            </div>
                            <div class="props__right-inner-card">
                                <h3 class="props__right-inner-card-header">
                                    Количество комнат:
                                </h3>
                                <p class="props__right-inner-card-text">
                                    32
                                </p>
                            </div>
                            <div class="props__right-long">
                                <p class="props-right-long-text">
                                    Санузел
                                </p>
                                <p class="props__right-inner-card-link" >
                                    Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе	
                                </p>
                            </div>
                            <div class="props__right-long-card">
                                <h2 class="props__right-long-card-header">
                                    Срочно продаётся 3 ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден  жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый. 
                                </h2>
                                <h2 class="props__right-long-card-header">
                                    Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд.  наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.
                                </h2>
                                <p class="props__right-botoom-card" style="display: flex; justify-content: space-between; margin-top: 23px;">
                                    Просмотры:10958 <span style="color: red;">Пожаловатся</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <ShowCompOur />
    <Footer />
</template>

<style>
.props {}

.container {}

.props__wrapper {}

.props__top {}

.props__top-text {
    color: #787993;
    font-size: 14px;
    font-family: glory;
    font-weight: 500;
    margin-top: 24px;
}
.props__top-header {
    margin-top: 20px;
    color: #414D6A;
    font-size: 34px;
    font-family: glory;
    font-weight: 500;
}
.props__bottom {
    display: flex;
    justify-content: space-between;
    
}
.props__left {
    margin-top: 19px;
    display: flex;
}
.props__left-smoll-img {
    display: flex;
    flex-direction: column;
}
.props__left-smoll-img-img {
    margin-bottom: 13px;
    border: 1px solid #d0d0d1;
}
.props__left-big-img {
    margin-left: 13px;
    border: 1px solid #d0d0d1;
}
.props__right {
    margin-top: 19px;
}
.props__right-text-wrap {
    width: 555px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
}
.props__right-wrap-text {
    color: #414D6A;
    font-size: 14px;
    font-family: glory;
    font-weight: 500;
}
.props__right-header {
    color: #444;
    font-size: 40px;
    font-family: glory;
    font-weight: 500;
    margin-bottom: 8px;
}
.props__right-text {
    color: #4E72CA;
    font-size: 14px;
    font-family: glory;
    font-weight: 600;
    text-decoration-line: underline;
    margin-bottom: 14px;
}
.props__right-phone {
    width: 396px;
    display: flex;
    border-radius: 18.5px;
    background: #65E99F;
    align-items: center;
    padding: 0px 0px 0px 24px;
}
.props__right-phone1 {
    width: 396px;
    display: flex;
    border-radius: 18.5px;
    background: #65E99F;
    align-items: center;
    padding: 0px 0px 0px 24px;
    margin-top: 7px;
}
.props__right-phone-text {
    color: #000;
    font-size: 21px;
    font-family: glory;
    font-weight: 700;
    letter-spacing: 2.1px;
    margin-right: 6px;
}
.props__right-phone-text1 {
    color: #000;
    font-size: 21px;
    font-family: glory;
    font-weight: 700;
    letter-spacing: 2.1px;
    margin-right: 12px;
}
.props__right-phone-header {
    color: #000;
    font-size: 15px;
    font-family: glory;
    border-radius: 18.5px;
    background: #41D481;
    padding: 9px 24px;
    width: 190px;
}
.props__right-polo-text {
    margin-top: 17px;
    color: #000;
    font-size: 14px;
    font-family: glory;
}
.props__right-polo-span {
    margin-left: 7px;
    color: #2AAE63;
    font-size: 14px;
    font-family: glory;
    font-weight: 700;
    text-decoration-line: underline;
}
.props__right-card-button {
    margin-top: 24px;
}
.props__right-card-button-btn {
    color: #FFF;
    font-size: 14px;
    font-family: glory;
    font-weight: 800;
    border-radius: 23.5px;
    background: #304FFF;
    padding: 14px 28px;
    border: #304FFF;
    margin-right: 11px;
}
.props__right-card-button-btn2 {
    color: #FFF;
    font-size: 14px;
    font-family: glory;
    font-weight: 800;
    padding: 14px 32px;
    border-radius: 23.5px;
    background: #4E72CA;
    border: #4E72CA;
}
.props__right-inner {
    display: flex;
    margin-top: 25px;
    width: 559px;
    flex-wrap: wrap;
}
.props__right-inner-card {
    padding: 13px 32px 23px 17px;
    border: 1px solid #aeaeae;
    border-right: none;
    border-top: none;
}
.props__right-inner-card-header {
    color: #444;
    font-size: 14px;
    font-family: glory;
    font-weight: 600;
    width: 131px;
    margin-bottom: 6px;
}
.props__right-inner-card-text {
}
.props__right-long {
    padding: 15px;
    border-left: 1px solid rgb(189, 187, 189);
}
.props-right-long-text {
    margin-bottom: 4px;
    color: #444;
    font-size: 14px;
    font-family: glory;
    font-weight: 600;
}
.props__right-inner-card-link {
}
.props__right-long-card {
}
.props__right-long-card-header {
    color: #414D6A;
    margin-top: 15px;
    font-size: 17px;
    font-family: glory;
    font-weight: 500;
    line-height: 25px;
}

</style>