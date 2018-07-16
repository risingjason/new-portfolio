import Vue from 'vue';
import Router from 'vue-router';
import FullPage from '@/components/FullPage';
import HomePage from '@/components/HomePage';
import ProjectPage from '@/components/ProjectPage';
import ContactPage from '@/components/ContactPage';
import NavBar from '@/components/NavBar';

Vue.use(Router);
Vue.component('nav-bar', NavBar);

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
          path: '/projects',
          component: ProjectPage,
          name: 'Projects',
        },
        {
          path: '/contact',
          component: ContactPage,
          name: 'Contact',
        },
      ],
    },
  ],
  mode: 'history',
});
