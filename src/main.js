import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import { lang } from './i18n/i18n'
import { defaulLang } from './i18n/i18n'
import { createI18n, useI18n } from 'vue-i18n'

const messages = Object.assign(lang)
const i18 = createI18n({
    legacy: false,
    locale: defaulLang,
    fallbackLocale: 'en',
    messages
})
const app = createApp(App, {
    setup(){
        const {t} = useI18n
        return {t}
    }
})

app.use(router)
app.use(i18)

app.mount('#app')
