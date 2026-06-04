<script setup>

</script>

<template>
    <section class="bottom">
        <div class="container">
            <div class="bottom__wrapper">
                <div class="bottom__card">
                    <div class="bottom__card-left">
                        <h2 class="bottom__card-header">
                            Любая категория
                        </h2>
                        <h2 class="bottom__card-header1">
                            Что будем искать ?
                        </h2>
                    </div>
                    <div class="bottom__card-right">
                        <h2 class="bottom__card-header2">
                            По всей Узбекистану
                        </h2>
                        <button class="bottom__right-btn">Найти</button>
                    </div>
                </div>
                <button class="bottom__card-button">
                    <p class="plus">
                        +
                    </p>
                    <p class="bottom__card-button-text">
                        Добавить обьявления
                    </p>
                </button>
            </div>
        </div>
    </section>
</template>

<style>
.bottom {
    background: #FFF;
    box-shadow: 6px 10px 21px 0px rgba(0, 0, 0, 0.06);
    padding: 16px 0;
}
.container {
}
.bottom__wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
}
.bottom__card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 22.5px;
    border: 1px solid rgba(151, 151, 151, 0.50);
    background: #FFF;
    width: 872px;
    padding: 0px 0px 0px 30px;
}
.bottom__card-left {
    display: flex;
    
}
.bottom__card-header {
    color: #000;
    font-size: 15px;
    font-family: glory;
    font-weight: 500;
    padding-right: 44px;
}
.bottom__card-header1 {
    color: #000;
    font-size: 15px;
    font-family: glory;
    font-weight: 500;
    margin-left: 25px;
}
.bottom__card-header2 {
    color: #000;
    font-size: 15px;
    font-family: glory;
    font-weight: 500;
}
.bottom__card-header::before {
    position: absolute;
    content: '';
    background-image: url('/bottom__right-icon.svg');
    top: 21px;
    left: 149px;
    height: 8px;
    width: 14px;
}
.bottom__card-header2::before {
    position: absolute;
    content: '';
    background-image: url('/bottom__right-icon.svg');
    top: 21px;
    left: 749px;
    height: 8px;
    width: 14px;
}
.bottom__card-header::after {
    position: absolute;
    content: '';
    background: #E1E1E1;
    top: 1px;
    left: 183px;
    height: 44px;
    width: 1px;
}
.bottom__card-header2::after {
    position: absolute;
    content: '';
    background: #E1E1E1;
    top: 1px;
    left: 573px;
    height: 44px;
    width: 1px;
}

.bottom__card-right {
    display: flex;
    align-items: center;
}
.bottom__right-btn {
    border-radius: 22px;
    background: #19D476;
    padding: 14px 18px;
    border: #19D476;
    height: 44px;
    color: #FFF;
    font-size: 14px;
    font-family: glory;
    font-weight: 700;
    margin-left: 60px;
}
.bottom__card-button {
    border-radius: 22px;
    background: #19D476;
    display: flex;
    align-items: center;
    border: #19D476;
    height: 44px;
}
.plus {
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: #11B463;
    color: #FFF;
    font-size: 28px;
    font-family: Gilroy;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
}
.bottom__card-button-text {
    color: #FFF;
    font-size: 15px;
    font-family: glory;
    font-weight: 700;
    margin-right: 30px;
}
</style>