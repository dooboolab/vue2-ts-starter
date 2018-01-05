import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Main from '@/components/screen/Main.vue';
import Test from '@/components/screen/Login.vue';

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Test,
    },
    {
      path: '/',
      name: 'main',
      component: Main,
    },
  ],
});

