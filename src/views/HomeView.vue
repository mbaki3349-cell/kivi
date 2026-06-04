<script setup>
import HeroComp from '../components/Hero/HeroComp.vue';
import FetchAll from '../components/FetchAll/FetchAll.vue'
import { ref } from "vue"
import Footer from '../components/Footer/Footer.vue';
let arr = ref([]) 
let obj = ref([]) 
let open = ref(false)
function GetAll() {
    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(data => {
        arr.value = data
        obj.value = data.splice(16 ,4)
    })
}
GetAll()
function bos() {
    open.value = !open.value

}
</script>

<template>
    <HeroComp />
    
    <section class="props">
        <div class="container">
            <div class="props__wrapper">

                <div class="props__card" v-for="item in arr" :key="item.id" :id="item.id">
                    <FetchAll :obj="item"/>
                </div>
                <router-link to="" style="display: flex; justify-content: center; align-items: center; margin-bottom: 50px; margin: 0 auto;" @click="bos">
                    <p class="splice__card-text-center">
                        Покозать еще
                    </p>
                    <img src="../../public/route__link-icon.svg" alt="">
                </router-link>
            </div>
        </div>
    </section>
    
    <section class="splice">
        <div class="container">
            <div class="splice__wrapper">
                <div class="splice__content">
                    <h2 class="splice__card-header">
                        Просмотренные
                    </h2>
                    <h2 class="splice__card-header1">
                        Выбор редакции
                    </h2>
                    <h2 class="splice__card-header">
                        Сниженные цены
                    </h2>
                </div>
                <div class="splice__card" v-if="open">
                    <div class="props__card" v-for="item in obj" :key="item.id" :id="item.id">
                        <FetchAll :obj="item"/>
                    </div>
                </div>
                <router-link to="" style="display: flex; justify-content: center; align-items: center; margin-bottom: 50px;">
                    <p class="splice__card-text-center">
                        Покозать еще
                    </p>
                    <img src="../../public/route__link-icon.svg" alt="">
                </router-link>
            </div>
        </div>
    </section>
    <router-view></router-view>
    <Footer />
</template>
<style>
.props__wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.props__card{
    margin-bottom: 37px;
}
.splice {
}
.container {
}
.splice__wrapper {
}
.splice__content{
    position: relative;
    display: flex;
    border-bottom: 3px solid #D5D5D5;
    padding-bottom: 10px;
    margin-bottom: 22px;
    margin-top: 26px;
}
.splice__card {
    display: flex;
    justify-content: space-between;
}
.splice__card-header1 {
    margin:  0 95px;
    color: #9B9B9B;
    font-size: 24px;
    font-family: glory;
    font-weight: 700;
}
.splice__card-header{
    color: #9B9B9B;
    font-size: 24px;
    font-family: glory;
    font-weight: 700;
    
}

.props__card {
}
.splice__card-text-center{
    color: #4E72CA;
    font-size: 15px;
    font-family: glory;
    font-weight: 600;
    margin-right: 8px;
    
}

</style>