import { createRouter, createWebHashHistory as Router } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [{ path: '/', component: Home }];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: Router(),
    routes,
});

export default router;
