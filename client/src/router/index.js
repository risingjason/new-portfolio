import Vue from 'vue';
import Router from 'vue-router';
import FullPage from '@/components/FullPage';
import HomePage from '@/components/HomePage';
import ProjectPage from '@/components/ProjectPage';
import NavBar from '@/components/NavBar';
import ProjectSection from '@/components/ProjectSection';
import DarkMode from '@/components/DarkMode';

Vue.use(Router);

// components that are not in their own route
Vue.component('nav-bar', NavBar);
Vue.component('proj-section', ProjectSection);
Vue.component('dark-mode', DarkMode);

export default new Router({
  routes: [
    {
      path: '/',
      component: FullPage,
      redirect: 'home',
      children: [
        {
          path: 'home',
          component: HomePage,
          name: 'Home',
        },
        {
          path: 'projects',
          component: ProjectPage,
          name: 'Projects',
        },
      ],
    },
  ],
  mode: 'history',
});
