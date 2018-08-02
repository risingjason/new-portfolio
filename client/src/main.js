// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// font-awesome-icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import VueMq from 'vue-mq';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

// vue media queries
Vue.use(VueMq, {
  breakpoints: {
    smMobile: 390,
    mdMobile: 501,
    smTablet: 801,
    lgTablet: 1101,
    mdDesktop: 1350,
    desktop: Infinity,
  },
});

// font awesome
library.add(faLinkedinIn, faGithub, faBars, faLightbulb);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
