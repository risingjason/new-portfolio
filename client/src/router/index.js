import Vue from 'vue';
import Router from 'vue-router';
import FullPage from '@/components/FullPage';
import HomePage from '@/components/HomePage';
import ProjectPage from '@/components/ProjectPage';
import ContactPage from '@/components/ContactPage';
import NavBar from '@/components/NavBar';
import ProjectSection from '@/components/ProjectSection';

Vue.use(Router);

// components that are not in their own route
Vue.component('nav-bar', NavBar);
Vue.component('proj-section', ProjectSection);

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
