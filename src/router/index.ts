import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'

const routes : Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'Home',
        component: () => import('@/view/Home/index.vue')
    },
    {
        path:'/canvas',
        name:'Canvas',
        component: () => import('@/view/Canvas/arc/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
