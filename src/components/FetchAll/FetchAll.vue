<script setup>
let props = defineProps({
    obj : Object
})

</script>

<template>
    <section class="fetch">
        <div class="fetch__wrapper">
            <ul class="fetch__list">
                <li class="fetch__item">
                    <router-link class="fetch__route" :to="{
                        name: 'props',
                        params: {
                            id: props.obj.id
                        }}">
                        <img :src="props.obj.image" :alt="props.obj.title" width="262" height="290">
                        <h2 class="fetch__item-header">
                            {{ props.obj.title }}
                        </h2> 
                        <p class="fetch__item-text">
                            ${{ props.obj.price }}
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<style>
.fetch {
}
.container {
}
.fetch__wrapper {
}
.fetch__list {
}
.fetch__item {
    width: 263px;
}
.fetch__item-header {
    width: 254px;
    color: #000;
    font-size: 16px;
    font-family: glory;
    font-weight: 500;
    margin-top: 8px;
}
.fetch__item-text {
    color: #000;
    font-size: 16px;
    font-family: glory;
    font-weight: 700;
    margin-top: 6px;
}
.fetch__route{
}
</style>