import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',//默认跳转
        redirect:'/index'
    },
    {
        path:'/index',//首页
        name:"index",
        component:()=>import('../01-views/index.vue')
    },
    {
        path:'/specialevent',//特殊事件
        name:"specialeEvent",
        component:()=>import('../03-specialevent/specialEvent.vue'),
        children:[
            {
                path:"",
                redirect:"/specialevent/1"
            },
            {
                path:"1",
                component:()=>import('../03-specialevent/sonvue/event1.vue')
            },
            {
                path:"2",
                component:()=>import('../03-specialevent/sonvue/event2.vue')
            },
            {
                path:"3",
                component:()=>import('../03-specialevent/sonvue/event3.vue')
            },
            {
                path:"4",
                component:()=>import('../03-specialevent/sonvue/event4.vue')
            },
            {
                path:"5",
                component:()=>import('../03-specialevent/sonvue/event5.vue')
            },
            {
                path:"6",
                component:()=>import('../03-specialevent/sonvue/event6.vue')
            },
        ]
    },
    {
        path:'/personinfo',//人物信息
        name:"personinfo",
        component:()=>import('../02-personinfo/personInfo.vue')
    }
]

const router = createRouter(
    {
        history:createWebHashHistory(),
        routes
    }
)

export default router