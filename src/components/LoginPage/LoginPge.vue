<script setup>
import { useRouter } from 'vue-router';
let router = useRouter()
let token = localStorage.getItem('token')
if (token) {
  router.push( {path: '/'})
}else{
//   router.push( {path: '/'})
}
import HeaderBottom from '../HeaderBottom/HeaderBottom.vue';
let username = ''
let password = ''
function Login() {
    console.log(username,password);
    fetch('https://crud-lffq.onrender.com/login',{
        headers: {'Content-Type' : 'application/json'},
        method: "POST",
        body: JSON.stringify({
    username: username,
    password: password 
})
    })
    .then(res => res.json())
    .then(data => {
        try {
            console.log(data);
        if (data.status == 200) {
            alert(data.status);
            window.localStorage.setItem( "token", username)
            // location.href = '/'
            router.push( {path: '/'})
        } else {
            alert(data.message)
        }
        } catch (error) {
            alert(error.message)
        }
    })
}
</script>

<template>
    <HeaderBottom />
    <section class="login">
        <div class="container">
            <div class="login__wrapper">
                <div class="login__left">
                    <h2 class="login__left-header">
                        Ваша регистрация завершена!
                    </h2>
                    <p class="login__left-text">
                        Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в виде смс на ваше телефонный номер
                    </p>
                    <p class="login__left-text-b">
                        Введите email или номер телефона
                    </p>
                    <input class="login__left-input" type="text" placeholder="99891 167 27 23" v-model="username">
                    <p class="login__laft-text-text">
                        Пароль
                    </p>
                    <input class="login__left-input" type="text" placeholder="***********" v-model="password">
                    <button @click="Login" class="login__left-btn">Войти</button>
                    <p class="login__laft-text-text-1">
                        или
                    </p>
                    <h3 class="login__left-b-header">
                        Восстоновить ваше пароль
                    </h3>
                </div>
                <img class="login__right-img" src="/login__img.png" alt="">
                <div class="login__kivi">
                    <img src="../../../public/login__icon.svg" alt="">
                    <h3 class="login__kivi-header">
                        Откройте для себя целую плошадку для продаже 
                    </h3>
                    <button class="login__kivi-btn">
                        Как это делать?
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.login {
    padding-bottom: 100px;
}
.container {
}
.login__wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
}
.login__left {
    padding-top: 81px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login__left-header {
    color: #000;
    text-align: center;
    font-size: 22px;
    font-family: Gilroy;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 22px;
    width: 427px;
}
.login__left-text {
    color: #304FFF;
    text-align: center;
    font-size: 17px;
    font-family: Gilroy;
    font-weight: 500;
    line-height: 23px;
    margin-bottom: 11px;
    width: 334px;
}
.login__left-text-b {
    color: #787993;
    font-size: 17px;
    font-family: Gilroy;
    font-weight: 500;
    margin-bottom: 7px;
}
.login__left-input {
    border-radius: 5px;
    border: 1px solid rgba(151, 151, 151, 0.48);
    background: #FFF;
    padding: 19px 24px;
    width: 329px;
    color: #C7C7C7;
    font-size: 19px;
    font-family: Gilroy;
    font-weight: 500;
}
.login__laft-text-text {
    width: 329px;
    color: #787993;
    font-size: 17px;
    font-family: Gilroy;
    font-weight: 500;
    margin:24px 0 7px 0;
}
.login__left-btn {
    display: block;
    border-radius: 5px;
    background: #41D481;
    color: #FFF;
    text-align: center;
    font-size: 17px;
    font-family: Gilroy;
    font-weight: 500;
    padding: 20px 141px;
    border: #41D481;
    margin-top: 30px;
}
.login__laft-text-text-1 {
    position: relative;
    color: #787993;
    text-align: center;
    font-size: 14px;
    font-family: Gilroy;
    font-weight: 500;
    margin-top: 49px;
}
.login__laft-text-text-1::after{
    position: absolute;
    content: '';
    top: 8px;
    left: 42px;
    width: 131px;
    height: 2px;
    background-color: #979797;
}
.login__laft-text-text-1::before {
    position: absolute;
    content: '';
    top: 8px;
    left: -151px;
    width: 131px;
    height: 2px;
    background-color: #979797;
}
.login__left-b-header {
    color: #4E72CA;
    text-align: center;
    font-size: 16px;
    font-family: Gilroy;
    font-weight: 700;
    margin-top: 16px;
}
.login__right-img {
}

.login__kivi {
    border-radius: 220px 220px 220px 25px;
    background: #FFF;
    position: absolute;
    bottom: 230px;
    right: 290px;
    padding: 79px 20px 41px 40px;
}
.login__kivi-header {
    color: #787993;
    font-size: 19px;
    font-family: Gilroy;
    font-weight: 700;
    line-height: 21px;
    width: 213.231px;
    margin-top: 7px;
}
.login__kivi-btn {
    margin-top: 18px;
    color: #41D481;
    font-size: 16px;
    font-family: Gilroy;
    font-weight: 700;
    border-radius: 5px;
    padding: 10px 18px;
    border: 2px solid #41D481;
}
</style>