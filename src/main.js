import Vue from 'vue'
// import App from './App.vue'
import NavBar from './components/layout/NavBar';
import routes from './route/index';

import vuetify from "./plugin/vuetify";
import VueRouter from "vue-router";

import store from './store/index';

// const isProduction = process.env.NODE_ENV === 'production';

// const options = {
//     isEnabled: true,
//     logLevel : isProduction ? 'error' : 'debug',
//     stringifyArguments : false,
//     showLogLevel : true,
//     showMethodName : true,
//     separator: '|',
//     showConsoleColors: true
// };

const router = new VueRouter({
  routes
});

// Vue.use(VueLogger, options);


Vue.router = router;
Vue.use(VueRouter);

Vue.config.productionTip = false

const DEFAULT_TITLE = 'App Test';

router.afterEach((to) => {
  let need_auth = to.meta.auth;
  let auth_token = localStorage.getItem('auth_token');
 
  if (need_auth && auth_token === null) {
    router.push('/login')
  }

  if (to.path === "/") {
    document.title = DEFAULT_TITLE + "| " + 'Home';
  } else {
    document.title = DEFAULT_TITLE + "| " + to.name || DEFAULT_TITLE;
  }
  
});

new Vue({
  router,
  store: store,
  vuetify,
  render: h => h(NavBar),
}).$mount('#app')