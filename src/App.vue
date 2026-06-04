<script setup>
import { RouterView, useRouter } from 'vue-router'
import Header from './components/Header/Header.vue';

let router = useRouter()
let token = localStorage.getItem('token')
if (token) {
  // router.push( {path: '/'})
}else{
  // router.push( {path: '/'})
}

</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

