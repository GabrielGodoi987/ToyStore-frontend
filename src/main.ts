import "./boot/Axios"
import { createApp } from "vue";
import "./style.css";
import "./css/tailwind.variables.css";
//import '@fortawesome/fontawesome-free/css/all.min.css';
import App from "./App.vue";
import Router from "./routes";
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(Router).mount("#app");





