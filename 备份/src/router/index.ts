import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'

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
        children:[           //特殊事件的子事件
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
        path:'/register', //注册路由
        name:"register",
        component:()=>import('../05-login/register-page/register.vue')
    },
    {
    path: '/login/user',//用户登录之后的页面  嗯 但是我感觉这个放到/login下面做子路由似乎不是那么方便所以我拿出来了
    name: "user",
    component: () => import('../05-login/user-page/user.vue')
    },
    {
        path:'/help',//帮助文档
        name:"help",
        component:()=>import('../06-help/help.vue')
    },
    
]

const router = createRouter(
    {
        history:createWebHistory(),
        routes
    }
)
/*
createRouter({...}):是vue Router4中创建路由实例的函数，接受一个配置对象作为参数

    该对象包括两个属性：a.history:这里使用createWebHistory()函数创建了一个历史模式。

                      b.routes:一个路由配置数组，定义了应用程序中的路由。
                      每个路由对象映射一个路径到对应的组件。

    说明：   哈希模式createWebHashHistory(): 使用URL中的#(hash)部分,即在URL中使用 # 来
            模拟一个完整的 URL，例如，http://localhost:5173/#/index
            改变 # 后面的内容不会触发页面刷新，不在请求时就向服务器发送请求。
            但是SEO 不友好
            

            历史模式createWebHistory(): 使用 HTML5 History API，需要服务器配置支持，兼容性差一点

*/
export default router    //将创建的路由实例导出