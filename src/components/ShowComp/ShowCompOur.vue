<script setup>
import { ref } from 'vue'
let arr = ref([])
let obj = ref([])
function GetAll() {
    fetch('https://fakestoreapi.com/products/')
    .then((res) => res.json())
    .then((data) => {
        arr.value = data
        obj.value = data.splice(16, 4)
    })
}
GetAll()

import { useRoute } from "vue-router";
let route = useRoute()

let linkId = `/props/${route.params.id}`
</script>

<template>
    <section class="show">
        <div class="container">
            <div class="show__wrapper">
                <div class="show__card">
                    <router-link :to="linkId">
                        <h2 class="show__card-header">
                            Похожие объявления
                        </h2>
                    </router-link>
                    <router-link :to="linkId  + '/poxojie'">
                        <h2 class="show__card-header1">
                            Обьявление автора
                        </h2>
                    </router-link>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </section>
</template>

<style>
.show {
    margin-top: 100px;
}
.container {
}
.show__wrapper {
}
.show__card {
    position: relative;
    display: flex;
    border-bottom: 3px solid #D5D5D5;
    padding-bottom: 10px;
    margin-bottom: 21px;
    
}
.show__card-header1{
    margin-left: 90px;
    color: #9B9B9B;
    font-size: 24px;
    font-family: glory;
    font-weight: 700;
}
.show__card-header{
    color: #9B9B9B;
    font-size: 24px;
    font-family: glory;
    font-weight: 700;
}
.show__card-header1:active::after{
    position: absolute;
    content: '';
    top: 38px;
    left: 360px;
    width: 128px;
    height: 3px;
    background-color: #4E72CA;
    color: #4E72CA;
    font-size: 24px;
    font-family: glory;
    font-weight: 900;
}
.show__card-header:active::after{
    position: absolute;
    content: '';
    top: 38px;
    left: 60px;
    width: 128px;
    height: 3px;
    color: #4E72CA;
    background-color: #4E72CA;
    font-size: 24px;
    font-family: glory;
    font-weight: 900;
}
</style>