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
        path:'/personinfo',//游戏人物信息
        name:"personinfo",
        component:()=>import('../02-personinfo/personInfo.vue')
    },
    {
        path:'/specialevent',//特殊事件
        name:"specialeEvent",
        component:()=>import('../03-specialevent/specialEvent.vue'),
        children:[
            {
                path:"",
                name:"specialeEvent0",
                redirect:"/specialevent/1"
            },
            {
                path:"1",
                name:"specialeEvent1",
                component:()=>import('../03-specialevent/sonvue/event1.vue')
            },
            {
                path:"2",
                name:"specialeEvent2",
                component:()=>import('../03-specialevent/sonvue/event2.vue')
            },
            {
                path:"3",
                name:"specialeEvent3",
                component:()=>import('../03-specialevent/sonvue/event3.vue')
            },
            {
                path:"4",
                name:"specialeEvent4",
                component:()=>import('../03-specialevent/sonvue/event4.vue')
            },
            {
                path:"5",
                name:"specialeEvent5",
                component:()=>import('../03-specialevent/sonvue/event5.vue')
            },
            {
                path:"6",
                name:"specialeEvent6",
                component:()=>import('../03-specialevent/sonvue/event6.vue')
            },
        ]
    },
    {
        path:'/extension',//扩展包
        name:"extension",
        component:()=>import('../04-extension/nnnnnnnn.vue')
    },
    {
        path:'/login',//登录页面
        name:"login",
        component:()=>import('../05-login/home-page/home.vue'),
    },
    {
        path:'/register', // 新增注册路由
        name:"register",
        component:()=>import('../05-login/register-page/register.vue')
    },
    {
        path:'/help',//帮助文档
        name:"help",
        component:()=>import('../06-help/help.vue')
    },
    {
    path: '/login/user',
    name: "user",
    component: () => import('../05-login/user-page/user.vue')
    }
]

const router = createRouter(
    {
        history:createWebHashHistory(),
        routes
    }
)

export default router