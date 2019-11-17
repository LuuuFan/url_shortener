import Vue from 'vue';
import Router from 'vue-router';
import Main from './components/Main';
import NotFound from './components/NotFound';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Main',
			component: Main,
		},
		{
			path: '/404',
			name: 'NotFound',
			component: NotFound,
		},
		{
			path: '/404/:code',
			name: 'NotFound',
			component: NotFound,
		},
	]
})