import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Homepage from './views/list/homepage.vue' 
import Market from './views/list/Market.vue' 
import Table from './views/list/Table.vue'
import WorkPanel from './views/list/WorkPanel.vue'
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
            
            { path: '/homepage', component: Homepage, name: 'HomePage' ,meta: {
                keepAlive: true // 需要被缓存
            }},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        leaf: true,//只有一个节点
        iconCls: 'el-icon-shopping-bag-2', //图标样式class
        children: [
            { path: '/market', component: Market, name: 'Market' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '工作台',
        leaf: true,
        iconCls: 'el-icon-s-platform', 
        children: [
            { path: '/panel', component: WorkPanel, name: 'Panel' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '菜单',
        // leaf: true,//只有一个节点
        iconCls: 'el-icon-message', //图标样式class
        children: [
            { path: '/table', component: Table, name: 'table01' }
        ]
    }
];

export default routes;