import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/MainPage.vue';
import Korea from '../views/MusicPageKor.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Korea',
    name: 'Korea',
    component: Korea,
  }

]

const router = new VueRouter({
  mode: 'history',
//   base: process.env.BASE_URL,
  routes
})

export default router
