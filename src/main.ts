import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import vColorPicker from 'vcolorpicker'

import './assets/css/index.css'
import 'vcolorpicker/lib/style.css'
import '@wangeditor/editor/dist/css/style.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vColorPicker)
app.mount('#app')
