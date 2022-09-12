import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import RouteView from '../views/RouteView.vue';
import MitsumoriView from '../views/MitsumoriView.vue';
import JuchuView from '../views/JuchuView.vue';
import HatchuView from '../views/HatchuView.vue';
import ShukkaView from '../views/ShukkaView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: RouteView,
    meta: {
      title: 'hoge',
    },
  },
  {
    path: '/mitsumori',
    name: '見積入力',
    component: MitsumoriView,
  },
  {
    path: '/juchu',
    name: '受注入力',
    component: JuchuView,
  },
  {
    path: '/hatchu',
    name: '発注入力',
    component: HatchuView,
  },
  {
    path: '/shukka',
    name: '出荷入力',
    component: ShukkaView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
