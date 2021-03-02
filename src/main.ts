import {createApp} from "vue";
import App from "./App.vue";
import "./index.scss";
import {createWebHashHistory, createRouter} from "vue-router";
import Home from './views/Home.vue'
import Dock from './views/Dock.vue'

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes:[
        {path: '/', component: Home},
        {path:'/dock', component: Dock}
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')
