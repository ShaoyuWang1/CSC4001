import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Homepage from './views/list/homepage.vue'
import Market from './views/list/Market.vue'
import WorkPanel from './views/list/WorkPanel.vue'
// 
import UploadTask from './views/list/uploadTask.vue'
import Register from "./views/Register";

let routes = [
    {
        path: '/',
        name: 'mainpage',
        redirect: '/index',
        hidden: true
    },
    {
        path: '/index',
        component: Index,
        name: 'mainpage_index',
        hidden: true
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        hidden: true
    },
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        leaf: true,//只有一个节点
        iconCls: 'el-icon-menu', //图标样式class
        children: [
            {
                path: '/homepage', component: Homepage, name: 'HomePage', meta: {
                    keepAlive: true // 需要被缓存
                }
            },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        leaf: true,//只有一个节点
        iconCls: 'el-icon-shopping-bag-2', //图标样式class
        children: [
            {path: '/market', component: Market, name: 'Market'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '工作台',
        leaf: true,
        iconCls: 'el-icon-s-platform',
        children: [
            {path: '/panel', component: WorkPanel, name: 'Panel'}
        ]
    },

    {
        path: '/',
        component: Home,
        name: 'SubmitJob',
        leaf: true,
        iconCls: 'el-icon-upload2',
        children: [
            {path: '/submit_job', component: UploadTask, name: 'SubmitJob'}
        ],
        // hidden: true
    }

];

export default routes;