// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'


//创建并暴露一个路由器
export default new VueRouter({
	routes:[
        {
            path:'/',
			name:'index',
            component: () => import('../views/indexView.vue'),
			children: [
				{
					path:'/index/',
					name:'home',
					component: () => import('../components/home/index.vue'),
				},{
					path:'/index/addquestions',
					name:'addquestions',
					component: () => import('../components/add/addQuestions.vue'),
				},{
					path:'/index/viewQuestions',
					name:'viewQuestions',
					component: () => import('../components/view/viewQuestions.vue'),
				},{
					path:'/index/loveQuestions',
					name:'loveQuestions',
					component: () => import('../components/favorites/loveQuestions.vue'),
				},{
					path:'/index/removeQuestions',
					name:'removeQuestions',
					component: () => import('../components/recycleBin/removeQuestions.vue'),
				},
			]
        }
	]
})