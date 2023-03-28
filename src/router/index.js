// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../components/testAbout.vue'
import Home from '../components/testHome.vue'
import indexView from '../views/indexView.vue'


//创建并暴露一个路由器
export default new VueRouter({
	routes:[
        {
            path:'/',
            component:indexView
        },
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home
		}
	]
})