import { createRouter, createWebHistory } from 'vue-router';
import Index from './pages/Index.vue';
import MovieDetails from '@/pages/MovieDetails.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/movies/:id', component: MovieDetails, name: 'MovieDetails' }, 
  { path: '/:pathMatch(.*)*', redirect: '/' } // Redirect unmatched paths to '/'
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
