import Vue from "vue"
import VueRouter from "vue-router"

import UsersList from "./components/UsersList.vue"
import UserForm from "./components/UserForm.vue"
import Home from "./components/Home.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/usersList",
            name: "usersList",
            component: UsersList
        },
        {
            path: "/usersList/:userId",
            name: "user",
            component: UserForm
        }
    ]
})