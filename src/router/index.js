import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from "../config";

Vue.use(VueRouter);

const preventRoutes = {
    beforeEnter: (to, from, next) => {
        if (getToken()) {
            next()
        } else {
            next('/login')
        }
    }
};
const routes = [{
        path: "/",
        name: "Home",
        ...preventRoutes,
        component: () =>
            import ("../views/home/Homepage.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../views/login/Login.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ("../views/register/Register.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;