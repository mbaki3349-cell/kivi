<script setup>
import {GetAll} from '../../Servic/Servic.js'
import {our} from '../FetchAll.js'
GetAll()

</script>

<template>
        <section class="photo__section">
        <div class="container">
            <div class="photo__section-wrapper">
                <div class="photo__section-FetchAll">
                    <ul class="photo__section-list">
                        <li class="photo__section-item" v-for="item in our.get">
                            <h2 class="photo__section-item-header">
                                {{ item.title }}
                            </h2>
                            <p class="photo__section-item-text">
                                $ {{ item.price }} CYM
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <RouterView></RouterView>
        </div>
    </section>
</template>