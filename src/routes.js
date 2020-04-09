import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Homepage from './views/list/homepage.vue' 
import Market from './views/list/Market.vue' 
import Table from './views/list/Table.vue'

let routes = [
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
            { path: '/homepage', component: Homepage, name: '个人首页' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        leaf: true,//只有一个节点
        iconCls: 'el-icon-shopping-bag-2', //图标样式class
        children: [
            { path: '/Market', component: Market, name: '翻译市场' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '菜单',
        // leaf: true,//只有一个节点
        iconCls: 'el-icon-message', //图标样式class
        children: [
            { path: '/table', component: Table, name: '子菜单01' }
        ]
    }
];

export default routes;