import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Parse from "parse"
import {ParseVueObject} from "./ParseVueObject"
Vue.config.productionTip = false

import "./app.scss"
import {YourObject} from "@/model/YourObject";

Parse.initialize("app", "js");
Parse.serverURL = "http://localhost:1337/parse";

// TODO Register all your classes here
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Parse.Object.registerSubclass("YourObject", YourObject);



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
