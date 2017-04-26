import Vue from 'vue';
import VueResource from 'vue-resource';
import VueCookie from 'vue-cookie';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(VueResource);
Vue.use(VueCookie);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ru',
});

new Vue({
  el: '#app',
  store,
  router,
  i18n,
  render: h => h(App),
});
