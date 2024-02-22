import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
//import Table from './views/nav1/Table.vue'
//import Form from './views/nav1/Form.vue'
//import user from './views/nav1/user.vue'
//import Page4 from './views/nav2/Page4.vue'
//import Page5 from './views/nav2/Page5.vue'
//import Page6 from './views/nav3/Page6.vue'
//import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: () => import('./views/nav1/Table.vue'), name: 'Table' },
            { path: '/form', component: () => import('./views/nav1/Form.vue'), name: 'Form' },
            { path: '/user', component: () => import('./views/nav1/user.vue'), name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'el-icon-message',
        children: [
            { path: '/page4', component: () => import('./views/nav2/Page4.vue'), name: '页面4' },
            { path: '/page5', component: () => import('./views/nav2/Page5.vue'), name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-message',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: () => import('./views/nav3/Page6.vue'), name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'el-icon-message',
        children: [
            { path: '/echarts', component: () => import('./views/charts/echarts.vue'), name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;