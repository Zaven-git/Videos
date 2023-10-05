import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Videos from '../views/Vidoes/Index.vue';
import ContactForm from '../views/ContactForm.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Videos',
    component: Videos,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactForm,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: {name: '/404'}
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
