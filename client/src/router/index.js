import Vue from 'vue';
import Router from 'vue-router';
import FullPage from '@/components/FullPage';
import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: FullPage,
      children: [
        {
          path: '',
          component: HomePage,
          name: 'Home',
        },
        {
          path: '/about',
          component: AboutPage,
          name: 'About',
        },
      ],
    },
  ],
  mode: 'history',
});
