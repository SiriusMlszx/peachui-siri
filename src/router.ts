import {createWebHashHistory, createRouter} from "vue-router";
import Home from "./views/Home.vue";
import Dock from "./views/Dock.vue";
import SwitchDemo from "./components/SwitchDemo.vue";

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        {path: "/", component: Home},
        {
            path: "/dock", component: Dock, children: [
                {path: "switch", component: SwitchDemo}
            ]
        }
    ]
});