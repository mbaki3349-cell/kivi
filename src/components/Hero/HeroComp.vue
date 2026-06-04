<script setup></script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <img class="left" src="/hero__icon-1.svg" alt="" />
        <ul class="hero__list">
          <li class="hero__item">
            <div class="hero__wrap">
              <img class="hero__item-img-1" src="/hero__img-1.svg" alt="" width="75" height="75" />
              <p class="hero__item-text">Автомобили</p>
            </div>
          </li>
          <li class="hero__item">
            <div class="hero__wrap">
              <img class="hero__item-img-2" src="/hero__img-2.svg" alt="" width="75" height="75" />
              <p class="hero__item-text">Недвижимость</p>
            </div>
          </li>
          <li class="hero__item">
            <div class="hero__wrap">
              <img class="hero__item-img-3" src="/hero__img-3.svg" alt="" width="75" height="75" />
              <p class="hero__item-text">Электроника</p>
            </div>
          </li>
          <li class="hero__item">
            <div class="hero__wrap">
              <img class="hero__item-img-4" src="/hero__img-4.svg" alt="" width="75" height="75" />
              <p class="hero__item-text">Работа</p>
            </div>
          </li>
          <li class="hero__item">
            <div class="hero__wrap">
              <img class="hero__item-img-5" src="/hero__img-5.svg" alt="" width="75" height="75" />
              <p class="hero__item-text">Личные вещи</p>
            </div>
          </li>
          <li class="hero__item">
            <div class="hero__wrap">
              <img class="hero__item-img-6" src="/hero__img-6.svg" alt="" width="75" height="75" />
              <p class="hero__item-text">Дом и Сад</p>
            </div>
          </li>
          <li class="hero__item">
            <div class="hero__wrap">
              <img class="hero__item-img-7" src="/hero__img-7.svg" alt="" width="75" height="75" />
              <p class="hero__item-text">Стройка и ремонт</p>
            </div>
          </li>
          <li class="hero__item">
            <div class="hero__wrap">
              <img class="hero__item-img-8" src="/hero__img-8.svg" alt="" width="75" height="75" />
              <p class="hero__item-text">Хобби и Спорт</p>
            </div>
          </li>
          <li class="hero__item">
            <div class="hero__wrap">
              <img class="hero__item-img-9" src="/hero__img-9.svg" alt="" width="75" height="75" />
              <p class="hero__item-text">Бизнес и услуги</p>
            </div>
          </li>
        </ul>
        <img class="right" src="/hero__icon-2.svg" alt="" />
        <div class="hero__content">
          <h2 class="hero__content-header">Новые объявления</h2>
          <h2 class="hero__content-header1">Лучщие предложение</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.hero {
  padding-top: 61px;
}
.container {
}
.hero__wrapper {
  position: relative;
}
.hero__list {
  display: flex;
  justify-content: space-between;
}
.right {
  position: absolute;
  content: '';
  top: 26px;
  right: -46px;
  height: 34px;
  width: 34px;
  background-color: #fff;
  border-radius: 50%;
}
.left {
  position: absolute;
  content: '';
  top: 26px;
  left: -46px;
  height: 34px;
  width: 34px;
  background-color: #fff;
  border-radius: 50%;
}
.hero__item {
}
.hero__item-img-1 {
  border-radius: 20px;
  background: #b6cafb;
  padding: 11px 10px 12px 13px;
}
.hero__item-img-2 {
  border-radius: 20px;
  background: #b4e2e1;
  padding: 11px 10px 12px 13px;
}
.hero__item-img-3 {
  border-radius: 20px;
  background: #ff9e83;
  padding: 11px 10px 12px 13px;
}
.hero__item-img-4 {
  border-radius: 20px;
  background: #f7e233;
  padding: 11px 10px 12px 13px;
}
.hero__item-img-5 {
  border-radius: 20px;
  background: #f6dac2;
  padding: 11px 10px 12px 13px;
}
.hero__item-img-6 {
  border-radius: 20px;
  background: #b4e2e1;
  padding: 11px 10px 12px 13px;
}
.hero__item-img-7 {
  border-radius: 20px;
  background: #b6cafb;
  padding: 11px 10px 12px 13px;
}
.hero__item-img-8 {
  border-radius: 20px;
  background: #f6dac2;
  padding: 11px 10px 12px 13px;
}
.hero__item-img-9 {
  border-radius: 20px;
  background: #ff9e83;
  padding: 11px 10px 12px 13px;
}

.hero__wrap {
  text-align: center;
}
.hero__item-text {
  color: #4a4a4a;
  font-size: 14px;
  font-family: Gilroy;
  font-weight: 700;
}
.hero__content {
  display: flex;
  border-bottom: 3px solid #d5d5d5;
  padding-bottom: 10px;
  margin-bottom: 22px;
  margin-top: 26px;
}
.hero__content-header {
  margin-right: 95px;
  color: #9b9b9b;
  font-size: 24px;
  font-family: glory;
  font-weight: 700;
}
.hero__content-header1 {
  color: #9b9b9b;
  font-size: 24px;
  font-family: glory;
  font-weight: 700;
}
</style>
