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
</script>

<template>
  <section class="vue">
    <div class="vue__wrapper">
      <div class="props__card" v-for="item in obj" :key="item.id" :id="item.id">
        <ul class="vue__list">
          <li class="vue__item">
            <router-link :to="'/props/' + item.id">
              <img :src="item.image" alt="" width="262" height="290">
            <h2 class="vue__item-header">
              {{ item.title }}
            </h2>
            <p class="vue__item-text">
              $ {{ item.price }}
            </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
.vue {
  padding-bottom: 56px;
}

.vue__wrapper {
  display: flex;
  justify-content: space-between;
}

.props__card {}

.vue__list {}

.vue__item {
  width: 262px;
  height: 382px;
}

.vue__item-header {
  color: #000;
  font-size: 16px;
  font-family: glory;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 8px;
}

.vue__item-text {
  color: #000;
  font-size: 16px;
  font-family: glory;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 15px;
}
</style>