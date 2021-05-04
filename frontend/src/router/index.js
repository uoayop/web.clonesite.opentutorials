import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/MainPage.vue';
import Korea from '../views/MusicPageKor.vue';
import Genre from '../views/MusicPageKorGenre.vue';
import Edit from '../views/MusicEditPage.vue';
import Delete from '../views/MusicDeletePage.vue';

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
    path:'/setting/delete',
    name: 'Delete',
    component: Delete,
    props:true,
  },
  {
    path:'/setting/edit',
    name: 'Edit',
    component: Edit,
    props:true,
  }
]

const router = new VueRouter({
  mode: 'history',
//   base: process.env.BASE_URL,
  routes
})

export default router
