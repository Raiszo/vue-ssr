import Vue from 'vue';
import Router from 'vue-router';

import {Home as publicHome, About, Yay} from '../components/public/';
import {Home as adminHome, Consumers} from '../components/admin/';

Vue.use(Router);

export function createPublicRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: publicHome },
      { path: '/about', component: About },
      { path: '/yay', component: Yay }
    ]
  });
}

export function createAdminRouter() {
	return new Router({
		mode: 'history',
		routes: [
      { path: '/admin', component: adminHome },
      { path: '/admin/consumidores', component: Consumers }
		]
	})
}
