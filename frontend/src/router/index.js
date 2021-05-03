import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/MainPage.vue';
import Korea from '../views/MusicPageKor.vue';
import Genre from '../views/MusicPageKorGenre.vue';
import Youtube from '../views/youtube.vue';

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
    props: true
  },
  {
    path: '/Korea/:genre',
    name: 'Genre',
    component: Genre,
    props: true
  },
  {
    path: '/questions',
    name: 'Genre',
    component: Genre,
    props: true
  },
  {
    path:'/youtube',
    name: 'Youtube',
    component: Youtube,
  }
]

const router = new VueRouter({
  mode: 'history',
//   base: process.env.BASE_URL,
  routes
})

export default router
