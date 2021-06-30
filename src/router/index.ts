import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import {Helper} from "@/Helper";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/signup",
        name: "SignUp",
        component: () => import("../views/SignUp.vue")
    }
]

const router = new VueRouter({
    routes,
})
router.beforeEach((to, from, next) => {
    if ((to.name !== 'Login') && !Helper.LoggedIn()) {
        if ((to.name === "ResetPassword" || to.name === "SignUp") && !Helper.LoggedIn()) {
            next();
        } else {
            next({name: 'Login'})
        }
    } else next()
})

export default router
