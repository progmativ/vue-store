import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { firebaseConfig } from "../firebase-config";

import firebaseapp from "firebase/app";

firebaseapp.initializeApp(firebaseConfig);

console.log("firebaseapp", firebaseapp);
createApp(App).use(store).use(router).mount("#app");
